type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: 'Charmander',
  types: 'Fire',
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: 'Bulbasaur',
  types: 'Grass/Poison',
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: 'Squirtle',
  types: 'Water',
  healthPoints: 35,
};

// (a) tsc 'nome-do-arquivo.ts'

// (b) tsc './src/nome-do-arquivo.ts'

// (c) É possível automatizar o processo de transpilação utilizando o arquivo tsconfig.json

// (d) O tst --init cria um arquivo com configurações es5
