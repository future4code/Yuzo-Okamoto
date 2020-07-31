import { createAccount } from './features/createAccount';
import * as TYPES from './types/types';

const main = async () => {
  const command: TYPES.command = {
    feature: process.argv[2],
    params: [],
  };

  if (process.argv.length > 3) {
    command.params = [...process.argv];
    command.params.splice(0, 3);
  }

  switch (command.feature) {
    case 'create-account':
      const fullName = command.params[0];
      const cpf = command.params[1];
      const birthDate = command.params[2];

      try {
        createAccount({ fullName, cpf, birthDate });
      } catch (error) {
        console.log(error.message);
      }
      break;
    default:
      console.log(`Parâmetro inválido (${command.feature})`);
  }
};

main();
