import React, { createRef } from 'react';
import { render, screen, act, waitForElementToBeRemoved } from '@testing-library/react';
import FactoryForm from './factoryForm';
import { buildFactory } from './factories.mock';

const factoryFormRef = createRef();

let factory;

const openFormDialog = (factory) => act(() => factoryFormRef.current.openFactoryForm(factory));
const closeFormDialog = () => act(() => factoryFormRef.current.closeFactoryForm());

const buildFactoryForm = (factory) => {
  render(<div role='parent'>
    <FactoryForm ref={factoryFormRef} />
  </div>);
  openFormDialog(factory);
};

describe('FactoryForm', () => {
  beforeEach(() => {
    factory = buildFactory(1);
  });

  test('should show FactoryForm with empty state', async () => {
    factory = undefined;
    await buildFactoryForm(factory);
    expect(screen.getByText('Factory')).toBeInTheDocument();

    expect(screen.getByLabelText(/Contract/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Business Id/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Factory Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Zip Code/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Line 1/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Line 2/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Suburb/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contact Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contact Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contact Phone/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Contract/i).value).toEqual('');
    expect(screen.getByLabelText(/Business Id/i).value).toEqual('');
    expect(screen.getByLabelText(/Factory Name/i).value).toEqual('');
    expect(screen.getByLabelText(/Zip Code/i).value).toEqual('');
    expect(screen.getByLabelText(/Line 1/i).value).toEqual('');
    expect(screen.getByLabelText(/Number/i).value).toEqual('');
    expect(screen.getByLabelText(/Line 2/i).value).toEqual('');
    expect(screen.getByLabelText(/Suburb/i).value).toEqual('');
    expect(screen.getByLabelText(/City/i).value).toEqual('');
    expect(screen.getByLabelText(/State/i).value).toEqual('');
    expect(screen.getByLabelText(/Contact Name/i).value).toEqual('');
    expect(screen.getByLabelText(/Contact Email/i).value).toEqual('');
    expect(screen.getByLabelText(/Contact Phone/i).value).toEqual('');
  });

  test('should open and close FactoryForm', async () => {
    await buildFactoryForm(factory);
    expect(await screen.findByText('Factory')).toBeInTheDocument();
    closeFormDialog();
    await waitForElementToBeRemoved(() => screen.queryByText('Factory'));
  });
});
