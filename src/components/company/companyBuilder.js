const getCompany = (rawCompany) => {
  const { contactName, contactEmail, contactPhone } = rawCompany;
  return {
    id: rawCompany.id,
    businessId: rawCompany.businessId,
    name: rawCompany.name,
    bankInformation: {
      branch: rawCompany.branch,
      account: rawCompany.account,
      agreement: rawCompany.agreement,
      portfolio: rawCompany.portfolio,
      variation: rawCompany.variation,
      interest: rawCompany.interest,
      instruction1: rawCompany.instruction1,
      instruction2: rawCompany.instruction2
    },
    taxInformation: {
      accumulated: {
        pis: rawCompany.accumulatedPis,
        cofins: rawCompany.accumulatedCofins,
        irrf: rawCompany.accumulatedIrrf,
        iof: rawCompany.accumulatedIof
      },
      taxes: {
        pis: rawCompany.taxPis,
        cofins: rawCompany.taxCofins,
        irrf: rawCompany.taxIrrf,
        iof: rawCompany.taxIof,
        additionalIof: rawCompany.taxAdditionalIof
      },
      codes: {
        pis: rawCompany.codePis,
        cofins: rawCompany.codeCofins,
        irrf: rawCompany.codeIrrf,
        iof: rawCompany.codeIof
      }
    },
    address: {
      zipCode: rawCompany.zipCode,
      line1: rawCompany.line1,
      number: rawCompany.number,
      line2: rawCompany.line2,
      suburb: rawCompany.suburb,
      city: rawCompany.city,
      state: rawCompany.state
    },
    contact: {
      name: contactName,
      email: contactEmail,
      phone: contactPhone
    }
  };
};

export { getCompany };
