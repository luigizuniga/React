import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
    Un patrón común en React es que un componente devuelva múltiples elementos.
    Los Fragmentos te permiten agrupar una lista de hijos sin agregar nodos extra al DOM
*/

/*
    Modificacion para Unit Testing
*/
const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
    <Fragment>
        <h1>{ saludo }</h1>
        <p>{ subtitulo }</p>
    </Fragment>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;