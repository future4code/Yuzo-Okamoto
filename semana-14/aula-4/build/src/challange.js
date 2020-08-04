"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const fileData = fs.readFile('../api/api.ts', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Arquivo lido com sucesso: ', data);
    }
});
console.log(fileData);
//# sourceMappingURL=challange.js.map