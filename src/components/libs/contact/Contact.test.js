import React from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { render, screen, waitFor } from '@testing-library/react';
import Contact from './Contact';
import {
  setInputValue,
  clickButtonByRole,
} from '../../../../tests/actions';

const renderComponent = (data, onSubmit = jest.fn()) => {
  const MyContactFormTest = () => {
    const methods = useForm();

    return <FormContext { ...methods } >
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Contact data={data} />
        <button type="submit">Submit</button>
      </form>
    </FormContext>
  };

  return render(<MyContactFormTest />);
}

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

  test('should change Contact default data values', () => {
    const data = {
      name: 'Test Name',
      email: 'email@test.com.au',
      phone: '0123 456 789',
    };
    renderComponent(data);

    const nameUpdated = 'Test Name Updated';
    const emailUpdated = 'emailUpdated@test.com.au';
    const phoneUpdated = '9876 543 210';

    setInputValue('Contact Name', nameUpdated);
    setInputValue('Contact Email', emailUpdated);
    setInputValue('Contact Phone', phoneUpdated);

    expect(screen.getByLabelText(/Name/i).value).toEqual(nameUpdated);
    expect(screen.getByLabelText(/Email/i).value).toEqual(emailUpdated);
    expect(screen.getByLabelText(/Phone/i).value).toEqual(phoneUpdated);
  });

  test('should show Contact with error messages', async done => {
    const data = {};
    renderComponent(data);
    await clickButtonByRole('button');
    await waitFor(() => {
      expect(screen.getByText(/Contact name is required/i)).toBeInTheDocument()
      expect(screen.getByText(/Contact email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Contact phone is required/i)).toBeInTheDocument();
    });
    done()
  });
});
