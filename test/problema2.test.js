const test = require('node:test');
const assert = require('node:assert');
const { ordenarPorKey, formatearLista } = require('../src/problema2');

const telefonos = [
  { make: 'Nokia', model: 216, color: 'Black' },
  { make: 'Mi Max', model: 2, color: 'Gold' },
  { make: 'Samsung', model: 7, color: 'Blue' },
];

test('ordena por model (ejemplo del enunciado)', () => {
  assert.deepStrictEqual(ordenarPorKey(telefonos, 'model'), [
    { make: 'Mi Max', model: 2, color: 'Gold' },
    { make: 'Samsung', model: 7, color: 'Blue' },
    { make: 'Nokia', model: 216, color: 'Black' },
  ]);
});

test('ordena por make (texto)', () => {
  assert.deepStrictEqual(
    ordenarPorKey(telefonos, 'make').map((d) => d.make),
    ['Mi Max', 'Nokia', 'Samsung']
  );
});

test('no modifica la lista original', () => {
  const copia = structuredClone(telefonos);
  ordenarPorKey(telefonos, 'model');
  assert.deepStrictEqual(telefonos, copia);
});

test('lista vacia', () => {
  assert.deepStrictEqual(ordenarPorKey([], 'model'), []);
});

test('formato de salida igual al del enunciado', () => {
  assert.strictEqual(
    formatearLista(ordenarPorKey(telefonos, 'model')),
    "[\n" +
      "    {'make': 'Mi Max', 'model': 2, 'color': 'Gold'},\n" +
      "    {'make': 'Samsung', 'model': 7, 'color': 'Blue'},\n" +
      "    {'make': 'Nokia', 'model': 216, 'color': 'Black'}\n" +
      "]"
  );
});
