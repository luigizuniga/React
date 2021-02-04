import React , { useState } from 'react';
import { MultipleCustomHook } from '../03-useFetch/MultipleCustomHook';

export const UseRefRealExample = () => {
    const [ show, setShow ] = useState(false);
    console.log(show);

    return (
        <div>
            <h1> RealExample </h1>
            <hr/>
            { show && <MultipleCustomHook /> }
            <button className="btn btn-primary mt-5"
                    onClick={ () => {
                        setShow(!show);
                    }}>
                    Show | Hide
            </button>
        </div>
    )
}
