import React from 'react';
import { useFormContext } from "react-hook-form";
import {
  Typography,
  Grid,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
  address: {
    paddingTop: '12px',
  },
}));

const Address = props => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { register, errors, setValue } = useFormContext();
  const { data = {} } = props;

  React.useEffect(() => {
    setValue('zipCode', data.zipCode);
    setValue('line1', data.line1);
    setValue('number', data.number);
    setValue('line2', data.line2);
    setValue('suburb', data.suburb);
    setValue('city', data.city);
    setValue('state', data.state);
  }, []);

  return (
    <div className={classes.address}>
      <Typography variant="subtitle1" color='textSecondary'>{t('Address')}:</Typography>
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
              id='zipCode'
              name='zipCode'
              type='text'
              fullWidth
              label={t('Zip Code')}
              placeholder={t('Zip Code')}
              inputRef={register({ required: { value: true, message: t('Zip Code is required') } })}
              error={!!errors.zipCode}
              helperText={errors.zipCode && errors.zipCode.message}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              id='line1'
              name='line1'
              type='text'
              fullWidth
              label={t('Line 1')}
              placeholder={t('Line 1')}
              inputRef={register({ required: { value: true, message: t('Line 1 is required') } })}
              error={!!errors.line1}
              helperText={errors.line1 && errors.line1.message}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              id='number'
              name='number'
              type='text'
              fullWidth
              label={t('Number')}
              placeholder={t('Number')}
              inputRef={register({ required: { value: true, message: t('Number is required') } })}
              error={!!errors.number}
              helperText={errors.number && errors.number.message}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <TextField
              variant='outlined'
              margin='normal'
              id='line2'
              name='line2'
              type='text'
              fullWidth
              label={t('Line 2')}
              placeholder={t('Line 2')}
              inputRef={register({ required: { value: false } })}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              id='suburb'
              name='suburb'
              type='text'
              fullWidth
              label={t('Suburb')}
              placeholder={t('Suburb')}
              inputRef={register({ required: { value: true, message: t('Suburb is required') } })}
              error={!!errors.suburb}
              helperText={errors.suburb && errors.suburb.message}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              id='city'
              name='city'
              type='text'
              fullWidth
              label={t('City')}
              placeholder={t('City')}
              inputRef={register({ required: { value: true, message: t('City is required') } })}
              error={!!errors.city}
              helperText={errors.city && errors.city.message}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              id='state'
              name='state'
              type='text'
              fullWidth
              label={t('State')}
              placeholder={t('State')}
              inputRef={register({ required: { value: true, message: t('State is required') } })}
              error={!!errors.state}
              helperText={errors.state && errors.state.message}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Address;
