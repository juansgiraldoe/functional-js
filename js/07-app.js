//Funciones que retornan funciones.

const obtenerCliente = () => () => console.log('Sebastian');

const fn = obtenerCliente();

fn();