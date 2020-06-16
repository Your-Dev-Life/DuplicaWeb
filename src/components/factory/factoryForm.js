import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Grid, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import {
  FormDialog,
  FormFooter,
  Address,
  Contact,
} from '../libs';

const useStyles = makeStyles(() => ({
  factory: {
    maxWidth: '100%',
  },
  form: {
    padding: '12px 24px',
  },
}));

const emptyFactory = {
  contract: '',
  businessId: '',
  name: '',
  address: {
    zipCode: '',
    address: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  },
  contact: {
    name: '',
    email: '',
    phone: '',
  },
};

const FactoryForm = forwardRef((props, ref) => {
  const classes = useStyles();
  const { loading, role } = props;
  const [currentFactory, setCurrentFactory] = useState(emptyFactory);
  const [internalLoading, setInternalLoading] = useState(loading);
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm();

  const handleFormDialogOpen = (factory = emptyFactory) => {
    setCurrentFactory(factory);
    setFormDialogOpen(true);
  };

  const handleFormDialogClose = () => {
    setCurrentFactory(emptyFactory);
    setFormDialogOpen(false);
  };

  useImperativeHandle(ref, () => {
    return {
      openFactoryForm: handleFormDialogOpen,
      closeFactoryForm: handleFormDialogClose,
    };
  });

  const handleSave = () => {
    setInternalLoading(true);
    console.log('Saved');
    setTimeout(() => setInternalLoading(false), 2000);
  };

  const handleCancel = () => {
    setInternalLoading(true);
    handleFormDialogClose();
    setInternalLoading(false);
  };

  const formFooterOptions = {
    save: {
      title: t('Save'),
    },
    cancel: {
      title: t('Cancel'),
      onCancel: handleCancel,
    }
  };

  return (
    <FormDialog
      title={t('Factory')}
      open={formDialogOpen}
      onClose={handleFormDialogClose}
      role={role}
    >
      <form className={classes.form} noValidate onSubmit={handleSubmit(handleSave)}>
        <Grid
          container
          direction='row'
          justify='flex-start'
          alignItems='flex-start'
          spacing={1}
        >
          <Grid container spacing={1}>
            <Grid item xs={6} sm={4} md={3}>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='contract'
                name='contract'
                type='text'
                fullWidth
                value={currentFactory.contract}
                label={t('Contract')}
                placeholder={t('Contract')}
                inputRef={register({ required: { value: true, message: t('Factory contract is required') } })}
                error={!!errors.contract}
                helperText={errors.contract && errors.contract.message}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='businessId'
                name='businessId'
                type='text'
                fullWidth
                value={currentFactory.businessId}
                label={t('Business Id')}
                placeholder={t('Business Id')}
                inputRef={register({ required: { value: true, message: t('Factory businessId is required') } })}
                error={!!errors.businessId}
                helperText={errors.businessId && errors.businessId.message}
              />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='name'
                name='name'
                type='text'
                fullWidth
                value={currentFactory.name}
                label={t('Factory Name')}
                placeholder={t('Factory Name')}
                inputRef={register({ required: { value: true, message: t('Factory name is required') } })}
                error={!!errors.name}
                helperText={errors.name && errors.name.message}
              />
            </Grid>
          </Grid>
        </Grid>
        <Address data={currentFactory.address} register={register} errors={errors} />
        <Contact data={currentFactory.contact} register={register} errors={errors} />
        <FormFooter options={formFooterOptions} loading={loading} />
      </form>
    </FormDialog>
  );
});

export default FactoryForm;
