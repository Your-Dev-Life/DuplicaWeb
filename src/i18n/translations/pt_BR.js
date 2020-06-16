// --------------- General --------------- //
const menu = {
  'Home': 'Início',
  'Factory': 'Fábrica',
  'Settings': 'Configurações',
  'Finances': 'Finanças',
};

const buttons = {
  'Sign in': 'Entrar',
  'Logout': 'Sair',
  'Profile': 'Perfil',
  'Save': 'Salvar',
  'Cancel': 'Cancelar',
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

const address = {
  'Address': 'Endereço',
  'Zip Code': 'CEP',
  'Line 1': 'Logradouro',
  'Number': 'Numero',
  'Line 2': 'Complemento',
  'Suburb': 'Bairro',
  'City': 'Cidade',
  'State': 'Estado',
  'Zip Code is required': 'CEP é obrigatório',
  'Line 1 is required': 'Logradouro é obrigatório',
  'Number is required': 'Número é obrigatório',
  'Suburb is required': 'Bairro é obrigatório',
  'City is required': 'Cidade é obrigatória',
  'State is required': 'Estado é obrigatório',
};

const contact = {
  'Contact': 'Contato',
  'Contact Name': 'Nome',
  'Contact Email': 'Email',
  'Contact Phone': 'Fone',
  'Contact name is required': 'Nome do contato é obrigatório',
  'Contact email is required': 'Email do contato é obrigatório',
  'Contact phone is required': 'Fone do contato é obrigatório',
};

const commonComponents = {
  ...address,
  ...contact,
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
  ...commonComponents,
  ...validationMessages,
};

// --------------- Pages --------------- //
const factory = {
  'Business Id': 'CNPJ',
  'Contract': 'Contrato',
  'Factory Name': 'Nome',
  'Factory contract is required': 'Contrato da fábrica é obrigatório',
  'Factory businessId is required': 'CNPJ da fábrica é obrigatório',
  'Factory name is required': 'Nome da fábrica é obrigatório',
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
