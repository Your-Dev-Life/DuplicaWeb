import FactoryService from '.';

let request;
let expectedFactories;
let factory;

describe('Factory', () => {
  beforeEach(() => {
    request = {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
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
    factory = {
      id: 'factoryId3',
      contract: '3',
      name: 'factoryName3',
    };
  });

  test('should list factories', async () => {
    request.get.mockResolvedValue({ data: expectedFactories });
    const factoryService = FactoryService(request);
    const result = await factoryService.list();

    expect(expectedFactories).toEqual(result);
  });

  test('should create factory', async () => {
    request.post.mockResolvedValue({ data: factory });
    const factoryService = FactoryService(request);
    const result = await factoryService.save({ ...factory, id: undefined });

    expect(factory).toEqual(result);
  });

  test('should read factory', async () => {
    const expectedFactory = expectedFactories[1];
    request.get.mockResolvedValue({ data: expectedFactory });
    const factoryService = FactoryService(request);
    const result = await factoryService.read(expectedFactories[1].id);

    expect(expectedFactory).toEqual(result);
  });

  test('should update factory', async () => {
    request.put.mockResolvedValue({ data: factory });
    const factoryService = FactoryService(request);
    const result = await factoryService.save(factory);

    expect(factory).toEqual(result);
  });

  test('should delete factory', async () => {
    request.delete.mockResolvedValue({ data: factory });
    const factoryService = FactoryService(request);
    const result = await factoryService.remove(factory);

    expect(factory).toEqual(result);
  });
});
