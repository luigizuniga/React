import React , { Fragment, useState, useCallback } from 'react';
import { Hijo } from './Hijo';

export const Padre = () => {
    const nums = [ 2,4,6,8,10 ];
    const [ value, setValue ] = useState(0);

    // const increment = ( num ) => {
    //     setValue( value + num);
    // }

    const increment = useCallback( ( num ) => {
        setValue( c => c + num );
    },[ setValue ]);

    return (
        <Fragment>
            <h1>Componente Padre</h1>
            <p> Total: { value }</p>

            <hr/>

            {
                nums.map( n =>(
                    <Hijo key={ n }
                          numero={ n }
                          increment={ increment }
                        />
                ))
            }
        </Fragment>
    )
}
