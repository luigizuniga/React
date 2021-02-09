import React from 'react';
//Reutilizacion de Hook personalizado 
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) {
            return;
        }
        
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                name="description"
                className="form-control"
                placeholder="New Task ..."
                autoComplete="off"
                value={description}
                onChange={handleInputChange}
            />

            <button type="submit"
                className="btn btn-outline-primary mt-1 btn-block">
                <i className="bi bi-plus-circle-fill"></i> Add
                </button>
        </form>

    )
}
