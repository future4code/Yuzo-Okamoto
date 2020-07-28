import * as fs from 'fs';

let newText: string = '';

newText = process.argv[2];

if (newText) {
  fs.appendFileSync('./assets/tarefas.txt', '\r\n' + newText);
} else {
  console.error(`Erro nos parâmetros recebidos: nova tarefa é ${newText}`);
}
