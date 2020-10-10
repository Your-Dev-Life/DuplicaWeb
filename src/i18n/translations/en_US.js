// --------------- General --------------- //
const menu = {
  Home: 'Home',
  Factory: 'Factory',
  Company: 'Company',
  Settings: 'Settings',
  Finances: 'Finances'
};

const buttons = {
  'Sign in': 'Sign in',
  Logout: 'Logout',
  Profile: 'Profile',
  Save: 'Save',
  Cancel: 'Cancel',
  Remove: 'Remove',
  Confirm: 'Confirm'
};

const materialTable = {
  'No records to display': 'No records to display',
  Add: 'Add',
  Delete: 'Delete',
  Edit: 'Edit',
  Filter: 'Filter',
  'Are you sure delete this row?': 'Are you sure delete this row?',
  Cancel: 'Cancel',
  Save: 'Save',
  'Drag headers ...': 'Drag headers ...',
  Actions: 'Actions',
  of: 'of',
  rows: 'rows',
  'Rows per page:': 'Rows per page:',
  First: 'First',
  Previous: 'Previous',
  Next: 'Next',
  Last: 'Last',
  'Add or remove columns': 'Add or remove columns',
  'row(s) selected': 'row(s) selected',
  'Show Columns': 'Show Columns',
  Export: 'Export',
  'Export as CSV': 'Export as CSV',
  Search: 'Search'
};

const address = {
  Address: 'Address',
  'Zip Code': 'Zip Code',
  'Line 1': 'Line 1',
  Number: 'Number',
  'Line 2': 'Line 2',
  Suburb: 'Suburb',
  City: 'City',
  State: 'State',
  'Zip Code is required': 'Zip Code is required',
  'Line 1 is required': 'Line 1 is required',
  'Number is required': 'Number is required',
  'Suburb is required': 'Suburb is required',
  'City is required': 'City is required',
  'State is required': 'State is required'
};

const contact = {
  Contact: 'Contact',
  'Contact Name': 'Name',
  'Contact Email': 'Email',
  'Contact Phone': 'Phone',
  'Contact name is required': 'Contact name is required',
  'Contact Email is required': 'Contact email is required',
  'Contact Phone is required': 'Contact phone is required'
};

const bankAccount = {
  'Bank Account': 'Bank Account',
  Branch: 'Branch',
  Account: 'Account',
  'Branch is required': 'Branch is required',
  'Account number is required': 'Account number is required'
};

const commonFields = {
  'Business Id': 'ENI',
  Name: 'Name'
};

const commonComponents = {
  ...address,
  ...contact,
  ...bankAccount,
  ...commonFields
};

const general = {
  ...menu,
  ...buttons,
  ...materialTable,
  ...commonComponents
};

// --------------- Pages --------------- //
const login = {
  Login: 'Login',
  Username: 'Username',
  Password: 'Password',
  'Login unavailable': 'Login unavailable',
  'Username is required': 'Username is required',
  'Password is required': 'Password is required',
  'Invalid username and/or password': 'Invalid username and/or password'
};

const factory = {
  Contract: 'Contract',
  'Factory contract is required': 'Factory contract is required',
  'Factory businessId is required': 'Factory businessId is required',
  'Factory name is required': 'Factory name is required',
  "Factory couldn't be saved": "Factory couldn't be saved",
  'Factory successfully saved': 'Factory successfully saved',
  "Factory couldn't be removed": "Factory couldn't be removed",
  'Factory successfully removed': 'Factory successfully removed',
  'Remove Factory': 'Remove Factory',
  'This factory will be removed, do you wish to continue':
    'This factory will be removed, do you wish to continue?'
};

const company = {
  Branch: 'Branch',
  Account: 'Account',
  Agreement: 'Agreement',
  Portfolio: 'Portfolio',
  Variation: 'Variation',
  Interest: 'Interest',
  'Instruction 1': 'Instruction 1',
  'Instruction 2': 'Instruction 2',
  'Accumulated PIS': 'Accumulated PIS',
  'Accumulated COFINS': 'Accumulated COFINS',
  'Accumulated IRRF': 'Accumulated IRRF',
  'Accumulated IOF': 'Accumulated IOF',
  PIS: 'PIS',
  COFINS: 'COFINS',
  IRRF: 'IRRF',
  IOF: 'IOF',
  'Additional IOF': 'Additional IOF',
  'PIS Code': 'PIS Code',
  'COFINS Code': 'COFINS Code',
  'IRRF Code': 'IRRF Code',
  'IOF Code': 'IOF Code',
  'Company name is required': 'Company name is required',
  'Company businessId is required': 'Company businessId is required',
  'Company agreement is required': 'Company agreement is required',
  'Company portfolio is required': 'Company portfolio is required',
  'Company variation is required': 'Company variation is required',
  'Company interest is required': 'Company interest is required',
  'Company instruction 1 is required': 'Company instruction 1 is required',
  'Company instruction 2 is required': 'Company instruction 2 is required',
  'Accumulated PIS is required': 'Accumulated PIS is required',
  'Accumulated COFINS is required': 'Accumulated COFINS is required',
  'Accumulated IRRF is required': 'Accumulated IRRF is required',
  'Accumulated IOF is required': 'Accumulated IOF is required',
  'PIS is required': 'PIS is required',
  'COFINS is required': 'COFINS is required',
  'IRRF is required': 'IRRF is required',
  'IOF is required': 'IOF is required',
  'Additional IOF is required': 'Additional IOF is required',
  'PIS code is required': 'PIS code is required',
  'COFINS code is required': 'COFINS code is required',
  'IRRF code is required': 'IRRF code is required',
  'IOF code is required': 'IOF code is required',
  "Company couldn't be saved": "Company couldn't be saved",
  'Company successfully saved': 'Empresa salva com sucesso',
  "Company couldn't be removed": "Company couldn't be removed",
  'Company successfully removed': 'Company successfully removed',
  'Remove Company': 'Remove Company',
  'This company will be removed, do you wish to continue':
    'This company will be removed, do you wish to continue?'
};

const pages = {
  ...login,
  ...factory,
  ...company
};

export default {
  translation: {
    ...general,
    ...pages
  }
};
