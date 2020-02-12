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

const validationMessages = {
  'Username is required': 'Username is required',
  'Password is required': 'Password is required',
};

export default {
  translation: {
    ...menu,
    ...buttons,
    ...fields,
    ...validationMessages,
  }
};
