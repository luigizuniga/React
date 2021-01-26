import React, { useState,Fragment } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
   const [ categories , setCategories ] = useState(['Mary','Sebastian','Constanza']);
    // setCategories
    return (
        <Fragment>
            <h2>GitExpertApp</h2>
            <hr/>
           <AddCategory setCategories={ setCategories }/>
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