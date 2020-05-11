import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { FormFooter } from '.';

const handleSave = jest.fn();
const handleCancel = jest.fn();

let component;
let loading;

const renderComponent = (loading, onCancel, onSave) => render(
  <FormFooter
    saveButtonText='Save'
    cancelButtonText='Cancel'
    onCancel={onCancel}
    onSave={onSave}
    loading={loading}
  />
);

const fireEvent = async (buttonName) => user.click(await component.findByRole(buttonName));

describe('FormFooter', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Buttons enabled', () => {
    beforeEach(() => {
      loading = false;
      component = renderComponent(loading, handleCancel, handleSave);
    });

    test('should show FormFooter with all starting components', () => {
      const { queryByText } = component;
      const elementSave = queryByText('Save');
      const elementCancel = queryByText('Cancel');
      expect(elementSave).toBeInTheDocument();
      expect(elementCancel).toBeInTheDocument();
    });

    test('should fire Save event', async () => {
      await fireEvent('save');
      expect(handleSave).toBeCalled();
    });

    test('should fire Cancel event', async () => {
      await fireEvent('cancel');
      expect(handleCancel).toBeCalled();
    });
  });

  describe('Buttons disabled', () => {
    beforeEach(() => {
      loading = true;
      component = renderComponent(loading, handleCancel, handleSave);
    });

    test('should not fire Save event', async () => {
      await fireEvent('save');
      expect(handleSave).not.toBeCalled();
    });

    test('should not fire Cancel event', async () => {
      await fireEvent('cancel');
      expect(handleCancel).not.toBeCalled();
    });
  });

  describe('Buttons hided', () => {
    beforeEach(() => {
      loading = false;
      component = renderComponent(loading);
    });

    test('should not show FormFooter with Save or Cancel button', () => {
      const { queryByText } = component;
      const elementSave = queryByText('Save');
      const elementCancel = queryByText('Cancel');
      expect(elementSave).not.toBeInTheDocument();
      expect(elementCancel).not.toBeInTheDocument();
    });
  });
});
