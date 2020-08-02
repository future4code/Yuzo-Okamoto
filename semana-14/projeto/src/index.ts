import { createAccount } from './features/createAccount';
import { getBalance } from './features/getBalance';

import * as TYPES from './types/types';

import * as readline from 'readline';

const main = async () => {
  // Estruturação inicial do command
  const command: TYPES.command = {
    feature: process.argv[2],
    params: [...process.argv],
  };

  // Remoção dos parâmetros [0], [1] e [2] de command.params
  if (process.argv.length > 3) {
    command.params.splice(0, 3);
  }

  switch (command.feature) {
    case 'create-account':
      // Validação dos parâmetros do comando
      if (!command.params[0] || !command.params[1] || !command.params[2]) {
        console.log(`ERRO: "create-account" recebe três parâmetros.
SOLUÇÃO: create-account "Nome completo" "cpf somente números" "data de nascimento no formato DD/MM/AAAA"`);
        break;
      }

      try {
        // Cadastra um novo cliente
        createAccount({
          fullName: command.params[0],
          cpf: command.params[1],
          birthDate: command.params[2],
        });
      } catch (error) {
        console.log(`ERRO: ${error.message}`);
      }
      break;

    case 'get-balance':
      // Validação dos parâmetros do comando
      if (!command.params[0] || !command.params[1]) {
        console.log(`ERRO: "get-balance" recebe dois parâmetros.
SOLUÇÃO: get-balance "Nome completo" "cpf somente números"`);
        break;
      }

      try {
        // Pega saldo
        getBalance({
          fullName: command.params[0],
          cpf: command.params[1],
        });
      } catch (error) {
        console.log(`ERRO: ${error.message}`);
      }
      break;

    default:
      console.log(`ERRO: comando "${command.feature}" não encontrado.
SOLUÇÃO: "create-account"`);
  }
};

main();
