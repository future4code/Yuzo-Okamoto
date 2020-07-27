let minhaString;
let meuNumero;
const johnDoe = {
    nome: 'John Doe',
    idade: 20,
    corFavorita: 'vermelha',
};
const fulano = {
    nome: 'Fulano',
    idade: 17,
    corFavorita: 'azul',
};
const ciclano = {
    nome: 'Ciclano',
    idade: 18,
    corFavorita: 'lilás',
};
const beltrano = {
    nome: 'Beltrano',
    idade: 19,
    corFavorita: 'branca',
};
var CORES;
(function (CORES) {
    CORES["VERMELHO"] = "Vermelho";
    CORES["LARANJA"] = "Laranja";
    CORES["AMARELO"] = "Amarelo";
    CORES["VERDE"] = "Verde";
    CORES["AZUL"] = "Azul";
    CORES["ANIL"] = "Anil";
    CORES["VIOLETA"] = "Violeta";
})(CORES || (CORES = {}));
const jonas = {
    nome: 'Jonas',
    idade: 19,
    corFavorita: CORES.ANIL,
};
console.log(fulano, ciclano, jonas);
//# sourceMappingURL=1.js.map