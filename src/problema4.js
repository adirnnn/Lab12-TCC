// Problema 4: eliminar elementos indicados de una lista, usando funciones lambda.

// Se queda solo con los elementos que no estan en la lista a borrar.
// Los elementos a borrar que no estan en la lista original simplemente se ignoran.
const eliminar = (lista, aBorrar) => lista.filter((x) => !aBorrar.includes(x));

// Formato de salida igual al del enunciado: ['rojo', 'verde', ...]
const formatearLista = (lista) => '[' + lista.map((x) => `'${x}'`).join(', ') + ']';

module.exports = { eliminar, formatearLista };

if (require.main === module) {
  const colores = ['rojo', 'verde', 'azul', 'amarillo', 'gris', 'blanco', 'negro'];
  const aBorrar = ['amarillo', 'cafe', 'blanco'];

  console.log('Lista inicial:      ' + formatearLista(colores));
  console.log('Elementos a borrar: ' + formatearLista(aBorrar));
  console.log('Resultado:          ' + formatearLista(eliminar(colores, aBorrar)));
}
