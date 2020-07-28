enum ERA {
  PREHISTORIA = 'Pré-História',
  IDADEANTIGA = 'Idade Antiga',
  IDADEMEDIA = 'Idade Média',
  IDADEMODERNA = 'Idade Moderna',
  IDADECONTEMPORANEA = 'Idade Contemporânea',
}

enum ERRO {
  SIGLA = 'Sigla inválida, informe AC (Antes de Cristo) ou DC (Depois de Cristo).',
  ANOZERO = 'Não existe ano 0 no calendário gregoriano.',
  ANOINTEIRO = 'O ano deve ser um número inteiro.',
}

function checaEra(ano: number, sigla: string = 'DC'): ERA | ERRO {
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
      } else {
        return ERA.IDADEANTIGA;
      }

    default:
      if (ano < 476) {
        return ERA.IDADEANTIGA;
      } else if (ano < 1453) {
        return ERA.IDADEMEDIA;
      } else if (ano < 1789) {
        return ERA.IDADEMODERNA;
      } else {
        return ERA.IDADECONTEMPORANEA;
      }
  }
}

console.log(checaEra(1788));
console.log(checaEra(1788, 'AC'));
console.log(checaEra(1789));
console.log(checaEra(0));
// console.log(checaEra('200')) O Erro é acusado na transpilação
