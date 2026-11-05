const test = require('node:test');
const assert = require('node:assert');
const { transpuesta, formatearMatriz } = require('../src/problema3');

test('matriz 3x3 (ejemplo del enunciado)', () => {
  assert.deepStrictEqual(
    transpuesta([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
    [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]
  );
});

test('matriz no cuadrada 2x3 da 3x2', () => {
  assert.deepStrictEqual(
    transpuesta([
      [1, 2, 3],
      [4, 5, 6],
    ]),
    [
      [1, 4],
      [2, 5],
      [3, 6],
    ]
  );
});

test('vector fila se vuelve vector columna', () => {
  assert.deepStrictEqual(transpuesta([[1, 2, 3]]), [[1], [2], [3]]);
});

test('matriz vacia', () => {
  assert.deepStrictEqual(transpuesta([]), []);
});

test('transponer dos veces devuelve la matriz original', () => {
  const X = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  assert.deepStrictEqual(transpuesta(transpuesta(X)), X);
});

test('no modifica la matriz original', () => {
  const X = [
    [1, 2],
    [3, 4],
  ];
  transpuesta(X);
  assert.deepStrictEqual(X, [
    [1, 2],
    [3, 4],
  ]);
});

test('formato de salida como lista de listas', () => {
  assert.strictEqual(
    formatearMatriz(
      transpuesta([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ),
    '[[1, 4, 7], [2, 5, 8], [3, 6, 9]]'
  );
});
