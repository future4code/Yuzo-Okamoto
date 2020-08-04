import * as fs from 'fs';
import * as moment from 'moment';

import * as TYPES from '../types/types';
import * as utils from '../utils/';

moment.locale('pt-br');

const createAccount = ({ fullName, cpf, birthDate }: TYPES.profile): void => {
  utils.validateFullName(fullName);
  utils.validateCPF(cpf, true);
  utils.validateBirthDate(birthDate);

  // Função assíncrona imediatamente chamada
  (async (): Promise<void> => {
    try {
      const data: TYPES.database = utils.getClients();

      // Objeto Cliente que será adicionado à database
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
