import React from 'react';

export const Hijo = React.memo( ({ numero , increment })  => {

    console.log('Me he vuelto a generar :( ');

    return (
        <button className="btn btn-primary mr-3"
                onClick={ () => increment( numero )  }
                >
                { numero }
        </button>
    )
})
