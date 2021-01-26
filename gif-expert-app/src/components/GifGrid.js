import React , { useState , useEffect }from 'react';

export const GifGrid = ({ category }) => {
    const [ count , setCount] = useState(0);

    // useEffect
    // El Hook de efecto te permite llevar a cabo efectos secundarios en componentes funcionales:
    // Solo queremos que se ejecute la instancia de  getGifs cuando el componente es renderizado por primera vez
    useEffect(() => {
        getGifs();
        // ,[] => el segundo argumento es un arreglo de dependencia, con esto la peticion se ejecutara solo una vez
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
    }



    return (
        <div>
            <h3>{ category }</h3>
            <p>{ count }</p>
            <button onClick={ ()=> setCount( count + 1 )}>+1</button>
        </div>
    )
}

