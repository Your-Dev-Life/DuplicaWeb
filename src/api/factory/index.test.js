import FactoryService from '.';

let request;
let expectedFactories;

describe('Factory', () => {
  beforeEach(() => {
    request = {
      get: jest.fn(),
    };
    expectedFactories = [{
      contract: '1',
      name: 'factoryName1',
      id: 'factoryId1',
    }, {
      contract: '2',
      name: 'factoryName2',
      id: 'factoryId2',
    }];
  });

  test('should list factories', async () => {
    request.get.mockResolvedValue({ data: expectedFactories });
    const factoryService = FactoryService(request);
    const result = await factoryService.list();

    expect(expectedFactories).toEqual(result);
  });
});
