const initialState = [{
    id: 1,
    todo: 'Comprar Arena Zu',
    done: false
}]

const newTodo = {
    id = 2,
    todo: 'Reparar Puerta',
    done: false
}


let todos = todoReducer();

const addTodoAction = {
    type: 'add',
    payload: newTodo
}

const todoReducer = (state = initialState, action) => {
    if (action?.type === 'add') {
        return [...state, action.payload];
    }

    return state;
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);





