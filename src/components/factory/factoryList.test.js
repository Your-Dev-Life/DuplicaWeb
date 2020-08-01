import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import FactoryList from './factoryList';
import { buildFactories } from './factories.mock';
import {
  clickButtonByRole,
  clickButtonByText,
  clickButtonByTitle
} from '../../../tests/actions';

let api;
let items;

const buildFactoryList = async (api, items = []) => {
  api.factoryService.list.mockResolvedValue(items);
  return act(async () => {
    await render(<FactoryList api={api} />);
  });
};

const validateIfFactoryFormExists = () => {
  expect(screen.getByRole('FormFactory')).toBeInTheDocument();
  expect(screen.getByText('Cancel')).toBeInTheDocument();
  expect(screen.getByText('Save')).toBeInTheDocument();
};

const validateIfFactoryFormDoesNotExist = () => {
  expect(screen.queryByRole('FormFactory')).not.toBeInTheDocument();
  expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
  expect(screen.queryByText('Save')).not.toBeInTheDocument();
};

const closeAndCheckFactoryForm = async () => {
  await clickButtonByRole('close');
  await waitFor(() => {
    validateIfFactoryFormDoesNotExist();
  });
};

describe('FactoryList', () => {
  beforeEach(() => {
    items = buildFactories(2);
    api = {
      factoryService: {
        list: jest.fn(),
        read: jest.fn()
      }
    };
  });

  test('should show FactoryList with no items', async () => {
    items = [];
    await buildFactoryList(api, items);
    expect(screen.getByText(/No records to display/i)).toBeInTheDocument();
  });

  test('should show FactoryList with 2 items', async () => {
    await buildFactoryList(api, items);
    expect(screen.getByText(items[0].name)).toBeInTheDocument();
    expect(screen.getByText(items[1].name)).toBeInTheDocument();
  });

  test('should load Factory based on the selected row and close it', async (done) => {
    const item = items[0];
    api.factoryService.read.mockResolvedValue(item);
    await buildFactoryList(api, items);

    validateIfFactoryFormDoesNotExist();

    await act(async () => {
      await clickButtonByText(item.name);
    });

    await validateIfFactoryFormExists();
    await closeAndCheckFactoryForm();
    done();
  });

  test('should open Factory Form empty and close it', async (done) => {
    api.factoryService.read.mockResolvedValue(items[0]);
    await buildFactoryList(api, items);

    validateIfFactoryFormDoesNotExist();

    await act(async () => {
      await clickButtonByTitle('Create Factory');
    });

    await validateIfFactoryFormExists();
    await closeAndCheckFactoryForm();
    done();
  });
});
