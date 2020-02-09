import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  factory: {},
}));

const Factory = props => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.factory}>
      <h1>{t('Factory')}</h1>
    </div>
  );
};

export default Factory;
