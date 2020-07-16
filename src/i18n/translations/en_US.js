// --------------- General --------------- //
const menu = {
  'Home': 'Home',
  'Factory': 'Factory',
  'Settings': 'Settings',
  'Finances': 'Finances',
};

const buttons = {
  'Sign in': 'Sign in',
  'Logout': 'Logout',
  'Profile': 'Profile',
  'Save': 'Save',
  'Cancel': 'Cancel',
  'Remove': 'Remove',
  'Confirm': 'Confirm',
};

const materialTable = {
  'No records to display': 'No records to display',
  'Add': 'Add',
  'Delete': 'Delete',
  'Edit': 'Edit',
  'Filter': 'Filter',
  'Are you sure delete this row?': 'Are you sure delete this row?',
  'Cancel': 'Cancel',
  'Save': 'Save',
  'Drag headers ...': 'Drag headers ...',
  'Actions': 'Actions',
  'of': 'of',
  'rows': 'rows',
  'Rows per page:': 'Rows per page:',
  'First': 'First',
  'Previous': 'Previous',
  'Next': 'Next',
  'Last': 'Last',
  'Add or remove columns': 'Add or remove columns',
  'row(s) selected': 'row(s) selected',
  'Show Columns': 'Show Columns',
  'Export': 'Export',
  'Export as CSV': 'Export as CSV',
  'Search': 'Search',
};

const address = {
  'Address': 'Address',
  'Zip Code': 'Zip Code',
  'Line 1': 'Line 1',
  'Number': 'Number',
  'Line 2': 'Line 2',
  'Suburb': 'Suburb',
  'City': 'City',
  'State': 'State',
  'Zip Code is required': 'Zip Code is required',
  'Line 1 is required': 'Line 1 is required',
  'Number is required': 'Number is required',
  'Suburb is required': 'Suburb is required',
  'City is required': 'City is required',
  'State is required': 'State is required',
};

const contact = {
  'Contact': 'Contact',
  'Contact Name': 'Name',
  'Contact Email': 'Email',
  'Contact Phone': 'Phone',
  'Contact name is required': 'Contact name is required',
  'Contact Email is required': 'Contact email is required',
  'Contact Phone is required': 'Contact phone is required',
};

const commonComponents = {
  ...address,
  ...contact,
};

const validationMessages = {
  'Username is required': 'Username is required',
  'Password is required': 'Password is required',
  'Invalid username and/or password': 'Invalid username and/or password',
};

const general = {
  ...menu,
  ...buttons,
  ...materialTable,
  ...commonComponents,
  ...validationMessages,
};

// --------------- Pages --------------- //
const login = {
  'Login': 'Login',
  'Username': 'Username',
  'Password': 'Password',
  'Login unavailable': 'Login unavailable',
};

const factory = {
  'Business Id': 'ENI',
  'Contract': 'Contract',
  'Name': 'Name',
  'Factory contract is required': 'Factory contract is required',
  'Factory businessId is required': 'Factory businessId is required',
  'Factory name is required': 'Factory name is required',
  "Factory couldn't be saved": "Factory couldn't be saved",
  'Factory successfully saved': 'Factory successfully saved',
  "Factory couldn't be removed": "Factory couldn't be removed",
  'Factory successfully removed': 'Factory successfully removed',
  'Remove Factory': 'Remove Factory',
  'This factory will be removed, do you wish to continue': 'This factory will be removed, do you wish to continue?',
};

const pages = {
  ...login,
  ...factory,
};

export default {
  translation: {
    ...general,
    ...pages,
  }
};
