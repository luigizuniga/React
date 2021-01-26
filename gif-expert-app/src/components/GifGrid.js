import React , { Fragment }from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    const { loading }  = useFetchGifs();

    return (
        <Fragment>
            <h3>{ category }</h3>
            { loading ? 'Cargando...' : 'Data cargada' }
        </Fragment>
    )
}

