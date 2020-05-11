import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from "material-table";
import { useTranslation } from 'react-i18next';
import { FormDialog, FormFooter } from '../libs';
import localization from '../../i18n/material-table';

const useStyles = makeStyles(theme => ({
  factory: {
    maxWidth: '100%',
  },
}));

const Factory = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { t } = useTranslation();

  const handleFormDialogOpen = (event, rowData) => {
    console.log('>>>>>>>>>>>>>>', rowData);
    setOpen(true);
  };

  const handleFormDialogClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setLoading(true);
    console.log('Saved');
    setTimeout(() => setLoading(false), 2000);
  };

  const handleCancel = () => {
    setLoading(true);
    console.log('Canceled');
    setTimeout(() => setLoading(false), 2000);
  };

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
        onRowClick={handleFormDialogOpen}
        data={[
          { contract: '1', name: 'Fábrica 1', cnpj: '08.532.206/0001-74' }
        ]}
        title={t('Factory')}
      />
      <FormDialog title={t('Factory')} open={open} onClose={handleFormDialogClose}>
        <div>
          Testing...111
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
