import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
// import CounterApp from './CounterApp';

import './index.css';

const firstapp = document.querySelector('#app');
// const counterapp = document.querySelector('#counter');

ReactDOM.render(<PrimeraApp saludo=""/>, firstapp);
// ReactDOM.render( <CounterApp count = { 0 } /> , counterapp);