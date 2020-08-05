import {
  ResidencialClient,
  CommercialClient,
  IndustrialClient,
  ClientManager,
} from './common';

const clientManager = new ClientManager();

const fulano = new ResidencialClient('cpf1', 'Fulano', 1, 30, 2, 'cep1');
clientManager.registerClient(fulano);

const ciclano = new CommercialClient('cnpj1', 'Ciclano', 2, 70, 1, 'cep2');
clientManager.registerClient(ciclano);

const beltrano = new IndustrialClient('reg1', 'Beltrano', 3, 200, 5, 'cep3');
clientManager.registerClient(beltrano);

console.log(clientManager.getAllClients());

console.log(clientManager.getClientsQuantity());
console.log(clientManager.calculateTotalIncome());
