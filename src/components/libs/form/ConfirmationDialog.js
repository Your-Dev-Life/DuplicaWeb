import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from 'react-i18next';
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(0, 0.5),
    minWidth: 120,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmationDialog = props => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { title, children, open, onClose, confirmButtonName = t('Confirm'), cancelButtonName = t('Cancel'), afterConfirm } = props;

  const handleConfirm = () => {
    afterConfirm();
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          role='cancel'
          onClick={handleCancel}
          color="secondary"
          variant='contained'
          className={classes.button}
          startIcon={<CancelIcon />}
        >
          {cancelButtonName}
        </Button>
        <Button
          role='confirm'
          onClick={handleConfirm}
          color="primary"
          variant='contained'
          className={classes.button}
          startIcon={<CheckIcon />}
        >
          {confirmButtonName}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationDialog;
