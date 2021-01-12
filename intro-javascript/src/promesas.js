/* Promesas

    Una Promesa es un proxy para un valor no necesariamente conocido en el momento que es creada la promesa.
    Permite asociar manejadores que actuarán asincrónicamente sobre un eventual valor en caso de éxito,
    o la razón de falla en caso de una falla. Esto permite que métodos asíncronos devuelvan valores como si fueran síncronos:
    en vez de inmediatamente retornar el valor final, el método asíncrono devuelve una promesa de suministrar el valor en algún
    Una Promesa se encuentra en uno de los siguientes estados:

    pendiente (pending): estado inicial, no cumplida o rechazada.
    cumplida (fulfilled): significa que la operación se completó satisfactoriamente.
    rechazada (rejected): significa que la operación falló.
*/

const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Se termino el timeout');
    }, 3000);
});

prom1.then(mensaje => console.log(mensaje))
    .catch(console.warn)
console.log('Fin');