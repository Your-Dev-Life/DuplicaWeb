import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import { useTranslation } from 'react-i18next';
import localization from '../../i18n/material-table';
import { FormDialog } from "../libs/form";
import FactoryForm from './factoryForm';

const useStyles = makeStyles(() => ({
  factory: {
    maxWidth: '100%',
  },
}));

const FactoryList = props => {
  const classes = useStyles();
  const [factories, setFactories] = useState([]);
  const [factory, setFactory] = useState({});
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const { api, handleMessages } = props;

  useEffect(() => {
    listFactories();
  }, []);

  const listFactories = () => {
    api.factoryService.list()
      .then(setFactories);
  };

  const handleFactoryFormOpen = (event, rowData) => {
    setLoading(true);
    api.factoryService.read(rowData._id)
      .then((factory) => {
        setFactory(factory);
        setOpenFormDialog(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const closeFormDialog = () => {
    listFactories();
    setFactory({});
    setOpenFormDialog(false);
  };

  return (
    <div className={classes.factory}>
      <MaterialTable
        options={{
          padding: 'dense',
        }}
        localization={localization(t)}
        columns={[
          {
            title: t('Contract'),
            field: 'contract',
            width: 20,
          },
          { title: t('Name'), field: 'name' },
          { title: t('Business Id'), field: 'businessId' },
          { title: t('Contact Phone'), field: 'contact.phone' },
        ]}
        onRowClick={handleFactoryFormOpen}
        data={factories}
        title={t('Factory')}
      />
      <FormDialog
        title={t('Factory')}
        open={openFormDialog}
        onClose={closeFormDialog}
        role='FormFactory'
      >
        <FactoryForm api={api} data={factory} afterCancel={closeFormDialog} afterRemove={closeFormDialog} handleMessages={handleMessages} />
      </FormDialog>
    </div>
  );
};

export default FactoryList;
