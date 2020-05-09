import React from 'react';
import { render } from '@testing-library/react';
import FormDialog from './FormDialog';

const handleClose = () => {
  console.log('Testing...');
};

let component;
const renderComponent = (title) => render(
  <FormDialog title={title}  onClose={handleClose} open={true}>
    Content
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
    expect(elementTitle).toBeInTheDocument();
  });
});
