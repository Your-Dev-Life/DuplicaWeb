import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import { useTranslation } from 'react-i18next';
import localization from '../../i18n/material-table';
import FactoryForm from './factoryForm';

const useStyles = makeStyles(theme => ({
  factory: {
    maxWidth: '100%',
  },
}));

const FactoryList = props => {
  const classes = useStyles();
  const [factories, setFactories] = useState([]);
  const [factory, setFactory] = useState({});
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const { t } = useTranslation();
  const { api } = props;

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
        ref.current.openFactoryForm();
      })
      .finally(() => {
        setLoading(false);
      });
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
        onRowClick={handleFactoryFormOpen}
        data={factories}
        title={t('Factory')}
      />
      <FactoryForm
        role='FormFactory'
        factory={factory}
        loading={loading}
        ref={ref}
      />
    </div>
  );
};

export default FactoryList;
