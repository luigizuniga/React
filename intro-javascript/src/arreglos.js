 /**
  * Arreglos
  */

 const arreglo = [1, 2, 3, 4];
 const numbers = [1, 5, 10, 15];

 /**
  * operador de propagación spread operator permite que una expresión sea expandida en situaciones
  * donde se esperan múltiples argumentos (llamadas a funciones) o múltiples elementos (arrays literales).
  */

 let arreglo2 = [...arreglo, 5];
 let arreglo3 = [...numbers, 20];

 /**
  * El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
  */

 let doubles = arreglo3.map(function(n) { return n * 2; });

 console.log(arreglo);
 console.log(arreglo2);
 console.log(doubles);