const defaultState = {
    todos: [
        { text: 'todo-1', id: Math.random() },
        { text: 'todo-3423', id: Math.random() }
    ]
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {

        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { text: action.payload.text, id: Math.random() }
                ]
            }

        case 'EDIT_TODO':
            return {
                ...state,
                todos: [...state.todos.map(item => {
                    if (item.id === action.payload.id) {
                        item.text = action.payload.value;
                    }
                    return item;
                })]
            }
            
        case 'DELETE_TODO':
            return {
                ...state,
                todos: [...state.todos.filter(item => item.id !== action.payload.id)]
            }

        default:
            return state
    }
}

export default reducer;