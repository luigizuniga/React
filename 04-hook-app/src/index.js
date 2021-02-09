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
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { Memorize } from './components/06-memos/Memorize';
// import { MemoHook } from './components/06-memos/MemoHook';
// import  { CallBackHooks } from './components/06-memos/CallBackHooks';
// import { Padre } from './components/07-Tarea/Padre';
// import { TodoApp } from './components/08-UseReduce/TodoApp';

import { MainApp } from  './components/09-useContext/MainApp';

const hooksapp = document.querySelector('#root');
ReactDOM.render( <MainApp /> , hooksapp);