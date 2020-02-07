import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  home: {
    textAlign: 'center',
  },
}));

const Home = props => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
