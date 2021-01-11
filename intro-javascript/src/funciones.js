/*
 * Funciones en javascript
 */
function getUsuarioActivo(name) {
    return {
        uid: 'A01133BCV',
        user: name
    }
};

const usuarioActivo = getUsuarioActivo('Luigi');
console.log(usuarioActivo);

/** Tarea
 * 1. Transformar en una funcion de fecha
 * 2. Tiene que retornar un objeto implicito
 * 3. Pruebas
 */

const getLugarActivo = (place) => ({
    siteid: 'A011245BCV',
    place: place
});

const lugarActivo = getLugarActivo('Linares');
console.log(lugarActivo);