import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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

  const saveButton = () => {
    return (
      <Button
        role="save"
        color="primary"
        variant="contained"
        startIcon={<SaveIcon />}
        className={classes.button}
        disabled={props.loading}
        onClick={props.onSave}
      >
        {props.saveButtonText}
      </Button>
    );
  }

  const cancelButton = () => {
    return (
      <Button
        role="cancel"
        color="secondary"
        variant="contained"
        startIcon={<CancelIcon />}
        className={classes.button}
        disabled={props.loading}
        onClick={props.onCancel}
      >
        {props.cancelButtonText}
      </Button>
    );
  }

  return (
    <AppBar className={classes.appBar} color={"default"}>
      <Toolbar>
        {props.onCancel != null ? cancelButton() : ''}
        {props.onSave != null ? saveButton() : ''}
      </Toolbar>
    </AppBar>
  );
};

export default FormFooter;
