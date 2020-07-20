import React, {Fragment, useState} from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
} from '@material-ui/core';
import red from "@material-ui/core/colors/red";
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { ConfirmationDialog } from './index';

const useStyles = makeStyles(theme => ({
  appBarSpace: {
    paddingTop: '64px',
  },
  appBar: {
    position: 'fixed',
    top: 'auto',
    bottom: 0,
  },
  button: {
    margin: theme.spacing(0, 0.5),
    minWidth: 120,
  },
  removeButton: {
    margin: theme.spacing(0, 0.5),
    minWidth: 120,
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
      "@media (hover: none)": {
        backgroundColor: red[500],
      },
    },
  },
}));

const FormFooter = props => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const { save, cancel, remove } = props.options;

  const checkOnRemove = () => {
    setOpenConfirmDialog(true);
  };

  const onCloseConfirmDialog = () => setOpenConfirmDialog(false);

  const SaveButton = () => {
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

  const CancelButton = () => {
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

  const RemoveButton = () => {
    return (
      <Fragment>
        <ConfirmationDialog
          title={t('Remove Factory')}
          open={openConfirmDialog}
          onClose={onCloseConfirmDialog}
          afterConfirm={remove.onRemove}
        >
          {t('This factory will be removed, do you wish to continue')}
        </ConfirmationDialog>
        <Button
          role='remove'
          variant='contained'
          startIcon={<DeleteIcon />}
          className={classes.removeButton}
          disabled={props.loading}
          onClick={checkOnRemove}
        >
          {remove.title}
        </Button>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className={classes.appBarSpace} />
      <AppBar className={classes.appBar} color={'default'}>
        <Toolbar>
          <Box display='flex' flexGrow={1}>
            {remove != null && !remove.hide ? <RemoveButton /> : ''}
          </Box>
          {cancel != null ? <CancelButton /> : ''}
          {save != null ? <SaveButton /> : ''}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default FormFooter;
