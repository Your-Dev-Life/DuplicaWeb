import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Routes from "../Routes";

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const Content = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Routes />
      </Container>
    </main>
  );
};

export default Content;
