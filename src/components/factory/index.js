import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  factory: {},
}));

const Factory = props => {
  const classes = useStyles();

  return (
    <div className={classes.factory}>
      <h1>Factory</h1>
    </div>
  );
};

export default Factory;
