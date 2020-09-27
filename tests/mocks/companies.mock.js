const buildCompany = (id) => ({
  name: `name${id}`,
  businessId: `businessId${id}`,
  address: {
    zipCode: `${id}`.padEnd(4, '0'),
    line1: `Address${id}`,
    number: `${id}`,
    line2: `Complement${id}`,
    suburb: `Neighborhood${id}`,
    city: `City${id}`,
    state: `State${id}`
  },
  contact: {
    name: `contact name${id}`,
    email: `email${id}@duplica.com.br`,
    phone: `${id}`.padStart(10, '0')
  },
  bankInformation: {
    branch: `${id}`.padEnd(6, '0'),
    account: `${id}`.padEnd(10, '0'),
    agreement: `${id}`.padEnd(7, '0'),
    portfolio: `${id}`.padEnd(2, '0'),
    variation: `${id}`.padEnd(2, '0'),
    interest: `0.${id}`.padEnd(6, '0'),
    instruction1: `${id}`.padEnd(2, '0'),
    instruction2: `${id}`.padEnd(2, '0')
  },
  taxInformation: {
    accumulated: {
      pis: `${id}`.padEnd(2, '0') + '.0000',
      cofins: `${id}`.padEnd(1, '0') + '.0000',
      irrf: `${id}`.padEnd(1, '0') + '.0000',
      iof: `${id}`.padEnd(1, '0') + '.0000'
    },
    taxes: {
      pis: `0.${id}`.padEnd(2, '0'),
      cofins: `${id}`.padEnd(1, '0') + '.0000',
      irrf: `0.${id}`.padEnd(6, '0'),
      iof: `0.${id}`.padEnd(6, '0'),
      additionalIof: `0.${id}`.padEnd(6, '0')
    },
    codes: {
      pis: `${id}`.padEnd(4, '0'),
      cofins: `${id}`.padEnd(4, '0'),
      irrf: `${id}`.padEnd(1, '0'),
      iof: `${id}`.padEnd(4, '0')
    }
  }
});

const buildCompanies = (numberOfCompanies) => {
  const companies = [];

  for (let i = 0; i < numberOfCompanies; i++) {
    companies.push(buildCompany(i + 1));
  }
  return companies;
};

export { buildCompany, buildCompanies };
