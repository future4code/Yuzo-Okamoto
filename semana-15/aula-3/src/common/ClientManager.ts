import { IClient } from './IClient';

export class ClientManager {
  private clients: IClient[] = [];

  getAllClients = (): IClient[] => this.clients;

  getClientsQuantity = (): number => this.clients.length;

  registerClient(client: IClient): void {
    this.clients.push(client);
  }

  calculateBillOfClient(registrationNumber: number): number {
    const foundClient = this.clients.find(
      (client) => client.registrationNumber === registrationNumber
    );

    if (foundClient) {
      return foundClient.calculateBill();
    }

    return 0;
  }

  calculateTotalIncome(): number {
    let totalIncome = 0;
    this.clients.length &&
      this.clients.forEach((client) => {
        totalIncome += client.calculateBill();
      });

    return totalIncome;
  }

  deleteUser(registrationNumber: number): void {
    const updatedClients = this.clients.filter(
      (client) => client.registrationNumber !== registrationNumber
    );

    this.clients = updatedClients;
  }
}
