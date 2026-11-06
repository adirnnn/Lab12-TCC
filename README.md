# Laboratorio 12 - Teoría de la Computación

Programación funcional y cálculo lambda. Los programas están escritos en **JavaScript (Node.js)** usando funciones lambda (arrow functions) y funciones de orden superior como `map`, `filter` y `toSorted`.

## Video

Video de la ejecución: 

## Estructura

```
problema1/lab12prob1.pdf   Respuestas teóricas del Problema 1
src/problema2.js           Ordenar lista de diccionarios por un key
src/problema3.js           Matriz transpuesta
src/problema4.js           Eliminar elementos de una lista
test/                      Pruebas de los problemas 2, 3 y 4
```

## Requisitos

- Node.js 20 o más reciente (no se necesita instalar dependencias).

## Ejecución

Problema 2 (por defecto ordena por `model`, se puede indicar otro key):

```bash
node src/problema2.js
node src/problema2.js make
```

Problema 3:

```bash
node src/problema3.js
```

Problema 4:

```bash
node src/problema4.js
```

Pruebas:

```bash
npm test
```

## Problemas

### Problema 1

Reducción-β de NOT, recursión y ciclos en cálculo lambda, y cuándo conviene usar programación funcional. Las respuestas están en [`problema1/lab12prob1.pdf`](problema1/lab12prob1.pdf).

### Problema 2

```js
const ordenarPorKey = (lista, key) => lista.toSorted((a, b) => comparar(a[key], b[key]));
```

Entrada: `[{'make': 'Nokia', 'model': 216, 'color': 'Black'}, {'make': 'Mi Max', 'model': 2, 'color': 'Gold'}, {'make': 'Samsung', 'model': 7, 'color': 'Blue'}]`, key = `'model'`

Salida: `[{'make': 'Mi Max', 'model': 2, 'color': 'Gold'}, {'make': 'Samsung', 'model': 7, 'color': 'Blue'}, {'make': 'Nokia', 'model': 216, 'color': 'Black'}]`

### Problema 3

```js
const transpuesta = (m) => (m.length === 0 ? [] : m[0].map((_, j) => m.map((fila) => fila[j])));
```

Entrada: `[[1, 2, 3], [4, 5, 6], [7, 8, 9]]`

Salida: `[[1, 4, 7], [2, 5, 8], [3, 6, 9]]`

### Problema 4

```js
const eliminar = (lista, aBorrar) => lista.filter((x) => !aBorrar.includes(x));
```

Entrada: `['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro']`, a borrar: `['amarillo', 'cafe', 'blanco']`

Salida: `['rojo', 'verde', 'azul', 'gris', 'negro']`
