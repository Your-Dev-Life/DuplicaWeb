import React from 'react';
import { FormContext, useForm } from 'react-hook-form';
import { render, screen, waitFor } from '@testing-library/react';
import Address from './Address';
import { setInputValue, clickButtonByRole } from '../../../../tests/actions';

const renderComponent = (data, onSubmit = jest.fn()) => {
  const MyAddressFormTest = () => {
    const methods = useForm();

    return (
      <FormContext {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Address data={data} />
          <button type='submit'>Submit</button>
        </form>
      </FormContext>
    );
  };

  return render(<MyAddressFormTest />);
};

const validateFields = ({
  zipCode = '',
  line1 = '',
  number = '',
  line2 = '',
  suburb = '',
  city = '',
  state = ''
}) => {
  expect(screen.getByLabelText(/Zip Code/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Zip Code/i).value).toEqual(zipCode);
  expect(screen.getByLabelText(/Line 1/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Line 1/i).value).toEqual(line1);
  expect(screen.getByLabelText(/Number/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number/i).value).toEqual(number);
  expect(screen.getByLabelText(/Line 2/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Line 2/i).value).toEqual(line2);
  expect(screen.getByLabelText(/Suburb/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Suburb/i).value).toEqual(suburb);
  expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/City/i).value).toEqual(city);
  expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/State/i).value).toEqual(state);
};

describe('Address', () => {
  test('should show Address with empty values when data is empty', () => {
    const data = {};
    renderComponent(data);
    validateFields(data);
  });

  test('should show Address with empty values when data is undefined', () => {
    const data = undefined;
    renderComponent(data);
    validateFields({});
  });

  test('should show Address with data values', () => {
    const data = {
      zipCode: '2065',
      number: '10',
      line1: 'Falcon St',
      suburb: 'Crows Nest',
      city: 'Sydney',
      state: 'NSW'
    };
    renderComponent(data);
    validateFields(data);
  });

  test('should change Address default data values', () => {
    const data = {
      zipCode: '2065',
      number: '10',
      line1: 'Falcon St',
      line2: 'Any value',
      suburb: 'Crows Nest',
      city: 'Sydney',
      state: 'NSW'
    };
    renderComponent(data);

    const zipCodeUpdated = '2000';
    const numberUpdated = '680';
    const line1Updated = 'Georg St';
    const line2Updated = 'Any value updated';
    const suburbUpdated = 'CBD';
    const cityUpdated = 'Sydney';
    const stateUpdated = 'NSW';

    setInputValue('Zip Code', zipCodeUpdated);
    setInputValue('Number', numberUpdated);
    setInputValue('Line 1', line1Updated);
    setInputValue('Line 2', line2Updated);
    setInputValue('Suburb', suburbUpdated);
    setInputValue('City', cityUpdated);
    setInputValue('State', stateUpdated);

    expect(screen.getByLabelText(/Zip Code/i).value).toEqual(zipCodeUpdated);
  });

  test('should show Address with error messages', async (done) => {
    const data = {};
    renderComponent(data);
    await clickButtonByRole('button');
    await waitFor(() => {
      expect(screen.getByText(/Zip Code is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Number is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Line 1 is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Suburb is required/i)).toBeInTheDocument();
      expect(screen.getByText(/City is required/i)).toBeInTheDocument();
      expect(screen.getByText(/State is required/i)).toBeInTheDocument();
    });
    done();
  });
});
