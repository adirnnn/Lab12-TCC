// Problema 2: ordenar una lista de diccionarios con respecto a un key, usando funciones lambda.

// Compara dos valores: negativo si a va antes, positivo si va despues, 0 si son iguales
const comparar = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

// Devuelve una lista nueva ordenada por el key indicado (no modifica la original)
const ordenarPorKey = (lista, key) => lista.toSorted((a, b) => comparar(a[key], b[key]));

// Formato de salida igual al del enunciado
const formatearValor = (v) => (typeof v === 'string' ? `'${v}'` : String(v));
const formatearDiccionario = (d) =>
  '{' + Object.entries(d).map(([k, v]) => `'${k}': ${formatearValor(v)}`).join(', ') + '}';
const formatearLista = (lista) =>
  '[\n' + lista.map((d) => '    ' + formatearDiccionario(d)).join(',\n') + '\n]';

module.exports = { ordenarPorKey, formatearLista };

if (require.main === module) {
  const telefonos = [
    { make: 'Nokia', model: 216, color: 'Black' },
    { make: 'Mi Max', model: 2, color: 'Gold' },
    { make: 'Samsung', model: 7, color: 'Blue' },
  ];
  const key = process.argv[2] ?? 'model';

  if (!telefonos.every((d) => key in d)) {
    console.error(`El key '${key}' no existe en todos los diccionarios.`);
    process.exit(1);
  }

  console.log('Lista original:');
  console.log(formatearLista(telefonos));
  console.log(`\nLista ordenada por key = '${key}':`);
  console.log(formatearLista(ordenarPorKey(telefonos, key)));
}
