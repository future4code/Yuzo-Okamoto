import { createAccount } from './features/createAccount';
import * as TYPES from './types/types';

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
      const fullName = command.params[0];
      const cpf = command.params[1];
      const birthDate = command.params[2];

      // Caso não sejam enviados os 3 parâmetros obrigatórios
      if (!fullName || !cpf || !birthDate) {
        console.log(`ERRO: "create-account" recebe três parâmetros:
SOLUÇÃO: create-account "Nome completo" "cpf somente números" "data de nascimento no formato DD/MM/AAAA"`);
        break;
      }

      try {
        // Cadastra um novo cliente
        createAccount({ fullName, cpf, birthDate });
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
