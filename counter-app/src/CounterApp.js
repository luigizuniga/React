import React, { Fragment ,useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ count= 100 }) => {
    const [ counter, setCounter ] = useState(count); // []

    const handleAdd = () => setCounter((c) => c + 1);
    const handleSubtract = () => setCounter((c) => c - 1);
    const handleReset = () => setCounter( count );

    return (
        <Fragment>
            <h2>Bienvenido a CounterApp</h2>
            <p>{ counter }</p>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </Fragment>
    );
}

CounterApp.propTypes = {
    count: PropTypes.number
}


export default CounterApp;