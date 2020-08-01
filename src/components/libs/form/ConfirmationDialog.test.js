import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import ConfirmationDialog from './ConfirmationDialog';

const handleClose = jest.fn();
const handleAfterConfirm = jest.fn();
const title = 'ConfirmationDialogTitle';

const renderComponent = (title, confirmButtonName, cancelButtonName) =>
  render(
    <ConfirmationDialog
      title={title}
      onClose={handleClose}
      open={true}
      confirmButtonName={confirmButtonName}
      cancelButtonName={cancelButtonName}
      afterConfirm={handleAfterConfirm}
    >
      ConfirmationDialogContent
    </ConfirmationDialog>
  );

describe('ConfirmationDialog', () => {
  test('should show ConfirmationDialog with all starting components', () => {
    renderComponent(title, 'Confirm', 'Cancel');
    expect(screen.queryByText('ConfirmationDialogTitle')).toBeInTheDocument();
    expect(screen.queryByText('ConfirmationDialogContent')).toBeInTheDocument();
    expect(screen.queryByText('Confirm')).toBeInTheDocument();
    expect(screen.queryByText('Cancel')).toBeInTheDocument();
  });

  test('should show ConfirmationDialog with all starting components when buttons name are not passed', () => {
    renderComponent(title);
    expect(screen.queryByText('ConfirmationDialogTitle')).toBeInTheDocument();
    expect(screen.queryByText('ConfirmationDialogContent')).toBeInTheDocument();
    expect(screen.queryByText('Confirm')).toBeInTheDocument();
    expect(screen.queryByText('Cancel')).toBeInTheDocument();
  });

  test('should close ConfirmationDialog when Cancel button is clicked', async () => {
    renderComponent(title, 'Confirm', 'Cancel');
    user.click(await screen.findByText('Cancel'));
    expect(handleClose).toBeCalled();
  });

  test('should call afterConfirm and close ConfirmationDialog when OK button is clicked', async () => {
    renderComponent(title, 'Confirm', 'Cancel');
    user.click(await screen.findByText('Confirm'));
    expect(handleAfterConfirm).toBeCalled();
    expect(handleClose).toBeCalled();
  });
});
