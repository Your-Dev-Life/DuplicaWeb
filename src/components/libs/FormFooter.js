import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
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
        className={classes.button}
        variant="contained"
        color="primary"
        startIcon={<SaveIcon />}
        disabled={props.loading}
        role="save"
      >
        {props.saveButtonText}
      </Button>
    );
  }

  const cancelButton = () => {
    return (
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        startIcon={<CancelIcon />}
        disabled={props.loading}
        role="cancel"
      >
        {props.cancelButtonText}
      </Button>
    );
  }

  return (
    <AppBar className={classes.appBar} color={"default"}>
      <Toolbar>
        {cancelButton()}
        {saveButton()}
      </Toolbar>
    </AppBar>
  );
};

export default FormFooter;
