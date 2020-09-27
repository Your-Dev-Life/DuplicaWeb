import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CompanyForm from './companyForm';
import { buildCompany } from '../../../tests/mocks/companies.mock';
import { getErrorWithMessage } from '../../../tests/errors';
import {
  MessageNotification,
  MessageProvider
} from '@dhouse.in/message-notification-mui';
import { clickButtonByRole, setInputValue } from '../../../tests/actions';
import { act } from 'react-dom/test-utils';

let company;
const emptyCompany = {
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
  },
  bankInformation: {
    branch: '',
    account: '',
    agreement: '',
    portfolio: '',
    variation: '',
    interest: '',
    instruction1: '',
    instruction2: ''
  },
  taxInformation: {
    accumulated: {
      pis: '',
      cofins: '',
      irrf: '',
      iof: ''
    },
    taxes: {
      pis: '',
      cofins: '',
      irrf: '',
      iof: '',
      additionalIof: ''
    },
    codes: {
      pis: '',
      cofins: '',
      irrf: '',
      iof: ''
    }
  }
};
const api = {
  companyService: {
    save: jest.fn(),
    remove: jest.fn()
  }
};

const afterSave = jest.fn();
const afterCancel = jest.fn();
const afterRemove = jest.fn();

const renderComponent = (company) =>
  render(
    <MessageProvider>
      <CompanyForm
        api={api}
        data={company}
        afterSave={afterSave}
        afterCancel={afterCancel}
        afterRemove={afterRemove}
      />
      <MessageNotification />
    </MessageProvider>
  );

const validateFields = (data = emptyCompany) => {
  expect(screen.getByLabelText(/Business Id/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/^Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Zip Code/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Contact Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Branch/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Accumulated PIS/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Tax PIS/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Code PIS/i)).toBeInTheDocument();

  expect(screen.getByLabelText(/Business Id/i).value).toEqual(data.businessId);
  expect(screen.getByLabelText(/^Name/i).value).toEqual(data.name);
  expect(screen.getByLabelText(/Zip Code/i).value).toEqual(
    data.address.zipCode
  );
  expect(screen.getByLabelText(/Contact Name/i).value).toEqual(
    data.contact.name
  );
  expect(screen.getByLabelText(/Branch/i).value).toEqual(
    data.bankInformation.branch
  );
  expect(screen.getByLabelText(/Accumulated PIS/i).value).toEqual(
    data.taxInformation.accumulated.pis
  );
  expect(screen.getByLabelText(/Tax PIS/i).value).toEqual(
    data.taxInformation.taxes.pis
  );
  expect(screen.getByLabelText(/Code PIS/i).value).toEqual(
    data.taxInformation.codes.pis
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

describe('CompanyForm', () => {
  beforeEach(() => {
    company = buildCompany(1);
  });

  test('should show CompanyForm with empty values when data is empty', () => {
    const data = {};
    renderComponent(data);
    validateFields();
  });

  test('should show CompanyForm with empty values data is undefined', () => {
    const data = undefined;
    renderComponent(data);
    validateFields();
  });

  test('should show CompanyForm with data values', () => {
    renderComponent(company);
    validateFields(company);
  });

  test('should change CompanyForm default data values', () => {
    renderComponent(company);

    const businessIdUpdated = '00001111000011';
    const nameUpdated = 'Company Name Updated';
    const zipCodeUpdated = '9999';
    const contactNameUpdated = 'Contact Name Updated';
    const branchUpdated = '9999';

    setInputValue('Business Id', businessIdUpdated);
    setInputValue('Name', nameUpdated);
    setInputValue('Zip Code', zipCodeUpdated);
    setInputValue('Contact Name', contactNameUpdated);
    setInputValue('Branch', branchUpdated);

    const updatedCompany = {
      ...company,
      businessId: businessIdUpdated,
      name: nameUpdated,
      address: {
        ...company.address,
        zipCode: zipCodeUpdated
      },
      contact: {
        ...company.contact,
        name: contactNameUpdated
      },
      bankInformation: {
        ...company.bankInformation,
        branch: branchUpdated
      }
    };
    validateFields(updatedCompany);
  });

  test('should call afterCancel when cancel button is clicked', async (done) => {
    renderComponent(company);
    await clickButtonByRole('cancel');
    expect(afterCancel).toHaveBeenCalled();
    done();
  });

  test('should save a company when save button is clicked', async (done) => {
    const createdCompany = {
      ...company,
      _id: 'c1029bdb-d274-42da-8e54-00ed4f0231aa'
    };
    api.companyService.save.mockResolvedValue(createdCompany);
    renderComponent(company);
    await save();
    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Company successfully saved'
    );
    done();
  });

  test('should remove a company when remove button is clicked and confirmed', async (done) => {
    const removedCompany = {
      ...company,
      _id: 'c1029bdb-d274-42da-8e54-00ed4f0231aa'
    };
    api.companyService.remove.mockResolvedValue(removedCompany);
    renderComponent(removedCompany);
    await remove();
    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Company successfully removed'
    );
    expect(afterRemove).toHaveBeenCalledWith(removedCompany);
    done();
  });

  test('should show error message when save button is clicked', async (done) => {
    api.companyService.save.mockRejectedValue(getErrorWithMessage(null));
    renderComponent(company);
    await save();
    expect(await screen.findByRole('alert')).toHaveTextContent(
      "Company couldn't be saved"
    );
    done();
  });

  test('should show error message when remove button is clicked and confirmed', async (done) => {
    company._id = 'c1029bdb-d274-42da-8e54-00ed4f0231aa';
    api.companyService.remove.mockRejectedValue(getErrorWithMessage(null));
    renderComponent(company);
    await remove();
    expect(await screen.findByRole('alert')).toHaveTextContent(
      "Company couldn't be removed"
    );
    done();
  });

  test('should show CompanyForm with error messages', async (done) => {
    const data = {};
    renderComponent(data);
    await save();
    expect(
      screen.getByText(/Company businessId is required/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Company name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Zip Code is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact name is required/i)).toBeInTheDocument();

    expect(screen.getByText(/Branch is required/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Company accumulated PIS is required/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Company tax PIS is required/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Company code PIS is required/i)
    ).toBeInTheDocument();
    done();
  });
});
