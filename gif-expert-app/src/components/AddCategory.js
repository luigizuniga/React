import React , { useState } from 'react';

export const AddCategory = () => {
    const [ inputValue, setInputValue ] = useState('Kuroshan');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        // #region preventDefault();
        // Con la finalidad de no actualizar el navegador al momento de presionar enter

        // Llamar a preventDefault en cualquier momento durante la ejecución, cancela el evento.
        // lo que significa que cualquier acción por defecto que deba producirse como resultado
        // de este evento, no ocurrirá.
        //#endregion
        e.preventDefault();
        console.log('Submit Hecho');
    }

    return (
        // #region  Al utilizar formulario
        // El formulario por sí mismo es el agrupa todos los elementos o los inputs que yo podría
        // tener dentro del mismo, por lo cual esto no es necesario ponerlo en el caso de que ustedes
        // tengan un elemento que agrupe todo lo demás.
        //#endregion
        <form onSubmit={ handleSubmit }>
            <h2>Add Category</h2>
            <p>{ inputValue }</p>
            <label>
                <input type="text"
                    value={ inputValue }
                    onChange={ handleInputChange  }
                />
            </label>
        </form>
    );
}