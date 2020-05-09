import React from 'react';
import {
  Slide,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from "material-table";
import { useTranslation } from 'react-i18next';
import { FormDialog } from '../libs';
import localization from '../../i18n/material-table';

const useStyles = makeStyles(theme => ({
  factory: {
    maxWidth: '100%',
  },
}));

const Factory = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  const handleClickOpen = (event, rowData) => {
    console.log('>>>>>>>>>>>>>>', rowData);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        onRowClick={handleClickOpen}
        data={[
          { contract: '1', name: 'Fábrica 1', cnpj: '08.532.206/0001-74' }
        ]}
        title={t('Factory')}
      />
      <FormDialog title={t('Factory')} open={open} onClose={handleClose}>
        <div>
          Testing...111
        </div>
        {/*<Footer />*/}
      </FormDialog>
    </div>
  );
};

export default Factory;
