const buildFactory = (id) => ({
    name: `name${id}`,
      businessId: `businessId${id}`,
    contract: `contract1${id}`,
    address: {
    zipCode: `${id}`.padEnd(4, '0'),
      address: `Address${id}`,
      complement: `Complement${id}`,
      neighborhood: `Neighborhood${id}`,
      city: `City${id}`,
      state: `State${id}`,
  },
    contact: {
      email: `email${id}@duplica.com.br`,
        phone: `${id}`.padStart(10, '0'),
    }
  }
);

const buildFactories = (numberOfFactories) => {
  const factories = [];

  for(let i = 0; i < numberOfFactories; i++) {
    factories.push(buildFactory(i + 1));
  }
  return factories;
};

export {
  buildFactory,
  buildFactories,
};
