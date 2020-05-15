const FactoryService = (request) => {
  const list = () => {
    return request.get('/api/factories')
      .then((factories) => {
        return factories.data;
      });
  };

  const create = (newFactory) => {
    return request.post('/api/factories', newFactory)
      .then((factory) => {
        return factory.data;
      });
  };

  const read = (id) => {
    return request.get(`/api/factories/${id}`)
    .then((factory) => {
      return factory.data;
    });
  };

  return {
    list,
    create,
    read,
  };
};

export default FactoryService;
