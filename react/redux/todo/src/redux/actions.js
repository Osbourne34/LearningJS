const ADD_TODO = 'ADD_TODO';
const EDIT_TODO = 'EDIT_TODO';
const DELETE_TODO = 'DELETE_TODO';

export const addTodoAction = (payload) => {
    return {
        type: ADD_TODO,
        payload: {
            text: payload
        }
    }
}

export const editTodoAction = (payload) => {
    return {
        type: EDIT_TODO,
        payload
    }
}

export const deleteTodoAction = (payload) => {
    return {
        type: DELETE_TODO,
        payload: {
            id: payload
        }
    }
}