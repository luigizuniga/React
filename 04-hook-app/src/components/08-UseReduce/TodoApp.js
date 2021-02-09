import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToggle = (todoId) => {

        const action = {
            type: 'toggle'
            payload: todoId
        }

        dispatch(action);
    }


    return (
        <div className="background-primary">
            <h3 className="display-6">React Hooks</h3>

            <div className="row">
                <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                    <TodoAdd handleAddTodo={handleAddTodo}
                    />
                </div>

                <div className="col-lg-6 col-md-6 col-xs-12">
                    <TodoList todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
            </div>
            <div className="row">
                <h6 className="display-6"> Todos.Object</h6>
                {JSON.stringify(todos)}
            </div>
        </div>

    )
}
