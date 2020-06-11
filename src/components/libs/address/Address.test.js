import React from 'react';
import { render, screen } from '@testing-library/react';
import Address from './Address';

let mockRegister = jest.fn();
let mockErrors = {};

const renderComponent = (data, register = mockRegister, errors = mockErrors) => render(
  <Address data={data} register={register} errors={errors} />
);

describe('Address', () => {
  test('should show Address with empty values', () => {
    const data = {};
    renderComponent(data);
    expect(screen.getByLabelText(/Zip Code/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Zip Code/i).value).toEqual('');
    expect(screen.getByLabelText(/Line 1/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Line 1/i).value).toEqual('');
    expect(screen.getByLabelText(/Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number/i).value).toEqual('');
    expect(screen.getByLabelText(/Line 2/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Line 2/i).value).toEqual('');
    expect(screen.getByLabelText(/Suburb/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Suburb/i).value).toEqual('');
    expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/State/i).value).toEqual('');
  });

  test('should show Address with data values', () => {
    const data = {
      zipCode: '2065',
      number: '10',
      line1: 'Falcon St',
      suburb: 'Crows Nest',
      state: 'NSW',
    };
    renderComponent(data);
    expect(screen.getByLabelText(/Zip Code/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Zip Code/i).value).toEqual(data.zipCode);
    expect(screen.getByLabelText(/Line 1/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Line 1/i).value).toEqual(data.line1);
    expect(screen.getByLabelText(/Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number/i).value).toEqual(data.number);
    expect(screen.getByLabelText(/Line 2/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Line 2/i).value).toEqual('');
    expect(screen.getByLabelText(/Suburb/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Suburb/i).value).toEqual(data.suburb);
    expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/State/i).value).toEqual(data.state);
  });

  test('should show Address with error messages', () => {
    const data = {};
    mockErrors = {
      zipCode: { message: 'Zip Code is required' },
      number: { message: 'Number is required' },
      line1: { message: 'Line 1 is required' },
      suburb: { message: 'Suburb is required' },
      state: { message: 'State is required' },
    };
    renderComponent(data, mockRegister, mockErrors);
    expect(screen.getByText(/Zip Code is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Number is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Line 1 is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Suburb is required/i)).toBeInTheDocument();
    expect(screen.getByText(/State is required/i)).toBeInTheDocument();
  });
});
