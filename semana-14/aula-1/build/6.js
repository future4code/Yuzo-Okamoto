var ERA;
(function (ERA) {
    ERA["PREHISTORIA"] = "Pr\u00E9-Hist\u00F3ria";
    ERA["IDADEANTIGA"] = "Idade Antiga";
    ERA["IDADEMEDIA"] = "Idade M\u00E9dia";
    ERA["IDADEMODERNA"] = "Idade Moderna";
    ERA["IDADECONTEMPORANEA"] = "Idade Contempor\u00E2nea";
})(ERA || (ERA = {}));
var ERRO;
(function (ERRO) {
    ERRO["SIGLA"] = "Sigla inv\u00E1lida, informe AC (Antes de Cristo) ou DC (Depois de Cristo).";
    ERRO["ANOZERO"] = "N\u00E3o existe ano 0 no calend\u00E1rio gregoriano.";
    ERRO["ANOINTEIRO"] = "O ano deve ser um n\u00FAmero inteiro.";
})(ERRO || (ERRO = {}));
function checaEra(ano, sigla = 'DC') {
    if (sigla !== 'AC' && sigla !== 'DC') {
        return ERRO.SIGLA;
    }
    if (ano === 0) {
        return ERRO.ANOZERO;
    }
    if (!Number.isInteger(ano)) {
        return ERRO.ANOINTEIRO;
    }
    switch (sigla) {
        case 'AC':
            if (ano > 4000) {
                return ERA.PREHISTORIA;
            }
            else {
                return ERA.IDADEANTIGA;
            }
        default:
            if (ano < 476) {
                return ERA.IDADEANTIGA;
            }
            else if (ano < 1453) {
                return ERA.IDADEMEDIA;
            }
            else if (ano < 1789) {
                return ERA.IDADEMODERNA;
            }
            else {
                return ERA.IDADECONTEMPORANEA;
            }
    }
}
console.log(checaEra(1788));
console.log(checaEra(1788, 'AC'));
console.log(checaEra(1789));
console.log(checaEra(0));
//# sourceMappingURL=6.js.map