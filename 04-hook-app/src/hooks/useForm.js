import { useState } from 'react';

// initialState => estadio del formulario enviado desde FormWithCustomHook
export const useForm = ( initialState = {} ) => {

    // initialState retorna el valor de los input al ejecutar onSubmit desde el button
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    return [values, handleInputChange];
}