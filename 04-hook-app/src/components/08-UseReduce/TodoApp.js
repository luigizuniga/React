import React , { useReducer, useEffect }from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';
import './styles.css';

const init = () => {
    // Al inicializar el componente obtiene los almacenados en el localstorage
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
    
    // Al usar este Hook, le estamos indicando a React que el componente tiene que hacer algo después de renderizarse
    useEffect(() => {
        // agrega los elementos que existan y los añadira / modificara al localstorage
        localStorage.setItem('todos', JSON.stringify( todos ));
    },[ todos ]);

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }
    

    return (
        <div className="background-primary">
            <h3 className="display-6">React Hooks</h3>
    
            <div className="row">
                <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                    <TodoAdd handleAddTodo={ handleAddTodo }/>
                </div>

                <div className="col-lg-6 col-md-6 col-xs-12">
                    <TodoList todos={ todos } />
                </div>
            </div>
            <div className="row">
                <h6 className="display-6"> Todos.Object</h6>
                { JSON.stringify( todos ) }
            </div>
        </div>

    )
}
