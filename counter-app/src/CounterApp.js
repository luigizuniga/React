import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ title, value }) => {
    // handleAdd
    /*
     * onClick={ handleAdd() } => con parentesis
     * Al momento de llamar a la funcion con onClick={ handleAdd() }
     * esta se ejecutara al momento de renderizar el componente, por lo que sera undefined.
     *
     * Recordar que toda funcion en Javascript que no retorna algo implicito nos dara undefined.
     *
     * onClick={ handleAdd } => sin parentesis
     * Este se ejecutara solo al momento de presionar el boton
     */




    const handleAdd = (e) => {
         console.log('Ejecucion de la funcion sin parentesis del boton');
        // Retorna Undefined
        // return () => console.log(e);
        return () => console.log('Ejecucion de la funcion con Parentesis desde el boton');
    }


    return (
        <Fragment>
            <h2>{ title }</h2>
            <p>{  value }</p>
            <button onClick={ handleAdd() }>+1</button>
        </Fragment>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
     title: 'CounterAPP - Task'
}

export default CounterApp;