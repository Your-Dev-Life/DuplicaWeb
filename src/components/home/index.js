import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  home: {
    textAlign: 'center',
  },
}));

const Home = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.home}>
      <h1>{t('Home')}</h1>
    </div>
  );
};

export default Home;
