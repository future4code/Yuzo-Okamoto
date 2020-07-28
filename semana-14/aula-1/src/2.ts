// =========================
// (a) (b)
// =========================
type dados = {
  maior: number;
  menor: number;
  media: number;
};

function obterEstatisticas(numeros: number[]): dados {
  const numerosOrdenados = numeros.sort((a, b) => a - b);

  let soma = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

// =========================
// (c) Não consegui resolver
// =========================
type amostra = {
  numeros: number[];
  obterEstatisticas: (numeros: number[]) => dados;
};

const amostraDeIdades: amostra = {
  numeros: [21, 18, 65, 44, 15, 18],
  obterEstatisticas: (numeros) => obterEstatisticas(numeros),
};
