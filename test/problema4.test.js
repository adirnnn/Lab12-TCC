const test = require('node:test');
const assert = require('node:assert');
const { eliminar, formatearLista } = require('../src/problema4');

const colores = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];

test('ejemplo del enunciado (cafe se ignora)', () => {
  assert.deepStrictEqual(eliminar(colores, ['amarillo', 'cafe', 'blanco']), [
    'rojo',
    'verde',
    'azul',
    'gris',
    'negro',
  ]);
});

test('lista a borrar vacia devuelve la misma lista', () => {
  assert.deepStrictEqual(eliminar(colores, []), colores);
});

test('ningun elemento a borrar existe en la lista', () => {
  assert.deepStrictEqual(eliminar(colores, ['cafe', 'morado']), colores);
});

test('borrar todos los elementos da lista vacia', () => {
  assert.deepStrictEqual(eliminar(colores, colores), []);
});

test('se eliminan todas las apariciones de un elemento repetido', () => {
  assert.deepStrictEqual(eliminar(['rojo', 'azul', 'rojo'], ['rojo']), ['azul']);
});

test('no modifica la lista original', () => {
  const copia = [...colores];
  eliminar(colores, ['rojo']);
  assert.deepStrictEqual(colores, copia);
});

test('formato de salida igual al del enunciado', () => {
  assert.strictEqual(
    formatearLista(eliminar(colores, ['amarillo', 'cafe', 'blanco'])),
    "['rojo', 'verde', 'azul', 'gris', 'negro']"
  );
});
