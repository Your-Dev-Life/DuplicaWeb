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
});
