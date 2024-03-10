//Funciones como argumentos.

const suma = ( a, b ) => ( a + b );
const multiplicar = ( a, b ) => ( a * b );

const resultado = fn => fn(10, 20);

console.log(resultado(suma));
console.log(resultado(multiplicar));