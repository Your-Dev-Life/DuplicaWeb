import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import FormDialog from './FormDialog';

const handleClose = jest.fn();

const renderComponent = (title) => render(
  <FormDialog title={title}  onClose={handleClose} open={true}>
    FormDialogContent
  </FormDialog>
);

describe('FormDialog', () => {

  beforeEach(() => {
    const title = 'FormDialogTitle';
    renderComponent(title);
  });

  test('should show FormDialog with all starting components', () => {
    expect(screen.queryByText('FormDialogTitle')).toBeInTheDocument();
    expect(screen.queryByText('FormDialogContent')).toBeInTheDocument();
  });

  test('should close FormDialog when close button is clicked', async () => {
    user.click(await screen.findByRole('close'));
    expect(handleClose).toBeCalled();
  });
});
