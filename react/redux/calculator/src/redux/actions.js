export const setValueAction = (payload) => {
    return {
        type: 'SET_VALUE',
        payload: {
            value: payload
        }
    }
}

export const calculationAction = (payload) => {
    return {
        type: 'CALCULATION',
        payload: {
            value: payload
        }
    }
}

export const clearValueAction = () => {
    return {
        type: 'CLEAR_VALUE'
    }
}

export const setIsComputedAction = () => {
    return {
        type: 'SET_ISCOMPUTED'
    }
}