import React, { useContext, useReducer } from "react";

function reducer(state, action) {

    switch (action.type) {
        case 'kill':
            const current = state.find(item => item.id === action.payload);
            current.isdead = !current.isdead;
            return [...state.slice(0, action.payload - 1), current, ...state.slice(action.payload)];
        case 'reviveEveryone':
            return state.map(item => {
                item.isdead = false;
                return item;
            })
    }
}

const MyContext = React.createContext();

function UseReducerThird() {
    const data = [
        { text: 'Red', isdead: false, id: 1 },
        { text: 'Blue', isdead: false, id: 2 },
        { text: 'Purple', isdead: false, id: 3 },
        { text: 'Green', isdead: false, id: 4 },
        { text: 'White', isdead: false, id: 5 },
        { text: 'Pink', isdead: false, id: 6 },
        { text: 'Orange', isdead: false, id: 7 }
    ];
    const [state, dispach] = useReducer(reducer, data);

    const hander = () => {
        dispach({ type: 'reviveEveryone' })
    }

    return (
        <div className="wrap wrap__light">
            <MyContext.Provider value={{
                dispach
            }}>
                <List data={state} />
            </MyContext.Provider>
            <div>
                <h2>Оживите свою команду</h2>
                <button onClick={hander}>Оживить весь экипаж</button>
            </div>
        </div>
    )
}

function List(props) {
    const { data } = props;

    const items = data.map((item) => {
        return <Item key={item.id} {...item} />
    })

    return (
        <div className="list">
            <h2>Ваш экипаж</h2>
            <ul>
                {items}
            </ul>
        </div>
    )
}

function Item(props) {
    const context = useContext(MyContext);
    const { text, isdead, id } = props;
    const dead = isdead ? 'dead' : '';

    const handler = () => {
        context.dispach({ type: 'kill', payload: id });
    }

    return (
        <li>
            <div className={dead}>{text}</div>
            <button onClick={handler}>{isdead ? 'Возродить' : 'Убить'}</button>
        </li>
    )
}

export default UseReducerThird;