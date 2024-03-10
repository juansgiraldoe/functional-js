//Closures.
//Acceder a valor internos.

const obtenerCleinte = () => {
  const nombre = 'Juan';
  function mostratNombre() {
    console.log(nombre);
  };
  return mostratNombre;
};

const cliente = obtenerCleinte();

cliente();