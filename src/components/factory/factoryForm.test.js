import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import FactoryForm from './factoryForm';
import { buildFactory } from '../../../tests/mocks/factories.mock';
import { getErrorWithMessage } from '../../../tests/errors';
import {
  MessageNotification,
  MessageProvider
} from '@dhouse.in/message-notification-mui';
import { clickButtonByRole, setInputValue } from '../../../tests/actions';
import { act } from 'react-dom/test-utils';

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
    state: ''
  },
  contact: {
    name: '',
    email: '',
    phone: ''
  }
};
const api = {
  factoryService: {
    save: jest.fn(),
    remove: jest.fn()
  }
};

const afterSave = jest.fn();
const afterCancel = jest.fn();
const afterRemove = jest.fn();

const renderComponent = (factory) =>
  render(
    <MessageProvider>
      <FactoryForm
        api={api}
        data={factory}
        afterSave={afterSave}
        afterCancel={afterCancel}
        afterRemove={afterRemove}
      />
      <MessageNotification />
    </MessageProvider>
  );

const validateFields = (data = emptyFactory) => {
  expect(screen.getByLabelText(/Contract/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Business Id/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/^Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Zip Code/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Contact Name/i)).toBeInTheDocument();

  expect(screen.getByLabelText(/Contract/i).value).toEqual(data.contract);
  expect(screen.getByLabelText(/Business Id/i).value).toEqual(data.businessId);
  expect(screen.getByLabelText(/^Name/i).value).toEqual(data.name);
  expect(screen.getByLabelText(/Zip Code/i).value).toEqual(
    data.address.zipCode
  );
  expect(screen.getByLabelText(/Contact Name/i).value).toEqual(
    data.contact.name
  );
};

const save = () =>
  act(async () => {
    await clickButtonByRole('save');
  });

const remove = () =>
  act(async () => {
    await clickButtonByRole('remove');
    await clickButtonByRole('confirm');
  });

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

    const updatedFactory = {
      ...factory,
      contract: contractUpdated,
      businessId: businessIdUpdated,
      name: nameUpdated,
      address: {
        ...factory.address,
        zipCode: zipCodeUpdated
      },
      contact: {
        ...factory.contact,
        name: contactNameUpdated
      }
    };
    validateFields(updatedFactory);
  });

  test('should call afterCancel when cancel button is clicked', async (done) => {
    renderComponent(factory);
    await clickButtonByRole('cancel');
    expect(afterCancel).toHaveBeenCalled();
    done();
  });

  test('should save a factory when save button is clicked', async (done) => {
    const createdFactory = {
      ...factory,
      _id: 'c1029bdb-d274-42da-8e54-00ed4f0231aa'
    };
    api.factoryService.save.mockResolvedValue(createdFactory);
    renderComponent(factory);
    await save();
    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Factory successfully saved'
    );
    done();
  });

  test('should remove a factory when remove button is clicked and confirmed', async (done) => {
    const removedFactory = {
      ...factory,
      _id: 'c1029bdb-d274-42da-8e54-00ed4f0231aa'
    };
    api.factoryService.remove.mockResolvedValue(removedFactory);
    renderComponent(removedFactory);
    await remove();
    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Factory successfully removed'
    );
    expect(afterRemove).toHaveBeenCalledWith(removedFactory);
    done();
  });

  test('should show error message when save button is clicked', async (done) => {
    api.factoryService.save.mockRejectedValue(getErrorWithMessage(null));
    renderComponent(factory);
    await save();
    expect(await screen.findByRole('alert')).toHaveTextContent(
      "Factory couldn't be saved"
    );
    done();
  });

  test('should show error message when remove button is clicked and confirmed', async (done) => {
    factory._id = 'c1029bdb-d274-42da-8e54-00ed4f0231aa';
    api.factoryService.remove.mockRejectedValue(getErrorWithMessage(null));
    renderComponent(factory);
    await remove();
    expect(await screen.findByRole('alert')).toHaveTextContent(
      "Factory couldn't be removed"
    );
    done();
  });

  test('should show FactoryForm with error messages', async (done) => {
    const data = {};
    renderComponent(data);
    await save();
    expect(
      screen.getByText(/Factory contract is required/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Factory businessId is required/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Factory name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Zip Code is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact name is required/i)).toBeInTheDocument();
    done();
  });
});
