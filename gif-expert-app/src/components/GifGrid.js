import React , { useState, useEffect }from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const [ images , setImages ] = useState([]);

    useEffect(() => {
        getGifs();
    },[]);

    const getGifs = async () => {
        const url =  'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=F5lvX58U4STuXT8YOaCaabLVkjiBefJm';
        const resp = await fetch(url);
        const  { data }  = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        console.log(gifs);
        setImages( gifs );
    }

    return (
        <div>
            <h3>{ category }</h3>
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
                    <GifGridItem key={ img.id} {...img}/>
                ))
               }
            </ol>
        </div>
    )
}

