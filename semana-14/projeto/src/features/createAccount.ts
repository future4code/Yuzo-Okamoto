import * as fs from 'fs';
import * as moment from 'moment';
import { validate as cpfValidator } from 'gerador-validador-cpf';

import * as TYPES from '../types/types';
import * as utils from '../utils/utils';

moment.locale('pt-br');

const validateFullName = (fullName: string) => {
  const fullNameArray = fullName.split(' ');

  if (fullNameArray.length < 2) {
    throw new Error(`Nome completo inválido: ${fullName}
SOLUÇÃO: "Nome Sobrenome"`);
  }

  const firstName = fullNameArray[0];
  const lastName = fullNameArray.slice(1).join(' ');

  if (firstName.length < 3 || lastName.length < 3) {
    throw new Error(`Sobrenome inválido: ${lastName}
SOLUÇÃO: nome e sobrenome devem ter no mínimo duas letras`);
  }
};

const validateCPF = (cpf: string): void => {
  if (cpf.match(/[- .)(]/g)) {
    throw new Error(`CPF inválido: ${cpf}
SOLUÇÃO: somente números (01234567890)`);
  }

  if (!cpfValidator(cpf)) {
    throw new Error(`CPF inválido: ${cpf}`);
  }

  const data: TYPES.database = utils.getClients();

  data.clients.forEach((client: TYPES.client) => {
    if (cpf === client.profile.cpf) {
      throw new Error(`CPF já cadastrado: ${cpf}`);
    }
  });
};

const validateBirthDate = (birthDate: string): void => {
  const birthday = moment(birthDate, 'DD/MM/YYYY', true);
  const today = moment();

  if (!birthday.isValid()) {
    throw new Error(`Data de nascimento inválida: ${birthDate}
SOLUÇÃO: DD/MM/AAAA`);
  }

  if (!today.subtract(18, 'years').isAfter(birthday)) {
    throw new Error(`Idade mínima de 18 anos para clientes.`);
  }

  if (today.isAfter(birthday.add(150, 'years'))) {
    throw new Error(`Idade máxima de 150 anos para clientes.`);
  }
};

const createAccount = ({ fullName, cpf, birthDate }: TYPES.profile): void => {
  validateFullName(fullName);
  validateCPF(cpf);
  validateBirthDate(birthDate);

  (async (): Promise<void> => {
    try {
      const data: TYPES.database = utils.getClients();

      const newClient: TYPES.client = {
        profile: {
          fullName,
          cpf,
          birthDate,
        },
        balance: 0,
        extract: [],
      };

      data.clients.push(newClient);

      const updatedData = JSON.stringify(data, null, 2);

      fs.writeFileSync('./data/bankDB.json', updatedData);

      console.log('Cliente cadastrado com sucesso.');
    } catch (error) {
      console.log(error.message);
    }
  })();
};

export { createAccount };
