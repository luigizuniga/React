import React from 'react';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {
    // uso de Hook personalizado en el cual enviamos un arregki con los valores del formulario
    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password:''
    });

    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        // preventDefault

        // Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento
        // es decir, puede ser llamado de nuevo.
        e.preventDefault();

        // Retornamos los valores de los input mediante el hook personalizado
        console.log(formValues);
    };

    return (
        //
        <form onSubmit={ handleSubmit }>
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
                    <div className="mb-6">
                        <label className="form-label">Password</label>
                        <input type="password"
                               className="form-control"
                               name="password"
                               placeholder="your@password"
                               value={ password }
                               onChange={ handleInputChange }
                               />
                    </div>
                    <div className="mt-5">
                        <button className="btn btn-primary" type="submit">Save</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
