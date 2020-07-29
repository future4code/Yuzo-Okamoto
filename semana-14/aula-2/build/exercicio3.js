"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
let newText = '';
newText = process.argv[2];
if (newText) {
    fs.appendFileSync('./assets/tarefas.txt', '\r\n' + newText);
}
else {
    console.error(`Erro nos parâmetros recebidos: nova tarefa é ${newText}`);
}
//# sourceMappingURL=exercicio3.js.map