import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import Routes from '../routes';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    padding: theme.spacing(2),
  },
}));

const Content = (props) => {
  const { api } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleErrorClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError(false);
  };

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Snackbar open={error} autoHideDuration={6000} onClose={handleErrorClose}>
        <Alert onClose={handleErrorClose} severity='error'>
          {t(errorMessage)}
        </Alert>
      </Snackbar>
      <Container maxWidth='xl' className={classes.container}>
        <Routes api={api} handleErrors={{ setError, setErrorMessage }} />
      </Container>
    </main>
  );
};

export default Content;
