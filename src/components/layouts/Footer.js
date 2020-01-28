import React from 'react';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    minHeight: 36,
  },
}));

const Footer = props => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar} color={"default"}>
      <Toolbar className={classes.toolbar}>
        <Typography variant={"body2"} color={"inherit"}>{ props.title || "© Copyright 2020" }</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
