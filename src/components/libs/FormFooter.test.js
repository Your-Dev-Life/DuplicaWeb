import React from 'react';
import { render } from '@testing-library/react';
import { FormFooter } from '.';

const handleSave = jest.fn();
const handleCancel = jest.fn();

let component;
let loading;

const renderComponent = (loading) => render(
  <FormFooter
    saveButtonText='Save'
    cancelButtonText='Cancel'
    onCancel={handleCancel}
    onSave={handleSave}
    loading={loading}
  />
);

describe('FormFooter', () => {
  beforeEach(() => {
    loading = false;
    component = renderComponent(loading);
  });

  test('should show FormFooter with all starting components', () => {
    const { queryByText } = component;
    const elementSave = queryByText('Save');
    const elementCancel = queryByText('Cancel');
    expect(elementSave).toBeInTheDocument();
    expect(elementCancel).toBeInTheDocument();
  });
});
