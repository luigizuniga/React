import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

// const firstapp = document.querySelector('#app');
// const saludo = 'Hola, Soy Goku';
// ReactDOM.render(<PrimeraApp saludo={ saludo }/>, firstapp);

const counterapp = document.querySelector('#counter');
ReactDOM.render( <CounterApp /> , counterapp);