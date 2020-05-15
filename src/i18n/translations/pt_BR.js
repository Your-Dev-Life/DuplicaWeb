// --------------- General --------------- //
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

const materialTable = {
  'No records to display': 'Nenhum registro encontrado',
  'Add': 'Adicionar',
  'Delete': 'Deletar',
  'Edit': 'Editar',
  'Filter': 'Filtro',
  'Are you sure delete this row?': 'Você realmente deseja deletar esta linha?',
  'Cancel': 'Cancelar',
  'Save': 'Salvar',
  'Drag headers ...': 'Arrastar cabeçalhos ...',
  'Actions': 'Ações',
  'of': 'de',
  'rows': 'linhas',
  'Rows per page:': 'Linhas por página:',
  'First': 'Primeira',
  'Previous': 'Anterior',
  'Next': 'Próxima',
  'Last': 'Última',
  'Add or remove columns': 'Adicionar ou remover colunas',
  'row(s) selected': 'linha(s) selecionada(s)',
  'Show Columns': 'Mostrar Colunas',
  'Export': 'Exportar',
  'Export as CSV': 'Exportar como CSV',
  'Search': 'Pesquisar',
};

const validationMessages = {
  'Username is required': 'Usuário é obrigatório',
  'Password is required': 'Senha é obrigatória',
  'Invalid username and/or password': 'Usuário e/ou senha inválido',
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
  'BusinessId': 'CNPJ',
  'Contract': 'Contrato',
  'Name': 'Nome',
  'Phone': 'Telefone',
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
