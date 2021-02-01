import React , { Fragment } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

export const MultipleCustomHook = () => {
    const { counter , increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    //#region !negacion con valor de retorno

    // Example
    // null => null
    // !null => true
    // !null && 'message' => si es true retorna 'message'
    // !!null && 'mesage' => false

    //#endregion

    //#region !! data && data[0]
    // En caso de retornar false, no evalua la segunda condicion
    // por lo que author y quote retornarian undefined
    //#endregion
    const { author , quote } = !!data && data[0];

    return (
        <Fragment>
            <div>
                <h1 className="text-center"> BreakingBad Quotes</h1>
                <hr/>
                { loading ? ( <div className="alert alert-info text-center"> Loading... </div> ) : ( <blockquote className="blockquote text-right"><p className="mb-0"> { quote } </p><footer className="blockquote-footer mt-5"> { author } </footer></blockquote> )}
                <div className="justify-content-lg-center">
                    <button className="btn btn-primary"
                        onClick={ increment }
                        >
                        Next Quote
                    </button>
                </div>
            </div>

        </Fragment>
    )
}