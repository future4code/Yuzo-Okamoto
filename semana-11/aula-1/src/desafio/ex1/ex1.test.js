import { sortArrayNumber } from './ex1';

describe('sortArrayNumber', () => {
  test('input [7, 4, 2, 9]', () => {
    const output = sortArrayNumber([7, 4, 2, 9]);
    expect(output).toEqual([2, 4, 7, 9]);
  });

  test('input [a, b, c, 2, 1, z]', () => {
    const output = sortArrayNumber(['a', 'b', 'c', 2, 1, 'z']);
    expect(output).toEqual(false);
  });

  test('input [9, 21, 55, 12, -19, -55, 999]', () => {
    const output = sortArrayNumber([9, 21, 55, 12, -19, -55, 999]);
    expect(output).toEqual([-55, -19, 9, 12, 21, 55, 999]);
  });

  test('input "Uma string"', () => {
    const output = sortArrayNumber('Uma string');
    expect(output).toEqual(false);
  });
});
