"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const log = console.log;
let name = process.argv[2];
let age = Number(process.argv[3]);
function userInfo(name, age) {
    if (!name) {
        log(chalk.red(`Erro nos parâmetros: Nome inválido (${name}).`));
    }
    if (!age || isNaN(age)) {
        log(chalk.red(`Erro nos parâmetros: Idade inválida (${age}).`));
    }
    if (name && age) {
        const newAge = Number(age) + 7;
        log(chalk.green(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${newAge}.`));
    }
}
userInfo(name, age);
//# sourceMappingURL=index.js.map