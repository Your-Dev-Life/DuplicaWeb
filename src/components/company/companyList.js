import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import { useTranslation } from 'react-i18next';
import localization from '../../i18n/material-table';
import { FormDialog } from '../libs/form';
import CompanyForm from './companyForm';

const useStyles = makeStyles(() => ({
  company: {
    maxWidth: '100%'
  }
}));

const CompanyList = (props) => {
  const classes = useStyles();
  const [companies, setCompanies] = useState([]);
  const [company, setCompany] = useState({});
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const { api } = props;

  useEffect(() => {
    listCompanies();
  }, []);

  const listCompanies = () => {
    api.companyService.list().then(setCompanies);
  };

  const handleCompanyFormOpen = (event, rowData) => {
    setLoading(true);
    api.companyService
      .read(rowData._id)
      .then((company) => {
        setCompany(company);
        setOpenFormDialog(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const createCompany = () => {
    setCompany({});
    setOpenFormDialog(true);
  };

  const closeFormDialog = () => {
    listCompanies();
    setCompany({});
    setOpenFormDialog(false);
  };

  return (
    <div className={classes.company}>
      <MaterialTable
        options={{
          padding: 'dense'
        }}
        localization={localization(t)}
        columns={[
          { title: t('Name'), field: 'name' },
          { title: t('Business Id'), field: 'businessId' },
          { title: t('Contact Name'), field: 'contact.name' },
          { title: t('Contact Phone'), field: 'contact.phone' }
        ]}
        actions={[
          {
            icon: 'add',
            tooltip: t('Create Company'),
            isFreeAction: true,
            onClick: createCompany
          }
        ]}
        onRowClick={handleCompanyFormOpen}
        data={companies}
        title={t('Company')}
      />
      <FormDialog
        title={t('Company')}
        open={openFormDialog}
        onClose={closeFormDialog}
        role='FormCompany'
      >
        <CompanyForm
          api={api}
          data={company}
          afterSave={closeFormDialog}
          afterCancel={closeFormDialog}
          afterRemove={closeFormDialog}
        />
      </FormDialog>
    </div>
  );
};

export default CompanyList;
