import React , { Fragment } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';


export const MultipleCustomHook = () => {
    const { counter } = useCounter(1);
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    console.log(state);

    return (
        <Fragment>
            <div className="d-grid gap-2 d-md-flex justify-content-lg-center">
                <h1>Custom Hooks</h1>
            </div>
            <div className="justify-content-lg-center">
                <button className="btn btn-primary">
                    Next Quote
                </button>
            </div>
        </Fragment>
    )
}