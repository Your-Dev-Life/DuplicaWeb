import React from 'react';
import { Redirect } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './layouts/Header';
import Content from './layouts/Content';
import menu from './layouts/menu';

const useStyles = makeStyles(() => ({
  main: {
    display: 'flex',
  },
}));

const Main = (props) => {
  if (!props.auth.isAuthenticated()) {
    return <Redirect to='/login' />
  }
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <CssBaseline />
      <Header menu={menu} />
      <Content api={props.api} />
    </div>
  );
};

export default Main;
