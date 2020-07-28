// ==========================
// (a)
// ==========================
let minhaString: string;

// minhaString = 15
// Ocorre um erro informando que o número 15 não pode ser atribuído à variável minhaString
//

// ==========================
// (b)
// ==========================
let meuNumero: number;

// let meuNumero: number | string
// Utilizando o pipe podemos atribuir dois ou mais formatos

// ==========================
// (c)
// ==========================
const johnDoe: { nome: string; idade: number; corFavorita: string } = {
  nome: 'John Doe',
  idade: 20,
  corFavorita: 'vermelha',
};

// ==========================
// (d)
// ==========================
type pessoa = {
  nome: string;
  idade: number;
  corFavorita: string;
};

const fulano: pessoa = {
  nome: 'Fulano',
  idade: 17,
  corFavorita: 'azul',
};

const ciclano: pessoa = {
  nome: 'Ciclano',
  idade: 18,
  corFavorita: 'lilás',
};

const beltrano: pessoa = {
  nome: 'Beltrano',
  idade: 19,
  corFavorita: 'branca',
};

// ==========================
// (e)
// ==========================
enum CORES {
  VERMELHO = 'Vermelho',
  LARANJA = 'Laranja',
  AMARELO = 'Amarelo',
  VERDE = 'Verde',
  AZUL = 'Azul',
  ANIL = 'Anil',
  VIOLETA = 'Violeta',
}

type pessoaEnum = {
  nome: string;
  idade: number;
  corFavorita: CORES;
};

const jonas: pessoaEnum = {
  nome: 'Jonas',
  idade: 19,
  corFavorita: CORES.ANIL,
};

console.log(fulano, ciclano, jonas);
