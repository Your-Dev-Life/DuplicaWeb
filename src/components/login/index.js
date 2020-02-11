import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Background from './background.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${ Background })`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
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
}));

const Login = (props) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm();

  const doLogin = (values) => {
    props.auth.doLogin(values.username, values.password)
      .then(userDetails => {
        console.log('doLogin - UserDetails >>>> ', userDetails);
      })
      .catch(error => {
        console.log('doLogin - Error', error);
      });
    try {
    } catch (e) {
      console.log('doLogin - Error', e);
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t('Login')}
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit(doLogin)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              name="username"
              type="text"
              label={t('Username')}
              autoComplete="username"
              autoFocus
              inputRef={register({ required: { value: true, message: t('Username is required') }})}
              error={!!errors.username}
              helperText={errors.username && errors.username.message}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              type="password"
              label={t('Password')}
              autoComplete="current-password"
              inputRef={register({ required: { value: true, message: t('Password is required') }})}
              error={!!errors.password}
              helperText={errors.password && errors.password.message}
            />
            {/*<FormControlLabel*/}
            {/*  control={<Checkbox value="remember" color="primary" />}*/}
            {/*  label={t('Remember me')}*/}
            {/*/>*/}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {t('Sign in')}
            </Button>
            <Box mt={5}>
              <Typography variant="body2" color="textSecondary" align="center">Copyright © Duplica 2020.</Typography>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
