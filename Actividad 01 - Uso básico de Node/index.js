const Alumno = require('./Alumno');

// Creaamos una instancia de Alumno
const alumno1 = new Alumno("Juan", "Pérez", 20, "Ingeniería en Sistemas");

// Probamos los métodos
console.log("Carrera:", alumno1.obtenerCarrera());
console.log("Datos:", alumno1.obtenerDatos()); 

alumno1.modificarEdad(21);
console.log("Edad actualizada:", alumno1.retornarEdad()); 

alumno1.agregarMateria("Programación I");
alumno1.agregarMateria("Matemática Discreta");
alumno1.agregarMateria("Base de Datos");

console.log("Materias inscritas:");
// Mostramos la tabla con las materias
alumno1.mostrarMaterias(); 
