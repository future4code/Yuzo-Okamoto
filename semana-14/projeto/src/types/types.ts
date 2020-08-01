// Tipagem dos parâmetros enviados via terminal
export type command = {
  feature: string;
  params: string[];
};

// Tipagem dos dados pessoais do cliente
export type profile = {
  fullName: string;
  cpf: string;
  birthDate: string;
};

// Tipagem de cada transação
export type transaction = {
  date: moment.Moment;
  description: 'string';
  value: number;
};

// Tipagem de cada cliente
export type client = {
  profile: profile;
  balance: number;
  extract: transaction[];
};

// Tipagem do banco de dados
export type database = {
  clients?: client[];
};

// Tipagem dos parâmetros ao pegar saldo
export type getBalanceParams = {
  fullName: string;
  cpf: string;
};
