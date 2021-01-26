import React, { useState,Fragment } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
   const [ categories ] = useState(['Mary','Sebastian','Constanza']);

    return (
        <Fragment>
            <h2>GitExpertApp</h2>
            <hr/>
           <AddCategory />
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