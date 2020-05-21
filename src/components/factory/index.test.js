import React from 'react';
import { render, act } from '@testing-library/react';
import Factory from ".";

let api;
let getByText;

const buildFactoryComponent = async (api, items = []) => {
  api.factoryService.list.mockResolvedValue(items);
  await act(async() => {
    getByText = await render(<Factory api={api} />).getByText;
  });
};

describe('Factory', () => {
  beforeEach(() => {
    api = {
      factoryService: {
        list: jest.fn(),
      },
    };
  });

  test('should show Factory list with no items', async () => {
    await buildFactoryComponent(api);
    const element = await getByText(/No records to display/i);
    expect(element).toBeInTheDocument();
  });

  test('should show Factory list with 2 items', async () => {
    const items = [{
      name: 'name1',
    }, {
      name: 'name2',
    }];
    await buildFactoryComponent(api, items);
    const element1 = await getByText(/name1/i);
    const element2 = await getByText(/name2/i);
    expect(element1).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
  });

  test('should open a Factory from the table with all it\'s content', async () => {
    const items = [{
      name: 'name1',
      businessId: 'businessId1',
      contract: 'contract1',
      address: {
        zipCode: 1111,
        address: 'Address1',
        complement: 'Complement1',
        neighborhood: 'Neighborhood1',
        city: 'City1',
        state: 'State1'
      },
      contact: {
        email: 'email1@test.com.au',
        phone: '0000 000 000',
      }
    }];
    await buildFactoryComponent(api, items);
    const element = await getByText(items[0].name);
    expect(element).toBeInTheDocument();

    
  });
});
