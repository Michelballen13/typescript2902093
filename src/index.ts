let nombre: string = "Michel";
nombre = "Ballen";
//console.log(nombre);
let numero: number = 24;
//console.log(numero);

type address = {
    city?: string;
    country?: string;
    ad: string;
}

//crear objeto en typescript
type  Estudiante = {
    fistName: string;
    lastName: string;
    //tipos de union
    age?:number | string;
    address?: address;
}

const e1 : Estudiante ={
    fistName : "Michel",
    lastName  : "Ballen",
    age : 32,
    address : {
        city: "Bogota",
        country: "Colombia",
        ad: "Calle 53 15 76"
    }
}



const mostrarEstudiante =
        (estudiante: Estudiante): string => {
            const { fistName , lastName  } = estudiante;
            return `Nombre de estudante: ${ fistName} 
                    apellido:  ${lastName}`;
}
//console.log(mostrarEstudiante(e1));
//console.log(mostrarEstudiante(e2));

//ARREGLOS
//Crear un arrglo de estudiantes:

let estudiantes: Estudiante [] = []


const agregarEstudiante = (estudiante: Estudiante ) => {
    estudiantes.push(estudiante)
}

const eliminarEstudiante = (indice: number) => {
    estudiantes.splice(indice , 1)
}

// Función para actualizar el apellido de un estudiante por nombre
const actualizarApellidoPorNombre = (nombre: string, nuevoApellido: string) => {
    const estudiante = estudiantes.find(est => est.fistName === nombre);
    if (estudiante) {
        estudiante.lastName = nuevoApellido;
    }
};


agregarEstudiante({
    fistName:"Geraldine",
    lastName:"Ballen",
    age: 20
})

agregarEstudiante({
    fistName:"Kevin",
    lastName:"Contreras",
    age: 24
})
actualizarApellidoPorNombre("Geraldine", "Rodriguez");

eliminarEstudiante(0)



console.log(estudiantes);


//reccorrer el arreglo de estudiantes 
//imprimiendo nombre y apellido
//con el metodo de arreglo de forEach 

/*estudiante.forEach((estudiante) => {
    console.log(`Nombre: ${estudiante.fistName}, Apellido: ${estudiante.lastName}`);
});*/