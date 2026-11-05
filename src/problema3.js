// Problema 3: calcular la matriz transpuesta de una matriz (lista de listas), usando funciones lambda.

// La columna j de X se convierte en la fila j de X^T
const transpuesta = (m) => (m.length === 0 ? [] : m[0].map((_, j) => m.map((fila) => fila[j])));

// Formato de salida como lista de listas: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
const formatearMatriz = (m) => '[' + m.map((fila) => '[' + fila.join(', ') + ']').join(', ') + ']';

module.exports = { transpuesta, formatearMatriz };

if (require.main === module) {
  const X = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  console.log('X   = ' + formatearMatriz(X));
  console.log('X^T = ' + formatearMatriz(transpuesta(X)));
}
