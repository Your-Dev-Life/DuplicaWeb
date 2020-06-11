import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { FormFooter } from '../index';

const handleSave = jest.fn();
const handleCancel = jest.fn();

let component;
let loading;

const renderComponent = (loading, options) => render(
  <FormFooter
    options={options}
    loading={loading}
  />
);

const fireEvent = async (buttonName) => user.click(await component.findByRole(buttonName));
const cancel = { title: 'Cancel', onCancel: handleCancel };
const save = { title: 'Save', onSave: handleSave };

describe('FormFooter', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Buttons enabled', () => {
    beforeEach(() => {
      loading = false;
      const options = { cancel, save };
      component = renderComponent(loading, options);
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
      const options = { cancel, save };
      component = renderComponent(loading, options);
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
      const options = {};
      component = renderComponent(loading, options);
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
