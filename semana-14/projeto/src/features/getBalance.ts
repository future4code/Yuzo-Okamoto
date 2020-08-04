import * as utils from '../utils';
import * as TYPES from '../types/types';

const getBalance = ({ fullName, cpf }: TYPES.getBalanceParams): void => {
  utils.validateFullName(fullName);
  utils.validateCPF(cpf);

  // Função assíncrona imediatamente chamada
  (async (): Promise<void> => {
    try {
      const data = utils.getClients();

      // Itera o array de clientes enquanto não é retornado TRUE
      const checkedData = data.clients.every((client) => {
        // Cliente iterado da database
        const iteratedFullName = client.profile.fullName;
        const iteratedCPF = client.profile.cpf;

        if (fullName === iteratedFullName && cpf === iteratedCPF) {
          console.log(`
Titular: ${fullName}
CPF: ${cpf}
Saldo atual: R$ ${client.balance.toFixed(2)}`);

          // Ao retornar TRUE, finaliza a iteração
          return true;
        }
      });

      if (!checkedData) {
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
