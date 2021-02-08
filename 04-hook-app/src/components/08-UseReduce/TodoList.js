import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos }) => {
    return (
        <ul className="list-group">
            {
                todos.map( (todo, i) => (
                    <TodoListItem 
                        key={ todo.id }
                        todo={ todo }
                        index={ i }
                    />
                ))
            }
        </ul>
    )
}
