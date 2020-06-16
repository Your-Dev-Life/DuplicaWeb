import React from 'react';
import { render, screen } from '@testing-library/react';
import Address from './Address';

let mockRegister = jest.fn();
let mockErrors = {};

const renderComponent = (data, register = mockRegister, errors = mockErrors) => render(
  <Address data={data} register={register} errors={errors} />
);

const validateFields = ({ zipCode = '', line1 = '', number = '', line2 = '', suburb = '', city = '', state = '' }) => {
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
      state: 'NSW',
    };
    renderComponent(data);
    validateFields(data);
  });

  test('should show Address with error messages', () => {
    const data = {};
    mockErrors = {
      zipCode: { message: 'Zip Code is required' },
      number: { message: 'Number is required' },
      line1: { message: 'Line 1 is required' },
      suburb: { message: 'Suburb is required' },
      city: { message: 'City is required' },
      state: { message: 'State is required' },
    };
    renderComponent(data, mockRegister, mockErrors);
    expect(screen.getByText(/Zip Code is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Number is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Line 1 is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Suburb is required/i)).toBeInTheDocument();
    expect(screen.getByText(/City is required/i)).toBeInTheDocument();
    expect(screen.getByText(/State is required/i)).toBeInTheDocument();
  });
});
