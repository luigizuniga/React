import React , { Fragment }from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs'; // Custom Hooks
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {
    const { data, loading }  = useFetchGifs( category );

    return (
        <Fragment>
            <h3>{ category }</h3>
            { loading && <p>loading</p> }
            <div className="card-grid">
                {
                   data.map(img => (
                    <GifGridItem key={ img.id } {...img}/>
                   ))
                }
            </div>
        </Fragment>
    )
}

