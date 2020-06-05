import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { FormDialog, FormFooter } from '../libs';

const useStyles = makeStyles(theme => ({
  factory: {
    maxWidth: '100%',
  },
}));

const FactoryForm = forwardRef((props, ref) => {
  const classes = useStyles();
  const { factory, loading, role } = props;
  const [currentFactory, setCurrentFactory] = useState(factory || {});
  const [internalLoading, setInternalLoading] = useState(loading);
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm();

  const handleFormDialogOpen = () => {
    setFormDialogOpen(true);
  };

  const handleFormDialogClose = () => {
    setCurrentFactory({});
    setFormDialogOpen(false);
  };

  useImperativeHandle(ref, () => {
    return {
      openFactoryForm: handleFormDialogOpen,
      closeFactoryForm: handleFormDialogClose,
    };
  });

  const handleSave = () => {
    setInternalLoading(true);
    console.log('Saved');
    setTimeout(() => setInternalLoading(false), 2000);
  };

  const handleCancel = () => {
    setInternalLoading(true);
    handleFormDialogClose();
    setInternalLoading(false);
  };

  const formFooterOptions = {
    save: {
      title: t('Save'),
    },
    cancel: {
      title: t('Cancel'),
      onCancel: handleCancel,
    }
  };

  return (
    <FormDialog
      title={t('Factory')}
      open={formDialogOpen}
      onClose={handleFormDialogClose}
      role={role}
    >
      <form className={classes.form} noValidate onSubmit={handleSubmit(handleSave)}>
        <TextField
          variant='outlined'
          margin='normal'
          required
          id='name'
          name='name'
          type='text'
          value={currentFactory.name}
          label={t('Name')}
          placeholder={t('Name')}
          inputRef={register({ required: { value: true, message: t('Factory name is required') } })}
          error={!!errors.name}
          helperText={errors.name && errors.name.message}
        />
        <FormFooter options={formFooterOptions} loading={loading} />
      </form>
    </FormDialog>
  );
});

export default FactoryForm;
