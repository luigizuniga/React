
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
    Un patrón común en React es que un componente devuelva múltiples elementos.
    Los Fragmentos te permiten agrupar una lista de hijos sin agregar nodos extra al DOM
*/

const PrimeraApp = ({ title, subtitle, counter }) => {
    const message = "Welcome";
    const user = {
        name: 'Luigi',
        lastname: 'Zuniga'
    };

    if(!counter) {
        console.log("No se encuentra la propiedad counter : "  + counter);
    }

    return (
        <Fragment>
            <h1>{ message }</h1>
            <p>{ subtitle }</p>
            <pre>{  JSON.stringify(user, null, 3) }</pre>

        </Fragment>
    );
}

PrimeraApp.propTypes = {
    title: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired
}

PrimeraApp.defaultProps = {
    subtitle: 'This a Functional Component'
}

export default PrimeraApp;