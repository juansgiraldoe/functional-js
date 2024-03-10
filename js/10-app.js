//Composition.

const obtenerNombre = info => ({
  mostrarInfoNombre() {
    console.log(`El nombre es ${info.nombre}`);
  },
});

const guardarEmail = info => ({
  agregarEmail( email ) {
    console.log(`Guardando el email de ${info.nombre}`);
    info.email = email;
  },
});

const obtenerEmail = info => ({
  mostrarEmail() {
    console.log(`Correo: ${info.email}`);
  }
});

const obtenerTrabajo = info => ({
  mostrarTrabajo(){
    if (info.empresa) {
      console.log(`Trabaja en: ${info.empresa}`);
    };
    if (info.puesto) {
      console.log(`Trabaja como: ${info.puesto}`);
    };
  },
});

/////////////////////////////////////

function Cliente(nombre = '', email = '', empresa = '') {
  let info = {
    nombre,
    email,
    empresa,
  };
  return Object.assign(
    info,
    obtenerNombre(info),
    guardarEmail(info),
    obtenerEmail(info),
    obtenerTrabajo(info),
  );
};

function Empleado(nombre = '', email = '', puesto = '') {
  let info = {
    nombre,
    email,
    puesto,
  };
  return Object.assign(
    info,
    obtenerNombre(info),
    guardarEmail(info),
    obtenerEmail(info),
    obtenerTrabajo(info),
  );
};

const cliente = Cliente('Juan', null , 'BTR');
const empleado = Empleado('Pedro', null, 'Desarrollador');

cliente.mostrarInfoNombre();
cliente.agregarEmail('cliente@correo.com');
cliente.mostrarEmail();
cliente.mostrarTrabajo();

console.log(`=========================================`);

empleado.mostrarInfoNombre();
empleado.agregarEmail('empleado@correo.com');
empleado.mostrarEmail();
empleado.mostrarTrabajo();
