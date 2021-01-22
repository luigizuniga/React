import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../data/heroes';

// Uso de Done
// Para el uso de pruebas asincronas utilizar Done, sino las pruebas se
// ejecutaran de forma sincrona, es decir linea por linea, en ningun momento
// esperara a que las pruenas se ejecuten de una en una

describe('Pruebas en #09-Promesas', () => {
    // Argumento Done para el callback => para las pruebas asincronas
    test('getHeroesByIdAsync debe de retornar un heroes async', ( done ) => {
        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {

                expect( heroe ).toBe( heroes[0] );
                done();
            })
    });

    test('Debo obtener un error si el  heroe por id no existe', ( done ) => {
        const id = 10;
        const msgError = 'No se pudo encontrar el héroe sss';
        getHeroeByIdAsync( id ).catch( error => {
            expect( error ).toBe( msgError );
            done();
        })
    });
});