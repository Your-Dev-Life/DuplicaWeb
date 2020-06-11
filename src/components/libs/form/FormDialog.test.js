import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { FormDialog } from '../index';

const handleClose = jest.fn();

let component;
const renderComponent = (title) => render(
  <FormDialog title={title}  onClose={handleClose} open={true}>
    FormDialogContent
  </FormDialog>
);

describe('FormDialog', () => {

  beforeEach(() => {
    const title = 'FormDialogTitle';
    component = renderComponent(title);
  });

  test('should show FormDialog with all starting components', () => {
    const { queryByText } = component;
    const elementTitle = queryByText('FormDialogTitle');
    const elementContent = queryByText('FormDialogContent');
    expect(elementTitle).toBeInTheDocument();
    expect(elementContent).toBeInTheDocument();
  });

  test('should close FormDialog when onClose is fired', async () => {
    const { findByRole } = component;
    user.click(await findByRole('close'));
    expect(handleClose).toBeCalled();
  });
});
