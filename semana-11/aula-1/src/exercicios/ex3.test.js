import { checaItensDuplicados } from './ex3';

describe('Checa itens duplicados', () => {
  test('retorna false para [0]', () => {
    const resultado = checaItensDuplicados([0]);
    expect(resultado).toEqual(false);
  });

  test('retorna true para [1, 5, 9, 3, 9]', () => {
    const resultado = checaItensDuplicados([1, 5, 9, 3, 9]);
    expect(resultado).toEqual(true);
  });

  test('retorna true para [-5, 12, 0, 29, -5]', () => {
    const resultado = checaItensDuplicados([-5, 12, 0, 29, -5]);
    expect(resultado).toEqual(true);
  });

  test('retorna false para []', () => {
    const resultado = checaItensDuplicados([]);
    expect(resultado).toEqual(false);
  });

  test('retorna false para [1.2, 1.7, 1.3]', () => {
    const resultado = checaItensDuplicados([1.2, 1.7, 1.3]);
    expect(resultado).toEqual(false);
  });

  test("retorna false para ['a', 'b', 'c]", () => {
    const resultado = checaItensDuplicados(['a', 'b', 'c']);
    expect(resultado).toEqual(false);
  });

  test("retorna true para ['a', 'b', 'b]", () => {
    const resultado = checaItensDuplicados(['a', 'b', 'b']);
    expect(resultado).toEqual(true);
  });

  test("retorna true para ['', '']", () => {
    const resultado = checaItensDuplicados(['', '']);
    expect(resultado).toEqual(true);
  });

  // A função não diferenciava string de número
  test("retorna true para ['1', 1, 3, 5, 'a', 'b']", () => {
    const resultado = checaItensDuplicados(['1', 1, 3, 5, 'a', 'b']);
    expect(resultado).toEqual(false);
  });
});
