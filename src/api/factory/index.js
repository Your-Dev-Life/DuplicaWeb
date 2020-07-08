const FactoryService = (request) => {
  const list = () => {
    return request.get('/api/factories')
      .then((factories) => {
        return factories.data;
      });
  };

  const create = (factory) =>
    request.post('/api/factories', factory)
      .then((factory) => {
        return factory.data;
      });

  const update = (factory) => {
    const id = factory.id;
    return request.put(`/api/factories/${id}`, factory)
      .then((factory) => {
        return factory.data;
      });
  };

  const save = (factory) => {
    if (!factory.id) {
      return create(factory);
    }
    return update(factory);
  };

  const read = (id) => {
    return request.get(`/api/factories/${id}`)
    .then((factory) => {
      return factory.data;
    });
  };

  return {
    list,
    save,
    read,
  };
};

export default FactoryService;
