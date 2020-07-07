import { pascalCase } from './ex2';

describe('Style string with Pascal Case', () => {
  test('input "um dois três"', () => {
    const result = pascalCase('um dois três');

    expect(result).toEqual('Um Dois Três');
  });

  test('input ["Oi seu pai tem boi?"]', () => {
    const result = pascalCase(['Oi seu pai tem boi?']);

    expect(result).toEqual(false);
  });

  test('input ""', () => {
    const result = pascalCase('');

    expect(result).toEqual(false);
  });

  test('input "banana, bananinha, bananão, ha ha ha"', () => {
    const result = pascalCase('banana, bananinha, bananão, ha ha ha');

    expect(result).toEqual('Banana, Bananinha, Bananão, Ha Ha Ha');
  });

  test('input "beija-flor papa-léguas"', () => {
    const result = pascalCase('beija-flor papa-léguas');

    expect(result).toEqual('Beija-flor Papa-léguas');
  });
});
