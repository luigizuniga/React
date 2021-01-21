import '@testing-library/jest-dom';
import { retornaArreglo } from "../../base/07-deses-arr";


describe('Pruebas en #07-deses-arr.js', () => {
    test('Debo retornar un string y un numero ', () => {
        // Comprobacion de arreglo
        const arr = retornaArreglo(); // ['ABC', 123];
        expect(arr).toEqual(['ABC', 123]);

        // Validacion Tipo de dato en el arreglo
        const [letras, numeros] = arr;

        console.log(typeof letras);
        // Tipo string
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        console.log(typeof numeros);

        // Tipo number
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');

    })

});