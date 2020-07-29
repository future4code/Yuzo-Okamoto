"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const log = console.log;
const operation = process.argv[2];
const firstNum = Number(process.argv[3]);
const secondNum = Number(process.argv[4]);
let result = 0;
const operationValidator = ['add', 'sub', 'mult', 'div'];
function calcOperation(operation, firstNum, secondNum) {
    if (operationValidator.indexOf(operation) < 0) {
        log(chalk.red(`Erro de parâmetro[2]: Operação inválida (${operation})`));
        log(chalk.red(`Operações válidas: add sub mult div\n`));
    }
    if (!firstNum || isNaN(firstNum)) {
        log(chalk.red(`Erro de parâmetro[3]: Primeiro Número Inválido (${firstNum})\n`));
    }
    if (!secondNum || isNaN(secondNum)) {
        log(chalk.red(`Erro de parâmetro[4]: Segundo Número Inválido (${secondNum})\n`));
    }
    if (operation && firstNum && secondNum) {
        switch (operation) {
            case 'add':
                result = firstNum + secondNum;
                break;
            case 'sub':
                result = firstNum - secondNum;
                break;
            case 'mult':
                result = firstNum * secondNum;
                break;
            case 'div':
                result = firstNum / secondNum;
                break;
            default:
                break;
        }
        log(chalk.green(`Resposta: ${result}`));
    }
}
calcOperation(operation, firstNum, secondNum);
//# sourceMappingURL=index.js.map