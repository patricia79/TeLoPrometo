/**
Simulamos una base de datos de 3 empleados: Carlos,
Andrés y Juan, y los salarios que ellos ganan relacionados
por su ID:

- Carlos gana 2000
- Andrés gana 5000
- Juan no posee información de salario en el momento.
**/

let employees = [
    { id: 1, nombre: 'Carlos' },
    { id: 2, nombre: 'Andrés' },
    { id: 3, nombre: 'Juan' }
]

let salarios = [
    { id: 1, salario: 2000 },
    { id: 2, salario: 3000}
];

/**
- Retorna una promesa que tiene los empleados
- @param {} id : SOLO RECIBE UN ID, NO RECIBE CALLBACKS!!
**/
let getEmpleado = (id) => {
    return new Promise( (resolve, reject) => {
        let empleadoDB = empleados.find( empleado => empleado.id === id);
        if(!empleadoDB) {
            // Algo salio mal, entonces usamos reject
            reject(`El empleado con ID ${id} no existe en la BBDD`);
        }
        else {
            // Todo OK, usamos resolve para devolver nuestro objeto.
            resolve(empleadoDB);
        }
    });
}

/**
@param {} empleado
**/
let getSalario = (empleado) => {
    return new Promise( (resolve, reject) => {
        let salarioDB = salarios.find( salario => empleado.id === salario.id);
        if(!salarioDB) {
            // Algo salio mal, entonces usamos reject
            reject(`No se encontró un salario para el empleado ${empleado.nombre.toUpperCase()}`);
        }
        else {
            // Todo OK, usamos resolve para devolver nuestro objeto.
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

getEmpleado(1).then( empleado => {
    /** En este primer "then" estamos resolviendo
    exitosamente la Promise devuelta por el
    método getEmpleado.
    Retornamos la función getSalario con el
    empleado en particular, como ya vimos, getSalario
    devuelve una nueva Promise. Entonces
    podemos "encadenar" otro "then" mas abajo que hará alución
    a la Promise retornada por el método getSalario. **/
    return getSalario(empleado);
})
.then( objInfoSalario => {
    // En este segundo "then" estamos resolviendo exitosamente la
    // Promesa devuelta por el metodo getSalario.
    console.log(`El salario de ${objInfoSalario.nombre} es ${objInfoSalario.salario}$`);
})
.catch(error => console.log(error));
// Este catch, nos sirve para cualquier error, ya sea de la Promise
// devuelta por el método getEmpleado o por el método getSalario.