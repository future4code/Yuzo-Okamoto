export {};
// a) Como fazemos para acessar os parâmetros passados na linha de comando para o node?
// R: Através do process.argv[]

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura: "Olá, (Nome)! Você tem (sua idade) anos."

let name: string = '';
let age: string = '';

name = process.argv[2];
age = process.argv[3];
const newAge = Number(age) + 7;

console.log(
  `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${newAge}.`
);
