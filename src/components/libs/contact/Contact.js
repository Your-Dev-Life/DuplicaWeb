import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Typography, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  contact: {
    paddingTop: '12px'
  }
}));

const Contact = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { register, errors, setValue } = useFormContext();
  const { data = {} } = props;

  React.useEffect(() => {
    setValue('contactName', data.name || '');
    setValue('contactEmail', data.email || '');
    setValue('contactPhone', data.phone || '');
  }, []);

  return (
    <div className={classes.contact}>
      <Typography variant='h6' color='textSecondary'>
        {t('Contact')}:
      </Typography>
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
        spacing={1}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              id='contactName'
              name='contactName'
              type='text'
              fullWidth
              label={t('Contact Name')}
              placeholder={t('Contact Name')}
              inputRef={register({
                required: {
                  value: true,
                  message: t('Contact name is required')
                }
              })}
              error={!!errors.contactName}
              helperText={errors.contactName && errors.contactName.message}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              id='contactEmail'
              name='contactEmail'
              type='email'
              fullWidth
              label={t('Contact Email')}
              placeholder={t('Contact Email')}
              inputRef={register({
                required: {
                  value: true,
                  message: t('Contact email is required')
                }
              })}
              error={!!errors.contactEmail}
              helperText={errors.contactEmail && errors.contactEmail.message}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              id='contactPhone'
              name='contactPhone'
              type='tel'
              fullWidth
              label={t('Contact Phone')}
              placeholder={t('Contact Phone')}
              inputRef={register({
                required: {
                  value: true,
                  message: t('Contact phone is required')
                }
              })}
              error={!!errors.contactPhone}
              helperText={errors.contactPhone && errors.contactPhone.message}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
