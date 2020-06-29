import { checaPalindromo } from './ex2';

describe('Checa Palíndromo', () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo('mirim');
    expect(ehPalindromo).toEqual(true);
  });

  test("retorna false para 'Bananinha'", () => {
    const ehPalindromo = checaPalindromo('Bananinha');
    expect(ehPalindromo).toEqual(false);
  });

  // A função não transformava a string para lowerCase
  test("retorna true para 'Ana'", () => {
    const ehPalindromo = checaPalindromo('Ana');
    expect(ehPalindromo).toEqual(true);
  });

  // A função não removia os espaços em branco da string
  test("retorna true para 'a base do teto desaba'", () => {
    const ehPalindromo = checaPalindromo('A base do teto desaba');
    expect(ehPalindromo).toEqual(true);
  });
});
