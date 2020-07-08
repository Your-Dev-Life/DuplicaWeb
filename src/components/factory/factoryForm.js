import React, { useState, useEffect } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { errorHandler } from '../../libs';
import {
  FormFooter,
  Address,
  Contact,
} from '../libs';
import { getFactory } from './factoryBuilder';

const useStyles = makeStyles(() => ({
  factory: {
    maxWidth: '100%',
  },
  form: {
    padding: '12px 24px',
  },
}));

const FactoryForm = props => {
  const { api, data = {}, afterSave, afterCancel, handleErrors } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const methods = useForm();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue, getValues, errors } = methods;

  useEffect(() => {
    setValue('id', data._id);
    setValue('contract', data.contract);
    setValue('businessId', data.businessId);
    setValue('name', data.name);
  }, []);

  const handleSave = () => {
    let savedFactory = {};
    const rawFactory = getValues();
    setLoading(true);
    api.factoryService.save(getFactory(rawFactory)).then((factory) => {
      savedFactory = factory;
      afterSave(savedFactory);
    }).catch((err) => {
      const message = errorHandler.getErrorMessage(err, t("Factory couldn't be saved"));
      handleErrors.setErrorMessage(message);
      handleErrors.setError(true);
    }).finally(() => {
      setLoading(false);
    });
  };

  const handleCancel = () => {
    afterCancel();
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
        <input name="id" type="hidden" ref={register} />
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
                label={t('Name')}
                placeholder={t('Name')}
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
