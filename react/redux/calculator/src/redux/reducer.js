const defaultState = {
    value: '0',
    isComputed: false
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {

        case 'SET_VALUE':
            if (state.value === '0') {
                return {
                    ...state,
                    value: state.value = action.payload.value
                }
            } else {
                return {
                    ...state,
                    value: state.value += action.payload.value
                }
            }

        case 'CALCULATION':
            return {
                ...state,
                value: action.payload.value,
            }

        case 'SET_ISCOMPUTED':
            return {
                ...state,
                isComputed: state.isComputed = true
            }

        case 'CLEAR_VALUE':
            return {
                ...state,
                value: state.value = '0'
            }

        default:
            return state
    }
}

export default reducer;