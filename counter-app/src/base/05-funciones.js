// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = (nombre) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

// console.log( saludar('Goku') )

// console.log( saludar2('Vegeta') );
// console.log( saludar3('Goku') );
// console.log( saludar4() );


export const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Barto2022'
});


// const user = getUser();
// console.log(user);

// Tarea
export const getUsuarioActivo = (nombre) => ({
    uid: 123,
    username: nombre
})


// const usuarioActivo = getUsuarioActivo();
// console.log(usuarioActivo.username);