const menu = {
  "Home": "Início",
  'Factory': 'Fábrica',
  'Settings': 'Configurações',
  'Finances': 'Finanças',
};

const buttons = {
  'Sign in': 'Entrar',
  'Logout': 'Sair',
  'Profile': 'Perfil',
};

const fields = {
  'Login': 'Login',
  'Username': 'Usuário',
  'Password': 'Senha',
};

const validationMessages = {
  'Username is required': 'Usuário é obrigatório',
  'Password is required': 'Senha é obrigatória',
  'Invalid username and/or password': 'Usuário e/ou senha inválido',
};

export default {
  translation: {
    ...menu,
    ...buttons,
    ...fields,
    ...validationMessages,
  }
};
