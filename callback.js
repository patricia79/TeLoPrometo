/**
Simulamos una base de datos de 3 empleados: Carlos,
Andrés y Juan, y los salarios que ellos ganan relacionados
por su ID:

- Carlos gana 2000
- Andrés gana 5000
- Juan no posee información de salario en el momento.
**/
let employees = [
    { id: 1, name: 'Carlos' },
    { id: 2, name: 'Andrés' },
    { id: 3, name: 'Juan' }
]

let salaries = [
    { id: 1, salary: 2000 },
    { id: 2, salary: 3000 }
];

/**
- Retorna el employee por ID
- @param {} id
- @param {} callback
**/
let getEmployee= (id, callback) => {

    // Buscamos el empleado por su id
    let employee_db = employees.find(employee => employee.id === id);
    if (!employee_db) {
        // Si el employee no existe, entonces el primer argumento de
        // callback será un mensaje de error, y como segundo parametro
        // no tendrá nada, pues no se encontró el employee
        callback(`El employee con ID ${id} no existe en la base de datos`);
    }
    else {
        // No hay error (null como primer parametro), como segundo
        // parametro mandamos el empleado encontrado, este lo
        // obtendremos despues cuando llamemos a la funcion
        // getEmployee, sigue leyendo..
        callback(null, employee_db);
    }

}

/**
- Retorna la informacion del salary de un employee
- @param {\*} employee
- @param {_} callback
**/
let getSalario = (employee, callback) => {
    // Buscamos el salary segun el id del empleado
    let salarioDB = salarios.find(salary => empleado.id === salario.id);
    if (!salarioDB) {
        callback(`No se encontró un salario para el empleado ${empleado.nombre.toUpperCase()}`);
    }
    else {
        // parametro error null (no hay error),
        // en el segundo parametro armamos un objeto que
        // sera lo que obtendremos cuando llamemos la funcion getSalario
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}

// Primero obtenemos el empleado
getEmpleado(2, (error, empleado) => {
    if(error) {
        console.log(error);
        return;
    }
    // Si llegamos acá fue porque no hubo
    // error y tenemos en 'empleado' la
    // información, así que llamamos a getSalario

    getSalario(empleado, (error, salario) => {
        if(error) {
            console.log(error);
            return;
        }
        // Mostramos el objeto con la info. del salario
        console.log('El salario de la base de datos es:', salario);
    })
    console.log('El empleado de la base de datos es: ', empleado);

});