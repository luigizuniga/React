import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en #02-template-string.js', () => {
    test('getSaludo debe de retornar hola Luigi', () => {
        const nombre = 'Luigi';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!');
    })

    test('getSaludo debe de retornar hola Carlos! si no hay argumentos', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos!');
    })


});