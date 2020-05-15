import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from "material-table";
import { useTranslation } from 'react-i18next';
import { FormDialog, FormFooter } from '../libs';
import localization from '../../i18n/material-table';
import api from '../../api';

const useStyles = makeStyles(theme => ({
  factory: {
    maxWidth: '100%',
  },
}));

const Factory = props => {
  const classes = useStyles();
  const [factories, setFactories] = useState([]);
  const [currentFactory, setCurrentFactory] = useState({});
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    listFactories();
  }, []);

  const listFactories = () => {
    //TODO Add generic error handler with message for the user
    api.factoryService.list()
      .then(setFactories);
  };

  const handleFormDialogOpen = (event, rowData) => {
    api.factoryService.read(rowData._id)
      .then((factory) => {
        setCurrentFactory(factory);
        setFormDialogOpen(true);
      })
      .catch((err) => {
        //TODO Set error for the user and do not open the Form Dialog
        console.log(err);
      });
  };

  const handleFormDialogClose = () => {
    setCurrentFactory({});
    setFormDialogOpen(false);
  };

  const handleSave = () => {
    setLoading(true);
    console.log('Saved');
    setTimeout(() => setLoading(false), 2000);
  };

  const handleCancel = () => {
    setLoading(true);
    handleFormDialogClose();
    setLoading(false);
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
          { title: t('BusinessId'), field: 'businessId' },
          { title: t('Phone'), field: 'contact.phone' },
        ]}
        onRowClick={handleFormDialogOpen}
        data={factories}
        title={t('Factory')}
      />
      <FormDialog title={t('Factory')} open={formDialogOpen} onClose={handleFormDialogClose}>
        <div>
          {currentFactory.name}
        </div>
        <FormFooter
          saveButtonText='Save'
          cancelButtonText='Cancel'
          onSave={handleSave}
          onCancel={handleCancel}
          loading={loading}
        />
      </FormDialog>
    </div>
  );
};

export default Factory;
