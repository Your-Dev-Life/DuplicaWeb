const FactoryService = (request) => {
  const list = () => {
    return request.get('/api/factories')
      .then((factories) => {
        return factories.data;
      });
  };

  return {
    list,
  };
};

export default FactoryService;
