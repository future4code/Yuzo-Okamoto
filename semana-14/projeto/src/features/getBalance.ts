import * as utils from '../utils/utils';
import * as TYPES from '../types/types';

const getBalance = ({ fullName, cpf }: TYPES.getBalanceParams): void => {
  utils.validateFullName(fullName);
  utils.validateCPF(cpf);

  (async (): Promise<void> => {
    try {
      const data = utils.getClients();

      // Itera o array de clientes e pausa quando retornado true
      const checkData = data.clients.every((client) => {
        if (
          client.profile.fullName === fullName &&
          client.profile.cpf === cpf
        ) {
          console.log(`
Titular: ${fullName}
CPF: ${cpf}
Saldo atual: R$ ${client.balance.toFixed(2)}`);
          return true;
        }
      });

      if (!checkData) {
        console.log(
          `Cliente não encontrado. Confira os dados e tente novamente.`
        );
      }
    } catch (error) {
      console.log(`ERRO: ${error.message}`);
    }
  })();
};

export { getBalance };
