import React from 'react';

export const TodoListItem = ({ todo, index }) => {
    return (
        <li key={ todo.id } className="list-group mb-2" >
            <div className="card">
                <div className="card-body">
                    <span className={ `${ todo.done && 'complete' }`}>{ index + 1 } { todo.desc }</span>
                    
                    <div className="button-group">
                            <button type="button" className="btn btn-outline-danger">
                                <i className="bi bi-trash-fill"></i> Delete
                            </button>    
                   </div>
                </div>
            </div>
        </li>
        
    )
}
