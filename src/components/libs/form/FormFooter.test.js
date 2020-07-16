import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { FormFooter } from '../index';

const handleSave = jest.fn();
const handleCancel = jest.fn();
const handleRemove = jest.fn();

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
const remove = { title: 'Remove', onRemove: handleRemove };

describe('FormFooter', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Buttons enabled', () => {
    beforeEach(() => {
      loading = false;
      const options = { cancel, save, remove };
      component = renderComponent(loading, options);
    });

    test('should show FormFooter with all starting components', () => {
      const { queryByText } = component;
      const elementSave = queryByText('Save');
      const elementCancel = queryByText('Cancel');
      const elementRemove = queryByText('Remove');
      expect(elementSave).toBeInTheDocument();
      expect(elementCancel).toBeInTheDocument();
      expect(elementRemove).toBeInTheDocument();
    });

    const cases = [
      ['save', handleSave],
      ['cancel', handleCancel]
    ];

    test.each(cases)(
      'should fire %p event',
      async (event, expectedCall) => {
        await fireEvent(event);
        expect(expectedCall).toBeCalled();
      },
    );

    test('should fire remove event after confirm', async () => {
      await fireEvent('remove');
      await fireEvent('confirm');
      expect(handleRemove).toBeCalled();
    });
  });

  describe('Buttons disabled', () => {
    beforeEach(() => {
      loading = true;
      const options = { cancel, save, remove };
      component = renderComponent(loading, options);
    });

    const cases = [
      ['save'],
      ['cancel'],
      ['remove'],
    ];

    test.each(cases)(
      'should %p button be disabled',
      async (buttonName) => {
        expect(screen.getByRole(buttonName)).toBeDisabled();
      },
    );
  });

  describe('Buttons hided', () => {
    beforeEach(() => {
      loading = false;
      const options = {};
      component = renderComponent(loading, options);
    });

    test('should not show FormFooter with any button', () => {
      const { queryByText } = component;
      const elementSave = queryByText('Save');
      const elementCancel = queryByText('Cancel');
      const elementRemove = queryByText('Remove');
      expect(elementSave).not.toBeInTheDocument();
      expect(elementCancel).not.toBeInTheDocument();
      expect(elementRemove).not.toBeInTheDocument();
    });
  });
});
