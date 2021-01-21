const nombre = 'Fernando';
const apellido = 'Herrera';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

// console.log( nombreCompleto );

// Para poder utilizar esta funcion en el archivo de pruebas
// debemos exportar la funcion

export function getSaludo(nombre = 'Carlos') {
    return 'Hola ' + nombre + '!';
}

// console.log(`Este es un texto: ${ getSaludo( nombre ) }  `);