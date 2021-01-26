import React , { useState, useEffect, Fragment }from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
    const [ images , setImages ] = useState([]);


    useEffect(() => {
        getGifs( category )
          // .then( imgs => setImages(imgs)
            .then( setImages );
    },[ category ]);


    return (
        <Fragment>
        <h3>{ category }</h3>
        <div className="card-grid">
            <ol>
                {
                //#region Formas de Envio de Objeto imagen
                /* Objeto completo
                 * ===============
                 * images.map( img => (<li key={ img.id }> {img.title }</li>))

                 * Objeto desestructurado
                 * images.map( ({ id, title }) => (
                 * <li key={ id }> { title }</li>
                 * ))
                 */

                /* Envio de imagen a componente GifGridItem
                 * images.map( img =>(
                 *   <GifGridItem key={ img.id} img={ img }/>
                 *))
                 */
                //#endregion
                images.map( (img)=>(
                    <GifGridItem key={ img.id } {...img}/>
                ))
               }
            </ol>
        </div>
        </Fragment>
    )
}

