import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from "material-table";
import { useTranslation } from 'react-i18next';
import localization from '../../i18n/material-table';

const useStyles = makeStyles(theme => ({
  factory: {
    maxWidth: '100%',
  },
}));

const Factory = props => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.factory}>
      <MaterialTable
        options={{
          padding: 'dense',
        }}
        localization={localization(t)}
        columns={[
          { title: t('Contract'), field: 'contract' },
          { title: t('Name'), field: 'name' },
          { title: t('ID'), field: 'cnpj' },
        ]}
        data={[
          { contract: '1', name: 'Fábrica 1', cnpj: '08.532.206/0001-74' }
        ]}
        title={t('Factory')}
      />
    </div>
  );
};

export default Factory;
