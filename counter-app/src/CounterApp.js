import React, { Fragment ,useState } from 'react';
import PropTypes from 'prop-types';

/*  Hooks
*
*  Hooks son una nueva característica en React 16.8.
*  Estos te permiten usar el estado y otras características de React sin escribir una clase
*
*  UseState
*
*/

const CounterApp = ({ title, count }) => {
    const [ counter, setCounter ] = useState(count);

    const handleAdd = () => setCounter((c) => c + 1);
    const handleSubtract = () => setCounter((c) => c - 1);


    return (
        <Fragment>
            <h2>{ title }</h2>
            <p>{  counter }</p>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ ()=> setCounter( count ) }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </Fragment>
    );
}

CounterApp.propTypes = {
    count: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
     title: 'CounterAPP'
}

export default CounterApp;