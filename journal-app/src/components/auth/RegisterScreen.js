import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';


export const RegisterScreen = () => {
    // use Dispatch for store/reducer (auth- uireducer )
    const dispatch = useDispatch();

    // useSlector
    // Example return state msgError value
    // const state  = useSelector( state => state.ui );
    // console.log(state);
    const { msgError } = useSelector( state => state.ui );

   //A hook to access useForm function with params ( formValues(value return), event).
    const [ formValues, handleInputChange ] = useForm({
        name: 'username',
        email:'useremail@mail.com',
        password:'abc123',
        password2:'abc123'
    });

    const { name , email, password, password2 } = formValues;

    const handleRegister =  (e) => {
        e.preventDefault();
        console.log(name,email,password,password2);

        if(isFormValid()){
            console.log("Formulario Valido");
        }
    }

    const isFormValid = () => {
        if( name.trim().length === 0){
             dispatch(setError('Name is required'))
            return false
        }else if(!validator.isEmail( email )){
            dispatch(setError('Email is required'))
            return false
        }else if( password !== password2 || password.length < 5){
             dispatch(setError('Password is required'))
            return false
        }

        dispatch(removeError());
        return true;
    }

    return (
        <div>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={ handleRegister} >
                {
                    msgError && (
                     <div className="auth__alert-error ">
                         { msgError }
                    </div>
                    )
                }
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={ password2 }
                    onChange={ handleInputChange }
                />

                <button type="submit" className="btn btn-primary btn-block mb-5">
                    Register
                </button>

                <Link to="/auth/login" className="link">Already registered?</Link>

            </form>
        </div>
    )
}
