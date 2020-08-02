const CompanyService = (request) => {
  const list = () => {
    return request.get('/api/companies').then((companies) => {
      return companies.data;
    });
  };

  const create = (company) =>
    request.post('/api/companies', company).then((company) => {
      return company.data;
    });

  const update = (company) => {
    const id = company.id;
    return request.put(`/api/companies/${id}`, company).then((company) => {
      return company.data;
    });
  };

  const read = (id) => {
    return request.get(`/api/companies/${id}`).then((company) => {
      return company.data;
    });
  };

  const save = (company) => {
    if (!company.id) {
      return create(company);
    }
    return update(company);
  };

  const remove = (id) => {
    return request.delete(`/api/companies/${id}`).then((company) => {
      return company.data;
    });
  };

  return {
    list,
    save,
    read,
    remove
  };
};

export default CompanyService;
