const getFactory = (rawFactory) => {
  const { contactName, contactEmail, contactPhone } = rawFactory;
  return {
    id: rawFactory.id,
    contract: rawFactory.contract,
    businessId: rawFactory.businessId,
    name: rawFactory.name,
    address: {
      zipCode: rawFactory.zipCode,
      line1: rawFactory.line1,
      number: rawFactory.number,
      line2: rawFactory.line2,
      suburb: rawFactory.suburb,
      city: rawFactory.city,
      state: rawFactory.state,
    },
    contact: {
      name: contactName,
      email: contactEmail,
      phone: contactPhone,
    },
  }
};

export {
  getFactory,
};
