import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Routes from '../routes';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    padding: theme.spacing(2)
  }
}));

const Content = (props) => {
  const { api } = props;
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth='xl' className={classes.container}>
        <Routes api={api} />
      </Container>
    </main>
  );
};

export default Content;
