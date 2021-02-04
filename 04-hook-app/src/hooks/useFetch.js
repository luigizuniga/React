import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });
    const isMounted = useRef(true);

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
                } else {
                    console.error('SetState no se ha llamado, ( Componente no montado )');
                }
            });
    }, [url]);

    return state;
}