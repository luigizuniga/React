import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ title, value }) => {
    const  valueSend = parseInt(value, 10);
    console.log(valueSend);

    return (
        <Fragment>
            <h1>{ title }</h1>
            <h2>{  valueSend }</h2>
        </Fragment>
    );
}

CounterApp.propTypes = {
    value: PropTypes.string.isRequired
}

CounterApp.defaultProps = {
     title: 'CounterAPP - Task'
}

export default CounterApp;