const defaultState = {
    default: 'In between',
    condition: [
        { liquid: 'watery' },
        { gas: 'like vapor' },
        { solid: 'ice ice' },
    ]
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'CHAHGE_CONDITION':
            return {
                ...state,
                default: action.condition
            }

        default:
            return state
    }
}

export default reducer;