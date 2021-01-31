import React , { useState, useEffect } from 'react';

export const Message = () => {
    const [ coords, setCoords ] = useState({ x: 0, y: 0});
    const { x, y } = coords;

    useEffect(() =>{

        const mouseMove = (e) => {
            const coords = { x: e.x , y:  e.y };
            setCoords( coords );
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    });


    return (
        <div className="justify-content-lg-center mt-5 ">
            <div className="alert alert-success text-center" role="alert">
                Rock On!!
                <span>
                    Cordenadas =  x: { x }  y: { y }
                 </span>
            </div>
        </div>
    )
}
