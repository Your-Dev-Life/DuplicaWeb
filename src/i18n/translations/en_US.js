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
};

const fields = {
  'Login': 'Login',
  'Username': 'Username',
  'Password': 'Password',
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

const validationMessages = {
  'Username is required': 'Username is required',
  'Password is required': 'Password is required',
  'Invalid username and/or password': 'Invalid username and/or password',
};

const general = {
  ...menu,
  ...buttons,
  ...fields,
  ...materialTable,
  ...validationMessages,
};

// --------------- Pages --------------- //
const factory = {
  'BusinessId': 'ENI',
  'Contract': 'Contract',
  'Name': 'Name',
  'Phone': 'Phone',
};

const pages = {
  ...factory,
};

export default {
  translation: {
    ...general,
    ...pages,
  }
};
