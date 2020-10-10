// --------------- General --------------- //
const menu = {
  Home: 'Início',
  Factory: 'Fábrica',
  Company: 'Empresa',
  Settings: 'Configurações',
  Finances: 'Finanças'
};

const buttons = {
  'Sign in': 'Entrar',
  Logout: 'Sair',
  Profile: 'Perfil',
  Save: 'Salvar',
  Cancel: 'Cancelar',
  Remove: 'Excluir',
  Confirm: 'Confirmar'
};

const materialTable = {
  'No records to display': 'Nenhum registro encontrado',
  Add: 'Adicionar',
  Delete: 'Deletar',
  Edit: 'Editar',
  Filter: 'Filtro',
  'Are you sure delete this row?': 'Você realmente deseja deletar esta linha?',
  Cancel: 'Cancelar',
  Save: 'Salvar',
  'Drag headers ...': 'Arrastar cabeçalhos ...',
  Actions: 'Ações',
  of: 'de',
  rows: 'linhas',
  'Rows per page:': 'Linhas por página:',
  First: 'Primeira',
  Previous: 'Anterior',
  Next: 'Próxima',
  Last: 'Última',
  'Add or remove columns': 'Adicionar ou remover colunas',
  'row(s) selected': 'linha(s) selecionada(s)',
  'Show Columns': 'Mostrar Colunas',
  Export: 'Exportar',
  'Export as CSV': 'Exportar como CSV',
  Search: 'Pesquisar'
};

const address = {
  Address: 'Endereço',
  'Zip Code': 'CEP',
  'Line 1': 'Logradouro',
  Number: 'Numero',
  'Line 2': 'Complemento',
  Suburb: 'Bairro',
  City: 'Cidade',
  State: 'Estado',
  'Zip Code is required': 'CEP é obrigatório',
  'Line 1 is required': 'Logradouro é obrigatório',
  'Number is required': 'Número é obrigatório',
  'Suburb is required': 'Bairro é obrigatório',
  'City is required': 'Cidade é obrigatória',
  'State is required': 'Estado é obrigatório'
};

const contact = {
  Contact: 'Contato',
  'Contact Name': 'Nome',
  'Contact Email': 'Email',
  'Contact Phone': 'Telefone',
  'Contact name is required': 'Nome do contato é obrigatório',
  'Contact email is required': 'Email do contato é obrigatório',
  'Contact phone is required': 'Fone do contato é obrigatório'
};

const bankAccount = {
  'Bank Account': 'Conta bancária',
  Branch: 'Agência',
  Account: 'Conta',
  'Branch is required': 'Agência é obrigatória',
  'Account number is required': 'Conta é obrigatória'
};

const commonFields = {
  'Business Id': 'CNPJ',
  Name: 'Nome'
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
  Username: 'Usuário',
  Password: 'Senha',
  'Login unavailable': 'Login indisponível',
  'Username is required': 'Usuário é obrigatório',
  'Password is required': 'Senha é obrigatória',
  'Invalid username and/or password': 'Usuário e/ou senha inválido'
};

const factory = {
  Contract: 'Contrato',
  'Factory contract is required': 'Contrato da fábrica é obrigatório',
  'Factory businessId is required': 'CNPJ da fábrica é obrigatório',
  'Factory name is required': 'Nome da fábrica é obrigatório',
  "Factory couldn't be saved": 'Não foi possível salvar a fábrica',
  'Factory successfully saved': 'Fábrica salva com sucesso',
  "Factory couldn't be removed": 'Não foi possível excluir a fábrica',
  'Factory successfully removed': 'Fábrica excluída com sucesso',
  'Remove Factory': 'Excluir Fábrica',
  'This factory will be removed, do you wish to continue':
    'Essa fábrica será excluída, você deseja continuar?'
};

const company = {
  Agreement: 'Convênio',
  Portfolio: 'Carteira',
  Variation: 'Variação',
  Interest: 'Juros Mora',
  'Instruction 1': 'Instrução 1',
  'Instruction 2': 'Instrução 2',
  'Accumulated PIS': 'PIS Acumulado',
  'Accumulated COFINS': 'COFINS Acumulado',
  'Accumulated IRRF': 'IRRF Acumulado',
  'Accumulated IOF': 'IOF Acumulado',
  PIS: 'PIS',
  COFINS: 'COFINS',
  IRRF: 'IRRF',
  IOF: 'IOF',
  'Additional IOF': 'IOF Adicional',
  'PIS Code': 'Código PIS',
  'COFINS Code': 'Código COFINS',
  'IRRF Code': 'Código IRRF',
  'IOF Code': 'Código IOF',
  'Company name is required': 'Nome da empresa é obrigatório',
  'Company businessId is required': 'CNPJ da empresa é obrigatório',
  'Company agreement is required': 'Convênio da empresa é obrigatório',
  'Company portfolio is required': 'Carteira da empresa é obrigatória',
  'Company variation is required': 'Variação da empresa é obrigatória',
  'Company interest is required': 'Juros Mora da empresa é obrigatório',
  'Company instruction 1 is required': 'Instrução 1 da empresa é obrigatória',
  'Company instruction 2 is required': 'Instrução 2 da empresa é obrigatória',
  'Accumulated PIS is required': 'PIS Acumulado é obrigatório',
  'Accumulated COFINS is required': 'COFINS Acumulado é obrigatório',
  'Accumulated IRRF is required': 'IRRF Acumulado é obrigatório',
  'Accumulated IOF is required': 'IOF Acumulado é obrigatório',
  'PIS is required': 'PIS é obrigatório',
  'COFINS is required': 'COFINS é obrigatório',
  'IRRF is required': 'IRRF é obrigatório',
  'IOF is required': 'IOF é obrigatório',
  'Additional IOF is required': 'IOF Adicional é obrigatório',
  'PIS code is required': 'Código PIS é obrigatório',
  'COFINS code is required': 'Código COFINS é obrigatório',
  'IRRF code is required': 'Código IRRF é obrigatório',
  'IOF code is required': 'Código IOF é obrigatório',
  "Company couldn't be saved": 'Não foi possível salvar a empresa',
  'Company successfully saved': 'Empresa salva com sucesso',
  "Company couldn't be removed": 'Não foi possível excluir a empresa',
  'Company successfully removed': 'Empresa excluída com sucesso',
  'Remove Company': 'Excluir Empresa',
  'This company will be removed, do you wish to continue':
    'Essa empresa será excluída, você deseja continuar?'
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
