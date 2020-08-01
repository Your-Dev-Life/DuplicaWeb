import React from 'react';
import {
  Dialog,
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formDialog: {
    maxWidth: '100%'
  },
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(0),
    flex: 1
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const FormDialog = (props) => {
  const classes = useStyles();
  const { role, title, open, onClose, children } = props;

  return (
    <div className={classes.formDialog}>
      <Dialog
        role={role}
        fullScreen
        disableEscapeKeyDown={true}
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              {title}
            </Typography>
            <IconButton
              role='close'
              edge='start'
              color='inherit'
              onClick={onClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {children}
      </Dialog>
    </div>
  );
};

export default FormDialog;
