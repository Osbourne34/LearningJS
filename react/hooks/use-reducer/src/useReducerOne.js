import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'select':
            return state.map(item => {
                if (item.id === action.payload) {
                    item.selected = !item.selected
                }
                return item;
            })
        default:
            return [...state]
    }
}

function UseReducerOne() {
    const data = [
        { name: 'Vasya', selected: false, id: 1 },
        { name: 'Peter', selected: false, id: 2 },
        { name: 'Anna', selected: false, id: 3 },
    ]

    const [state, dispach] = useReducer(reducer, data);

    const items = state.map((item) => {
        return <li
            key={item.id}
            onClick={() => dispach({ type: 'select', payload: item.id })}>
            {item.selected ? '[x]' : '[ ]'}
            {item.name}
        </li>
    })

    return (
        <ul style={{padding: '30px'}}>
            {items}
        </ul>
    )
}

export default UseReducerOne;