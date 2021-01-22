import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../data/heroes';

describe('Pruebas en #08-imp-exp con funciones de Heroes', () => {
    test('debe de retornar un heroe por Id', () => {
        const id =1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id);

        console.log(`Busqueda esperada  id ${ id } heroe: ${ JSON.stringify(heroeData) }`);
        console.log(`Busqueda recibida id ${ id } heroe: ${ JSON.stringify(heroe) }`);

        expect( heroe ).toEqual( heroeData );

    });

    test('debe de retornar undefined si heroe no existe', () => {
        const id =133;
        const heroe = getHeroeById(id);

        console.log(`Busqueda esperada  id ${ id } heroe: ${ heroe  }`);
        console.log(`Busqueda recibida id ${ id } heroe: ${ heroe }`);

        expect( heroe ).toBe( undefined );
    });

    // Debe de retornar un arreglo con los heroes de DC
    // owner
    // toEqual al arreglo filtrado
    test('debe de retornar un arreglo con los heroes de DC', () =>{
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        const heroesData = heroes.filter(h => h.owner === owner);

        console.log(`Busqueda esperada owner ${ owner } heroes owner: ${ JSON.stringify(heroes)  }`);
        console.log(`Busqueda recibida owner ${ owner } heroe Data: ${ JSON.stringify(heroesData) }`);

        expect( heroes ).toEqual( heroesData );
    });

    // Debe de retornar un arreglo con los heroes de Marvel
    // length = 2 // toBe
    test('Debe de retornar un arreglo con los heroes de Marvel', () =>{
        const owner = 'Marvel';
        const hereos = getHeroesByOwner(owner);

        expect( hereos.length ).toBe(2);
    })

});