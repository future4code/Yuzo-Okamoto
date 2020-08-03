import { validate as cpfValidator } from 'gerador-validador-cpf';

import getClients from './getClients';
import * as TYPES from '../types/types';

const validateCPF = (cpf: string, checkIfCLient?: boolean): void => {
  if (cpf.match(/[- .)(]/g)) {
    throw new Error(`CPF inválido: ${cpf}
SOLUÇÃO: somente números (01234567890)`);
  }

  if (!cpfValidator(cpf)) {
    throw new Error(`CPF inválido: ${cpf}`);
  }

  const data: TYPES.database = getClients();

  checkIfCLient &&
    data.clients.forEach((client: TYPES.client) => {
      if (cpf === client.profile.cpf) {
        throw new Error(`CPF já cadastrado: ${cpf}`);
      }
    });
};

export default validateCPF;
