import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

let mockRegister = jest.fn();
let mockErrors = {};

const renderComponent = (data, register = mockRegister, errors = mockErrors) => render(
  <Contact data={data} register={register} errors={errors} />
);

const validateFields = ({ name = '', email = '', phone = '' }) => {
  expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Name/i).value).toEqual(name);
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i).value).toEqual(email);
  expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone/i).value).toEqual(phone);
};

describe('Contact', () => {
  test('should show Contact with empty values when data is empty', () => {
    const data = {};
    renderComponent(data);
    validateFields(data);
  });

  test('should show Contact with empty values when data is undefined', () => {
    const data = undefined;
    renderComponent(data);
    validateFields({});
  });

  test('should show Contact with data values', () => {
    const data = {
      name: 'Test Name',
      email: 'email@test.com.au',
      phone: '0123 456 780',
    };
    renderComponent(data);
    validateFields(data);
  });

  test('should show Contact with error messages', () => {
    const data = {};
    mockErrors = {
      contactName: { message: 'Contact name is required' },
      contactEmail: { message: 'Contact email is required' },
      contactPhone: { message: 'Contact phone is required' },
    };
    renderComponent(data, mockRegister, mockErrors);
    expect(screen.getByText(/Contact name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact phone is required/i)).toBeInTheDocument();
  });
});
