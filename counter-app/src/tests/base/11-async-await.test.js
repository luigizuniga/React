import { getImagen } from '../../base/11-async-await';

describe('Pruebas con 11-async-await y fetch', () => {
    // async => utilizacion para test con promesas
    test('Debe de retornar la url de la imagen de la API ',
        async() => {
            const url = await getImagen();
            const exp = 'https://';
            console.log(url);

            // retornar url en formato string
            expect(typeof url).toBe('string');

            // retonar en true o false la coincidencia enviada
            console.log(url.includes(exp));
            expect(url.includes(exp)).toBe(true);

        });
});