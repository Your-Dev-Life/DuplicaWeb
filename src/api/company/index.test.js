import CompanyService from '.';

let request;
let expectedCompanies;
let company;

describe('Company', () => {
  beforeEach(() => {
    request = {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn()
    };
    expectedCompanies = [
      {
        id: 'companyId1',
        name: 'companyName1',
        businessId: '1',
      },
      {
        id: 'companyId2',
        name: 'companyName2',
        businessId: '2',
      }
    ];
    company = {
      id: 'companyId3',
      name: 'companyName3',
      businessId: '3',
    };
  });

  test('should list companies', async () => {
    request.get.mockResolvedValue({ data: expectedCompanies });
    const companyService = CompanyService(request);
    const result = await companyService.list();

    expect(expectedCompanies).toEqual(result);
  });

  test('should create company', async () => {
    request.post.mockResolvedValue({ data: company });
    const companyService = CompanyService(request);
    const result = await companyService.save({ ...company, id: undefined });

    expect(company).toEqual(result);
  });

  test('should read company', async () => {
    const expectedCompany = expectedCompanies[1];
    request.get.mockResolvedValue({ data: expectedCompany });
    const companyService = CompanyService(request);
    const result = await companyService.read(expectedCompanies[1].id);

    expect(expectedCompany).toEqual(result);
  });

  test('should update company', async () => {
    request.put.mockResolvedValue({ data: company });
    const companyService = CompanyService(request);
    const result = await companyService.save(company);

    expect(company).toEqual(result);
  });

  test('should delete company', async () => {
    request.delete.mockResolvedValue({ data: company });
    const companyService = CompanyService(request);
    const result = await companyService.remove(company);

    expect(company).toEqual(result);
  });
});
