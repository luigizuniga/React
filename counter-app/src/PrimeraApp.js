
import React, { Fragment } from 'react';
/**
    Un patrón común en React es que un componente devuelva múltiples elementos.
    Los Fragmentos te permiten agrupar una lista de hijos sin agregar nodos extra al DOM
*/

const PrimeraApp = () => {
    const message = 'Bienvenido';
    const user = {
        name: 'Luigi',
        lastname: 'Zuniga'
    }
    return (
        <Fragment>
            <h1>{ message }</h1>
            <pre>{  JSON.stringify(user, null, 3) }</pre>

        </Fragment>
    );
}

export default PrimeraApp;