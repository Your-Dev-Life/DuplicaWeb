import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import CompanyList from './companyList';
import { buildCompanies } from '../../../tests/mocks/companies.mock';
import {
  clickButtonByRole,
  clickButtonByText,
  clickButtonByTitle
} from '../../../tests/actions';

let api;
let items;

const buildCompanyList = async (api, items = []) => {
  api.companyService.list.mockResolvedValue(items);
  return act(async () => {
    await render(<CompanyList api={api} />);
  });
};

const validateIfCompanyFormExists = () => {
  expect(screen.getByRole('FormCompany')).toBeInTheDocument();
  expect(screen.getByText('Cancel')).toBeInTheDocument();
  expect(screen.getByText('Save')).toBeInTheDocument();
};

const validateIfCompanyFormDoesNotExist = () => {
  expect(screen.queryByRole('FormCompany')).not.toBeInTheDocument();
  expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
  expect(screen.queryByText('Save')).not.toBeInTheDocument();
};

const closeAndCheckCompanyForm = async () => {
  await clickButtonByRole('close');
  await waitFor(() => {
    validateIfCompanyFormDoesNotExist();
  });
};

describe('CompanyList', () => {
  beforeEach(() => {
    items = buildCompanies(2);
    api = {
      companyService: {
        list: jest.fn(),
        read: jest.fn()
      }
    };
  });

  test('should show CompanyList with no items', async () => {
    items = [];
    await buildCompanyList(api, items);
    expect(screen.getByText(/No records to display/i)).toBeInTheDocument();
  });

  test('should show CompanyList with 2 items', async () => {
    await buildCompanyList(api, items);
    expect(screen.getByText(items[0].name)).toBeInTheDocument();
    expect(screen.getByText(items[1].name)).toBeInTheDocument();
  });

  test('should load Company based on the selected row and close it', async (done) => {
    const item = items[0];
    api.companyService.read.mockResolvedValue(item);
    await buildCompanyList(api, items);

    validateIfCompanyFormDoesNotExist();

    await act(async () => {
      await clickButtonByText(item.name);
    });

    await validateIfCompanyFormExists();
    await closeAndCheckCompanyForm();
    done();
  });

  test('should open Company Form empty and close it', async (done) => {
    api.companyService.read.mockResolvedValue(items[0]);
    await buildCompanyList(api, items);

    validateIfCompanyFormDoesNotExist();

    await act(async () => {
      await clickButtonByTitle('Create Company');
    });

    await validateIfCompanyFormExists();
    await closeAndCheckCompanyForm();
    done();
  });
});
