import React, { useState,Fragment } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
   const [ categories , setCategories ] = useState(['Megaman X']);
    // setCategories
    return (
        <Fragment>
            <h2>GitExpertApp</h2>
            <hr/>
           <AddCategory setCategories={ setCategories }/>
            <ol>
                {
                    categories.map(cat =>
                       <GifGrid
                       key={ cat }
                       category={ cat }/>
                    )
                }
            </ol>
        </Fragment>
    );
}