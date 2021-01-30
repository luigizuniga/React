import React, { Fragment } from 'react';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter();

    return (
        <Fragment>

        <div className="d-grid gap-2 d-md-flex justify-content-lg-center">
            <h1>Counter With Hook: { counter }</h1>
        </div>
            <div className="d-grid gap-2 d-md-flex justify-content-lg-center">
                <hr />
                <button className="btn btn-primary me-md-2"
                        onClick={ ()=> increment(2) }
                        > + 1 </button>
                <button className="btn btn-warning me-md-2"
                        onClick={ reset }
                        > Reset </button>
                <button className="btn btn-danger me-md-2"
                        onClick={ ()=> decrement(2) }
                        > - 1 </button>
            </div>
        </Fragment>
    )
}