export {};
import * as chalk from 'chalk';
const log = console.log;

// a) Como fazemos para acessar os parâmetros passados na linha de comando para o node?
// R: Através do process.argv[]

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura: "Olá, (Nome)! Você tem (sua idade) anos."

let name: string | undefined = process.argv[2];
let age: number | undefined = Number(process.argv[3]);

function userInfo(name: string | undefined, age: number | undefined): void {
  if (!name) {
    log(chalk.red(`Erro nos parâmetros: Nome inválido (${name}).`));
  }

  if (!age || isNaN(age)) {
    log(chalk.red(`Erro nos parâmetros: Idade inválida (${age}).`));
  }

  if (name && age) {
    const newAge = Number(age) + 7;

    log(
      chalk.green(
        `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${newAge}.`
      )
    );
  }
}

userInfo(name, age);
