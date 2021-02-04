import React , { useState , useEffect, useCallback } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallBackHooks = () => {
    const [ counter, setCounter ] = useState(10);

    // Example
    // ==========================================================================================================
    // Referencia al componente  ShowIncrement con uso de react.memo
    // almacena el valor de increment(o) que es retornado por useCallback

    // useCallback
    // Devolverá una versión memorizada del callback que solo cambia si una de las dependencias ha cambiado.
    // Esto es útil cuando se transfieren callbacks a componentes hijos optimizados que dependen de la igualdad
    // de referencia para evitar renders innecesarias

    // *- Codigo sin uso de Callback -*
    // const increment = useCallback(() => {
    //     setCounter( counter + 1 );
    // },[ setCounter , counter ]);

    // ==========================================================================================================


    const increment = useCallback(( num ) => {
        setCounter( c => c + num );
    },[ setCounter ]);


    useEffect(() => {
        /// ?
    },[ increment ]);

    return (
        <div>
            <h1>CallBack Hook: { counter }</h1>
            <hr/>
            <ShowIncrement increment={ increment }/>
        </div>
    )
}
