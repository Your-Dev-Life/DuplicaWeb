import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import FactoryForm from './factoryForm';
import { buildFactory } from './factories.mock';
import {clickButtonByRole, setInputValue} from '../../../tests/actions';

let factory;
const emptyFactory = {
  contract: '',
  businessId: '',
  name: '',
  address: {
    zipCode: '',
    address: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  },
  contact: {
    name: '',
    email: '',
    phone: '',
  },
};

const renderComponent = (factory) => render(<FactoryForm data={factory} />);

const validateFields = (data = emptyFactory) => {
  expect(screen.getByLabelText(/Contract/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Business Id/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/^Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Zip Code/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Contact Name/i)).toBeInTheDocument();

  expect(screen.getByLabelText(/Contract/i).value).toEqual(data.contract);
  expect(screen.getByLabelText(/Business Id/i).value).toEqual(data.businessId);
  expect(screen.getByLabelText(/^Name/i).value).toEqual(data.name);
  expect(screen.getByLabelText(/Zip Code/i).value).toEqual(data.address.zipCode);
  expect(screen.getByLabelText(/Contact Name/i).value).toEqual(data.contact.name);
};

describe('FactoryForm', () => {
  beforeEach(() => {
    factory = buildFactory(1);
  });

  test('should show FactoryForm with empty values when data is empty', () => {
    const data = {};
    renderComponent(data);
    validateFields();
  });

  test('should show FactoryForm with empty values data is undefined', () => {
    const data = undefined;
    renderComponent(data);
    validateFields();
  });

  test('should show FactoryForm with data values', () => {
    renderComponent(factory);
    validateFields(factory);
  });

  test('should change FactoryForm default data values', () => {
    renderComponent(factory);

    const contractUpdated = '0123456789';
    const businessIdUpdated = '00001111000011';
    const nameUpdated = 'Factory Name Updated';
    const zipCodeUpdated = '9999';
    const contactNameUpdated = 'Contact Name Updated';

    setInputValue('Contract', contractUpdated);
    setInputValue('Business Id', businessIdUpdated);
    setInputValue('Name', nameUpdated);
    setInputValue('Zip Code', zipCodeUpdated);
    setInputValue('Contact Name', contactNameUpdated);

    validateFields({
      ...factory,
      contract: contractUpdated,
      businessId: businessIdUpdated,
      name: nameUpdated,
      address: {
        ...factory.address,
        zipCode: zipCodeUpdated,
      },
      contact: {
        ...factory.contact,
        name: contactNameUpdated,
      },
    })
  });

  test('should show FactoryForm with error messages', async done => {
    const data = {};
    renderComponent(data);
    await clickButtonByRole('save');
    await waitFor(() => {
      expect(screen.getByText(/Factory contract is required/i)).toBeInTheDocument()
      expect(screen.getByText(/Factory businessId is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Factory name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Zip Code is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Contact name is required/i)).toBeInTheDocument();
    });
    done()
  });
});
