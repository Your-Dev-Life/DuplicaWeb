import React, { useState, useEffect } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useMessageNotification } from '@dhouse.in/message-notification-mui';
import { useTranslation } from 'react-i18next';
import { errorHandler } from '../../libs';
import { FormFooter, Address, Contact } from '../libs';
import { getCompany } from './companyBuilder';

const useStyles = makeStyles(() => ({
  company: {
    maxWidth: '100%'
  },
  form: {
    padding: '12px 24px'
  }
}));

const CompanyForm = (props) => {
  const { api, data = {}, afterSave, afterCancel, afterRemove } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const methods = useForm();
  const [loading, setLoading] = useState(false);
  const [isNew, setIsNew] = useState(true);
  const { addMessage } = useMessageNotification();
  const { register, handleSubmit, setValue, getValues, errors } = methods;

  useEffect(() => {
    setValue('id', data._id);
    setValue('name', data.name);
    setValue('businessId', data.businessId);

    if (data.bankInformation) {
      setValue('branch', data.bankInformation.branch);
      setValue('account', data.bankInformation.account);
      setValue('agreement', data.bankInformation.agreement);
      setValue('portfolio', data.bankInformation.portfolio);
      setValue('variation', data.bankInformation.variation);
      setValue('interest', data.bankInformation.interest);
      setValue('instruction1', data.bankInformation.instruction1);
      setValue('instruction2', data.bankInformation.instruction2);
    }

    if (data.taxInformation) {
      if (data.taxInformation.accumulated) {
        setValue('accumulatedPis', data.taxInformation.accumulated.pis);
        setValue('accumulatedCofins', data.taxInformation.accumulated.cofins);
        setValue('accumulatedIrrf', data.taxInformation.accumulated.irrf);
        setValue('accumulatedIof', data.taxInformation.accumulated.iof);
      }
      if (data.taxInformation.taxes) {
        setValue('taxPis', data.taxInformation.taxes.pis);
        setValue('taxCofins', data.taxInformation.taxes.cofins);
        setValue('taxIrrf', data.taxInformation.taxes.irrf);
        setValue('taxIof', data.taxInformation.taxes.iof);
        setValue('taxAdditionalIof', data.taxInformation.taxes.additionalIof);
      }
      if (data.taxInformation.codes) {
        setValue('codePis', data.taxInformation.codes.pis);
        setValue('codeCofins', data.taxInformation.codes.cofins);
        setValue('codeIrrf', data.taxInformation.codes.irrf);
        setValue('codeIof', data.taxInformation.codes.iof);
      }
    }

    setIsNew(!data._id);
  }, []);

  const handleSuccess = (company, message, callback) => {
    addMessage('Success', message, 'success');
    callback(company);
  };

  const handleError = (err, defaultMessage) => {
    const message = errorHandler.getErrorMessage(err, defaultMessage);
    addMessage('Error', message, 'error');
  };

  const handleSave = () => {
    const rawCompany = getValues();
    setLoading(true);
    api.companyService
      .save(getCompany(rawCompany))
      .then((company) => {
        handleSuccess(company, t('Company successfully saved'), afterSave);
      })
      .catch((err) => {
        handleError(err, t("Company couldn't be saved"));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCancel = () => {
    afterCancel();
  };

  const handleRemove = () => {
    const { id } = getValues();
    setLoading(true);
    api.companyService
      .remove(id)
      .then((company) => {
        handleSuccess(company, t('Company successfully removed'), afterRemove);
      })
      .catch((err) => {
        handleError(err, t("Company couldn't be removed"));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const formFooterOptions = {
    save: {
      title: t('Save')
    },
    cancel: {
      title: t('Cancel'),
      onCancel: handleCancel
    },
    remove: {
      title: t('Remove'),
      onRemove: handleRemove,
      hide: isNew
    }
  };

  return (
    <FormContext {...methods}>
      <form
        className={classes.form}
        noValidate
        onSubmit={handleSubmit(handleSave)}
      >
        <input name='id' type='hidden' ref={register} />
        <Grid
          container
          direction='row'
          justify='flex-start'
          alignItems='flex-start'
          spacing={1}
        >
          <Grid container spacing={1}>
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
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company businessId is required')
                  }
                })}
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
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company name is required')
                  }
                })}
                error={!!errors.name}
                helperText={errors.name && errors.name.message}
              />
            </Grid>
          </Grid>
        </Grid>
        <Address data={data.address} />
        <Contact data={data.contact} />
        <Grid
          container
          direction='row'
          justify='flex-start'
          alignItems='flex-start'
          spacing={1}
        >
          <Grid container spacing={1}>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='branch'
                name='branch'
                type='text'
                fullWidth
                label={t('Branch')}
                placeholder={t('Branch')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company branch is required')
                  }
                })}
                error={!!errors.branch}
                helperText={errors.branch && errors.branch.message}
              />
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='account'
                name='account'
                type='text'
                fullWidth
                label={t('Account')}
                placeholder={t('Account')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company account is required')
                  }
                })}
                error={!!errors.account}
                helperText={errors.account && errors.account.message}
              />
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='agreement'
                name='agreement'
                type='text'
                fullWidth
                label={t('Agreement')}
                placeholder={t('Agreement')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company agreement is required')
                  }
                })}
                error={!!errors.agreement}
                helperText={errors.agreement && errors.agreement.message}
              />
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='agreement'
                name='agreement'
                type='text'
                fullWidth
                label={t('Agreement')}
                placeholder={t('Agreement')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company agreement is required')
                  }
                })}
                error={!!errors.agreement}
                helperText={errors.agreement && errors.agreement.message}
              />
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='portfolio'
                name='portfolio'
                type='text'
                fullWidth
                label={t('Portfolio')}
                placeholder={t('Portfolio')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company portfolio is required')
                  }
                })}
                error={!!errors.portfolio}
                helperText={errors.portfolio && errors.portfolio.message}
              />
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='variation'
                name='variation'
                type='text'
                fullWidth
                label={t('Variation')}
                placeholder={t('Variation')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company variation is required')
                  }
                })}
                error={!!errors.variation}
                helperText={errors.variation && errors.variation.message}
              />
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='interest'
                name='interest'
                type='text'
                fullWidth
                label={t('Interest')}
                placeholder={t('Interest')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company interest is required')
                  }
                })}
                error={!!errors.interest}
                helperText={errors.interest && errors.interest.message}
              />
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='instruction1'
                name='instruction1'
                type='text'
                fullWidth
                label={t('Instruction 1')}
                placeholder={t('Instruction 1')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company instruction 1 is required')
                  }
                })}
                error={!!errors.instruction1}
                helperText={errors.instruction1 && errors.instruction1.message}
              />
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='instruction2'
                name='instruction2'
                type='text'
                fullWidth
                label={t('Instruction 2')}
                placeholder={t('Instruction 2')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company instruction 2 is required')
                  }
                })}
                error={!!errors.instruction2}
                helperText={errors.instruction2 && errors.instruction2.message}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          justify='flex-start'
          alignItems='flex-start'
          spacing={1}
        >
          <Grid container spacing={1}>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='accumulatedPis'
                name='accumulatedPis'
                type='text'
                fullWidth
                label={t('Accumulated PIS')}
                placeholder={t('Accumulated PIS')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company accumulated PIS is required')
                  }
                })}
                error={!!errors.accumulatedPis}
                helperText={
                  errors.accumulatedPis && errors.accumulatedPis.message
                }
              />
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='accumulatedCofins'
                name='accumulatedCofins'
                type='text'
                fullWidth
                label={t('Accumulated Cofins')}
                placeholder={t('Accumulated Cofins')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company accumulated Cofins is required')
                  }
                })}
                error={!!errors.accumulatedCofins}
                helperText={
                  errors.accumulatedCofins && errors.accumulatedCofins.message
                }
              />
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='accumulatedIrrf'
                name='accumulatedIrrf'
                type='text'
                fullWidth
                label={t('Accumulated IRRF')}
                placeholder={t('Accumulated IRRF')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company accumulated IRRF is required')
                  }
                })}
                error={!!errors.accumulatedIrrf}
                helperText={
                  errors.accumulatedIrrf && errors.accumulatedIrrf.message
                }
              />
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='accumulatedIof'
                name='accumulatedIof'
                type='text'
                fullWidth
                label={t('Accumulated IOF')}
                placeholder={t('Accumulated IOF')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company accumulated IOF is required')
                  }
                })}
                error={!!errors.accumulatedIof}
                helperText={
                  errors.accumulatedIof && errors.accumulatedIof.message
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          justify='flex-start'
          alignItems='flex-start'
          spacing={1}
        >
          <Grid container spacing={1}>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='taxPis'
                name='taxPis'
                type='text'
                fullWidth
                label={t('Tax PIS')}
                placeholder={t('Tax PIS')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company tax PIS is required')
                  }
                })}
                error={!!errors.taxPis}
                helperText={errors.taxPis && errors.taxPis.message}
              />
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='taxCofins'
                name='taxCofins'
                type='text'
                fullWidth
                label={t('Tax Cofins')}
                placeholder={t('Tax Cofins')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company tax Cofins is required')
                  }
                })}
                error={!!errors.taxCofins}
                helperText={errors.taxCofins && errors.taxCofins.message}
              />
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='taxIrrf'
                name='taxIrrf'
                type='text'
                fullWidth
                label={t('Tax IRRF')}
                placeholder={t('Tax IRRF')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company tax IRRF is required')
                  }
                })}
                error={!!errors.taxIrrf}
                helperText={errors.taxIrrf && errors.taxIrrf.message}
              />
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='taxIof'
                name='taxIof'
                type='text'
                fullWidth
                label={t('Tax IOF')}
                placeholder={t('Tax IOF')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company tax IOF is required')
                  }
                })}
                error={!!errors.taxIof}
                helperText={errors.taxIof && errors.taxIof.message}
              />
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='taxAdditionalIof'
                name='taxAdditionalIof'
                type='text'
                fullWidth
                label={t('Tax Additional IOF')}
                placeholder={t('Tax Additional IOF')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company tax additional IOF is required')
                  }
                })}
                error={!!errors.taxIof}
                helperText={errors.taxIof && errors.taxIof.message}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          justify='flex-start'
          alignItems='flex-start'
          spacing={1}
        >
          <Grid container spacing={1}>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='codePis'
                name='codePis'
                type='text'
                fullWidth
                label={t('Code PIS')}
                placeholder={t('Code PIS')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company code PIS is required')
                  }
                })}
                error={!!errors.codePis}
                helperText={errors.codePis && errors.codePis.message}
              />
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='codeCofins'
                name='codeCofins'
                type='text'
                fullWidth
                label={t('Code Cofins')}
                placeholder={t('Code Cofins')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company code Cofins is required')
                  }
                })}
                error={!!errors.codeCofins}
                helperText={errors.codeCofins && errors.codeCofins.message}
              />
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='codeIrrf'
                name='codeIrrf'
                type='text'
                fullWidth
                label={t('Code IRRF')}
                placeholder={t('Code IRRF')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company code IRRF is required')
                  }
                })}
                error={!!errors.codeIrrf}
                helperText={errors.codeIrrf && errors.codeIrrf.message}
              />
            </Grid>
            <Grid item xs={4} sm={3} md={3} lg>
              <TextField
                variant='outlined'
                margin='normal'
                required
                id='codeIof'
                name='codeIof'
                type='text'
                fullWidth
                label={t('Code IOF')}
                placeholder={t('Code IOF')}
                inputRef={register({
                  required: {
                    value: true,
                    message: t('Company code IOF is required')
                  }
                })}
                error={!!errors.codeIof}
                helperText={errors.codeIof && errors.codeIof.message}
              />
            </Grid>
          </Grid>
        </Grid>
        <FormFooter options={formFooterOptions} loading={loading} />
      </form>
    </FormContext>
  );
};

export default CompanyForm;
