import React, { useState, useEffect } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import {
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

const FactoryForm = props => {
  const classes = useStyles();
  const { t } = useTranslation();
  const methods = useForm();
  const { data = {}, afterSave, afterCancel } = props;
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue, getValues, errors } = methods;

  useEffect(() => {
    setValue('contract', data.contract);
    setValue('businessId', data.businessId);
    setValue('name', data.name);
  }, []);

  const getFactory = () => {
    const factory = getValues();
    return {
      contract: factory.contract,
      businessId: factory.businessId,
      name: factory.name,
      address: {
        zipCode: factory.zipCode,
        line1: factory.line1,
        number: factory.number,
        line2: factory.line2,
        suburb: factory.suburb,
        city: factory.city,
        state: factory.state,
      },
      contact: {
        name: factory.name,
        email: factory.email,
        phone: factory.phone,
      },
    }
  };

  const handleSave = () => {
    setLoading(true);
    console.log('Factory', getFactory());
    setTimeout(() => setLoading(false), 2000);
    if (afterSave) {
      afterSave();
    }
  };

  const handleCancel = () => {
    if (afterCancel) {
      afterCancel();
    }
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
    <FormContext {...methods}>
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
                label={t('Factory Name')}
                placeholder={t('Factory Name')}
                inputRef={register({ required: { value: true, message: t('Factory name is required') } })}
                error={!!errors.name}
                helperText={errors.name && errors.name.message}
              />
            </Grid>
          </Grid>
        </Grid>
        <Address data={data.address} />
        <Contact data={data.contact} />
        <FormFooter options={formFooterOptions} loading={loading} />
      </form>
    </FormContext>
  );
};

export default FactoryForm;
