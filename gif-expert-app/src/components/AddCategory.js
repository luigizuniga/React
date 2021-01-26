import React , { useState } from 'react';
import PropTypes from 'prop-types';


// setCategories => funcion llamada desde el componente GifExpertApp
export const AddCategory = ({ setCategories }) => {
    const [ inputValue, setInputValue ] = useState('');

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

        if(inputValue.trim().length > 2){
            setCategories( c => [...c, inputValue]);
            setInputValue('');
        }
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

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
