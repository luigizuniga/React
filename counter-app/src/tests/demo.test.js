describe('Pruebas en el archivo demo.test', () => {
    test('Deben de ser iguales los string ', () => {

        // 1. Inicializacion
        const mensaje = 'Hola Mundo';

        // 2. Estimulo
        const mensaje2 = 'Hola Mundo!!';

        // 3, Observar el comportamiento
        // Mediante Expected que indica el valor Esperado en la pruena
        // Received indica indica el valor recibo
        // expect ( received ) toBe ( Expected )
        // https://jestjs.io/docs/en/expect#tobevalue
        // Similar a // === -> Observar documentacion
        expect(mensaje).toBe(mensaje2);
    })
});