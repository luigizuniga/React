import React from 'react';
import ReactDOM from 'react-dom';
// import { HookApp }  from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHook } from './components/03-useFetch/MultipleCustomHook';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { UseRefRealExample } from './components/04-useRef/UseRefRealExample';
import { Layout } from './components/05-useLayoutEffect/Layout';

const hooksapp = document.querySelector('#root');
ReactDOM.render( <Layout /> , hooksapp);