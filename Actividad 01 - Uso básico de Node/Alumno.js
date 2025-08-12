class Alumno {
    constructor(nombre, apellido, edad, carrera) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.materias = [];
    }

    obtenerCarrera() {
        return this.carrera;
    }

    obtenerDatos() {
        return `${this.nombre} ${this.apellido}`;
    }

    modificarEdad(nuevaEdad) {
        this.edad = nuevaEdad;
    }

    agregarMateria(materia) {
        this.materias.push(materia);
    }

    mostrarMaterias() {
        console.table(this.materias);
    }

    retornarEdad() {
        return this.edad;
    }
}

// Exportamos la clase para poder usarla en otros archivos
module.exports = Alumno;
