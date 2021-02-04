import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {

    //#region useRef Renderizado del componente

    // Mantiene el renderiazado del comenente cuando este es montado,
    // sin el use state estariamos renderizando una y otra vez el mismo componente
    // haciendo que react nos alerte de que esto puedo dar problemas de memoria

    // Message
    /// Warning: Can't perform a React state update on an unmounted component.
    // This is a no-op, but it indicates a memory leak in your application. To fix,
    // cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    //#endregion

    const [state, setState] = useState({ data: null, loading: true, error: null });

    // isMounted refrencia creada para llamar de manera condicional a setState
    // mediante este hook sabremos si el componente esta montado
    // cuando cambiamos los valores de isMounted no estamnos lanzando una renderizacion nuevamente
    // simplemente mantiene la referencia al valor

    const isMounted = useRef(true);

    // useEffect con dependencia vacia para que se cargue solo una vez, cuando se desmonte el valor
    // isMounted.current = false; -> Mantiene la referencia al componente, por lo que este no se desmontara
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {
                    // setTimeout(() => {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                    // }, 4000);
                }else{
                    console.error('SetState no se ha llamado, ( Componente no montado )');
                }
            });
    }, [url]);

    return state;
}