import React, { useState,Fragment } from 'react';

export const GifExpertApp = () => {
   //const categories = ['Mary','Sebastian','Constanza'];

   const [ categories, setCategories] = useState(['Mary','Sebastian','Constanza']);
   const handleAdd = () => {
    //    categories.push('Albert'); console.log(categories);
        setCategories( cat => [...cat,'Luigi']);
   }

    return (
        <Fragment>
            <h2>GitExpertApp</h2>
            <hr/>
            <button onClick={ handleAdd }>Agregar</button>
            <ol>
                {
                    categories.map(category =>  {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>
        </Fragment>
    );
}