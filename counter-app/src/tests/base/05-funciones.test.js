import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en #05-funciones.js', () => {
    test('getUser debe de retornar un objeto ', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Barto2022'
        }

        const user = getUser();

        //toEqual -> hace la comparacion de objeto y sus propiedades
        expect(user).toEqual(userTest);

        /** Mensaje por consola
           - Expected  - 1 => lo que se esperaba, aparece en verde
           + Received  + 1 => lo que se recibio, aparece en rojo

            Object {
                "uid": "ABC123",
            -   "username": "El_Barto2022", <- se esperaba
            +   "username": "El_Papi1502", <- se recibio desde getUser
        */
    })

    test('getUsuario activo con argumento enviado ', () => {
        const nombre = 'Conita';
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid:123,
            username: nombre
        });
    })

});