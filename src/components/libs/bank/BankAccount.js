import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Typography, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  address: {
    paddingTop: '12px'
  }
}));

const BankAccount = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { register, errors, setValue } = useFormContext();
  const { data = {} } = props;

  React.useEffect(() => {
    setValue('branch', data.branch);
    setValue('account', data.account);
  }, []);

  return (
    <div className={classes.address}>
      <Typography variant='h6' color='textSecondary'>
        {t('Bank Account')}:
      </Typography>
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'
        spacing={1}
      >
        <Grid item xs={6} sm={4} md={3}>
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
                message: t('Branch is required')
              }
            })}
            error={!!errors.branch}
            helperText={errors.branch && errors.branch.message}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
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
                message: t('Account number is required')
              }
            })}
            error={!!errors.account}
            helperText={errors.account && errors.account.message}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default BankAccount;
