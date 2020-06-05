import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
  CircularProgress,
  Snackbar,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Background from './background.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -8,
    marginLeft: -10,
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const { register, handleSubmit, errors } = useForm();

  const doLogin = (values) => {
    setLoading(true);
    props.api.auth.doLogin(values.username, values.password)
      .then(() => {
        history.push('/home');
      })
      .catch((err) => {
        setErrorMessage(err.response.data.error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(false);
  };

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Snackbar open={error} autoHideDuration={6000} onClose={handleErrorClose}>
          <Alert onClose={handleErrorClose} severity='error'>
            {t(errorMessage)}
          </Alert>
        </Snackbar>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            {t('Login')}
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit(doLogin)}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='username'
              name='username'
              type='text'
              label={t('Username')}
              placeholder={t('Username')}
              autoComplete='username'
              autoFocus
              inputRef={register({ required: { value: true, message: t('Username is required') } })}
              error={!!errors.username}
              helperText={errors.username && errors.username.message}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='password'
              name='password'
              type='password'
              label={t('Password')}
              placeholder={t('Password')}
              autoComplete='current-password'
              inputRef={register({ required: { value: true, message: t('Password is required') } })}
              error={!!errors.password}
              helperText={errors.password && errors.password.message}
            />
            <div className={classes.wrapper}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                disabled={loading}
                data-testid='SignInButton'
              >
                {t('Sign in')}
              </Button>
              {loading && <CircularProgress data-testid='Loading' size={24} className={classes.buttonProgress} />}
            </div>
            <Box mt={5}>
              <Typography variant='body2' color='textSecondary' align='center'>Copyright © Duplica 2020.</Typography>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

Login.propTypes = {
  auth: PropTypes.object,
};

export default Login;
