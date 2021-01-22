import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from "../PrimeraApp";

// Para trabajr con componentes se debe importar React
describe('Pruebas en <PrimeraApp>', () => {
            test('Debe de mostrar el mensaje "Hola, Soy Goku" ', () => {
                    const saludo = "Hola, Soy Goku";
                    // render => funcion que recibe un componente a renderizar
                    const { getByText } = render( <PrimeraApp saludo={ saludo }/> );


                    // retorno => TypeError: expect(...).toBeDocument is not a function
                    // para añadir esta funcionalidad incluir el archivo setupTests.js

                    // Ex: Error Saludo modificado
                    //  expect(getByText(saludo + '!!')).toBeInTheDocument();

                    expect(getByText(saludo)).toBeInTheDocument();
                });
            });