import React from 'react';
import { FormContext, useForm } from 'react-hook-form';
import { render, screen, waitFor } from '@testing-library/react';
import BankAccount from './BankAccount';
import { setInputValue, clickButtonByRole } from '../../../../tests/actions';

let data;

const renderComponent = (data, onSubmit = jest.fn()) => {
  const MyAddressFormTest = () => {
    const methods = useForm();

    return (
      <FormContext {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <BankAccount data={data} />
          <button type='submit'>Submit</button>
        </form>
      </FormContext>
    );
  };

  return render(<MyAddressFormTest />);
};

const validateFields = ({ branch = '', account = '' }) => {
  expect(screen.getByLabelText(/Branch/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Branch/i).value).toEqual(branch);
  expect(screen.getByLabelText(/Account/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Account/i).value).toEqual(account);
};

describe('BankAccount', () => {
  beforeEach(() => {
    data = {
      branch: '123456',
      account: '12345678'
    };
  });

  test('should show BankAccount with empty values when data is empty', () => {
    data = {};
    renderComponent(data);
    validateFields(data);
  });

  test('should show BankAccount with empty values when data is undefined', () => {
    const data = undefined;
    renderComponent(data);
    validateFields({});
  });

  test('should show BankAccount with data values', () => {
    renderComponent(data);
    validateFields(data);
  });

  test('should change BankAccount default data values', () => {
    renderComponent(data);

    const branchUpdated = '654321';
    const accountNumberUpdated = '87654321';

    setInputValue('Branch', branchUpdated);
    setInputValue('Account', accountNumberUpdated);

    expect(screen.getByLabelText(/Branch/i).value).toEqual(branchUpdated);
    expect(screen.getByLabelText(/Account/i).value).toEqual(
      accountNumberUpdated
    );
  });

  test('should show BankAccount with error messages', async (done) => {
    data = {};
    renderComponent(data);
    await clickButtonByRole('button');
    await waitFor(() => {
      expect(screen.getByText(/Branch is required/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Account number is required/i)
      ).toBeInTheDocument();
    });
    done();
  });
});
