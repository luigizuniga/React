import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';

// const firstapp = document.querySelector('#app');
const counterapp = document.querySelector('#counter');

// ReactDOM.render(<PrimeraApp title counter="init"/>, firstapp);
ReactDOM.render( <CounterApp count = { 0 } /> , counterapp);