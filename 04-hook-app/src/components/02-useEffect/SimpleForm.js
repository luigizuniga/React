import React, { useState, useEffect, Fragment } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState , setFormState ] = useState({
        name: '',
        email: ''
    });
    const { name, email } = formState;

    // Event (e), es objeto que representa  el evento, y uno de sus atributos es el target,
    // que viene a ser el elemento que recibió el evento. (En este caso el input).
    const handleInputChange = ({ target }) => {
        // #region Evento Target
        // Example

        // Visualizacion de evento target
        // retorna el valor ingresado el en input

        //console.log(e.target.value);

        // retorna el atributo name del input
        // console.log(e.target.name);

        // #endregion
         setFormState({
             // ...formState contiene el estado de los input los cuales son retornados su event.target
             ...formState,
             [ target.name ]:  target.value
         });
    };

    // React Effect Callback = useEffect
    // utilizar [] para cargar solo una vez el hook del componente
    useEffect( () => {
        console.log('useEffect load');
    },[] );

    useEffect( () => {
        console.warn('Estado del formulario mediante objeto formState y sus propiedades');
        console.log( formState );
    },[ formState ]);

    useEffect( () => {
        console.warn('Value del Input email mediante desestrcturacion y useEffect');
        console.log(email);
    },[email]);

    return (
        <Fragment>
            <div className="d-grid gap-2 d-md-flex justify-content-lg-center">
                <h1>Use Effect</h1>
            </div>
            <div className="justify-content-lg-center">
                <div className="form-group col-lg-6 offset-lg-3">
                    <div className="mb-6">
                        <label className="form-label">User</label>
                        <input type="user" className="form-control"
                                placeholder="user@yourname"
                                value={ name }
                                onChange={ handleInputChange }
                                name="name"
                                autoComplete="off"
                             />
                    </div>
                    <div className="mb-6">
                        <label className="form-label">Email</label>
                        <input type="email"
                               className="form-control"
                               name="email"
                               placeholder="email@email"
                               value={ email }
                               onChange={ handleInputChange }
                               autoComplete="off"
                               />
                    </div>
                    {/* condicional donde el valor de name = 123 se visualiza el componente Message indicando las coordenadas */}
                     { (name === '123') && <Message/> }
                </div>
            </div>
        </Fragment>
    )
}
