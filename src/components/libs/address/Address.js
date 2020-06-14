import React from 'react';
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
  const { data, register, errors } = props;

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
          <Grid item xs={4} sm={4} m={4}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              id='zipCode'
              name='zipCode'
              type='text'
              fullWidth
              value={data.zipCode}
              label={t('Zip Code')}
              placeholder={t('Zip Code')}
              inputRef={register({ required: { value: true, message: t('Zip Code is required') } })}
              error={!!errors.zipCode}
              helperText={errors.zipCode && errors.zipCode.message}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={8} m={8}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              id='line1'
              name='line1'
              type='text'
              fullWidth
              value={data.line1}
              label={t('Line 1')}
              placeholder={t('Line 1')}
              inputRef={register({ required: { value: true, message: t('Line 1 is required') } })}
              error={!!errors.line1}
              helperText={errors.line1 && errors.line1.message}
            />
          </Grid>
          <Grid item xs={12} sm={4} m={4}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              id='number'
              name='number'
              type='text'
              fullWidth
              value={data.number}
              label={t('Number')}
              placeholder={t('Number')}
              inputRef={register({ required: { value: true, message: t('Number is required') } })}
              error={!!errors.number}
              helperText={errors.number && errors.number.message}
            />
          </Grid>
          <Grid item xs={12} sm={6} m={6}>
            <TextField
              variant='outlined'
              margin='normal'
              id='line2'
              name='line2'
              type='text'
              fullWidth
              value={data.line2}
              label={t('Line 2')}
              placeholder={t('Line 2')}
              inputRef={register({ required: { value: false } })}
            />
          </Grid>
          <Grid item xs={12} sm={6} m={6}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              id='suburb'
              name='suburb'
              type='text'
              fullWidth
              value={data.suburb}
              label={t('Suburb')}
              placeholder={t('Suburb')}
              inputRef={register({ required: { value: true, message: t('Suburb is required') } })}
              error={!!errors.suburb}
              helperText={errors.suburb && errors.suburb.message}
            />
          </Grid>
          <Grid item xs={12} sm={6} m={6}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              id='state'
              name='state'
              type='text'
              fullWidth
              value={data.state}
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
