import React, { Fragment } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBarSpace: {
    paddingTop: '64px',
  },
  appBar: {
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    alignItems: 'flex-end',
  },
  button: {
    margin: theme.spacing(0, 0.5),
    minWidth: 120,
  },
}));

const FormFooter = props => {
  const classes = useStyles();
  const { save, cancel } = props.options;

  const saveButton = () => {
    return (
      <Button
        role='save'
        color='primary'
        variant='contained'
        startIcon={<SaveIcon />}
        className={classes.button}
        disabled={props.loading}
        onClick={save.onSave}
        type='submit'
      >
        {save.title}
      </Button>
    );
  }

  const cancelButton = () => {
    return (
      <Button
        role='cancel'
        color='secondary'
        variant='contained'
        startIcon={<CancelIcon />}
        className={classes.button}
        disabled={props.loading}
        onClick={cancel.onCancel}
      >
        {cancel.title}
      </Button>
    );
  }

  return (
    <Fragment>
      <div className={classes.appBarSpace} />
      <AppBar className={classes.appBar} color={'default'}>
        <Toolbar>
          {cancel != null ? cancelButton() : ''}
          {save != null ? saveButton() : ''}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default FormFooter;
