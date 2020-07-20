import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import useMessageNotification from './useMessageNotification';

const MessageNotification = () => {
  const { message, removeMessage } = useMessageNotification();
  const { title, text, type } = message ? message : { title: '', text: '', type: 'info' };

  const handleClose = () => {
    removeMessage();
  };

  const snackbarPosition = {
    vertical: 'top',
    horizontal: 'center',
  };

  return (
    <Snackbar open={!!message} autoHideDuration={6000} onClose={handleClose} anchorOrigin={snackbarPosition}>
      <Alert onClose={handleClose} severity={type}>
        {title !== '' ? <AlertTitle>{title}</AlertTitle> : ''}
        {text}
      </Alert>
    </Snackbar>
  );
};

export default MessageNotification;
