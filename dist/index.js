"use strict";
let nombre = "Michel";
nombre = "Ballen";
//console.log(nombre);
let numero = 24;
const e1 = {
    fistName: "Michel",
    lastName: "Ballen",
    age: 32,
    address: {
        city: "Bogota",
        country: "Colombia",
        ad: "Calle 53 15 76"
    }
};
const mostrarEstudiante = (estudiante) => {
    const { fistName, lastName } = estudiante;
    return `Nombre de estudante: ${fistName} 
                    apellido:  ${lastName}`;
};
//console.log(mostrarEstudiante(e1));
//console.log(mostrarEstudiante(e2));
//ARREGLOS
//Crear un arrglo de estudiantes:
let estudiantes = [];
const agregarEstudiante = (estudiante) => {
    estudiantes.push(estudiante);
};
const eliminarEstudiante = (indice) => {
    estudiantes.splice(indice, 1);
};
// Función para actualizar el apellido de un estudiante por nombre
const actualizarApellidoPorNombre = (nombre, nuevoApellido) => {
    const estudiante = estudiantes.find(est => est.fistName === nombre);
    if (estudiante) {
        estudiante.lastName = nuevoApellido;
    }
};
agregarEstudiante({
    fistName: "Geraldine",
    lastName: "Ballen",
    age: 20
});
agregarEstudiante({
    fistName: "Kevin",
    lastName: "Contreras",
    age: 24
});
actualizarApellidoPorNombre("Geraldine", "Rodriguez");
eliminarEstudiante(0);
console.log(estudiantes);
//reccorrer el arreglo de estudiantes 
//imprimiendo nombre y apellido
//con el metodo de arreglo de forEach 
/*estudiante.forEach((estudiante) => {
    console.log(`Nombre: ${estudiante.fistName}, Apellido: ${estudiante.lastName}`);
});*/ 
