//Partials y currying.

const suma  = ( a, b, c ) =>  a + b + c;

const parcial = a => b => c => suma(a, b, c);

const a = parcial(5);
const b = a(2)
const c = b(3);

console.log(c);

/////////////////

const resultado = parcial(5)(25)(2);
console.log(resultado);