import React, { useReducer } from "react";

const actions = {
    ADDFEATURE: 'ADDFEATURE',
    DELETEFEATURE: 'DELETEFEATURE'
}

function newState(state, arrOne, arrTwo, start) {
    const remote = state[arrOne].splice(start, 1);
    const newArr = [...state[arrTwo], ...remote];
    return {
        ...state,
        [arrTwo]: newArr
    }
}

function reducer(state, action) {
    switch (action.type) {
        case actions.ADDFEATURE:
            return newState(state, 'features', 'addedFeatures', action.payload);
        case actions.DELETEFEATURE:
            return newState(state, 'addedFeatures', 'features', action.payload);
        default: return { ...state }
    }
}

function UseReducerSecond() {
    const product = {
        name: '2019 Ford Mustang',
        price: 26395,
        features: [
            { feature: 'Спорт комплектация', price: 1500 },
            { feature: 'Premium sound system', price: 500 },
            { feature: 'spoiler', price: 250 },
            { feature: 'V-6 мотор', price: 1500 }
        ],
        addedFeatures: []
    }
    const [state, dispach] = useReducer(reducer, product);

    const { name, price, features, addedFeatures } = state;

    return (
        <div className="wrap">
            <CardProduct onClick={dispach} name={name} price={price} addedFeatures={addedFeatures} />
            <CardFeatures onClick={dispach} price={price} features={features} addedFeatures={addedFeatures} />
        </div>
    )
}

function CardProduct(props) {
    const { name, price, addedFeatures, onClick } = props;

    return (
        <div className="card">
            <p>{name}</p>
            <div>Amount: ${price}</div>
            <div style={{ fontWeight: '700', marginTop: '15px' }}>Added: </div>
            <ul>
                {addedFeatures.length ? addedFeatures.map((item, id) => {
                    return (
                        <li className="feature-item" key={id}>
                            <button onClick={() => onClick({ type: actions.DELETEFEATURE, payload: id })}>Delete</button>
                            <div>{item.feature}</div>
                        </li>)
                }) : <div>.</div>}
            </ul>
        </div>
    )
}

function CardFeatures(props) {
    const { features, addedFeatures, price, onClick } = props;

    let totalPrice = price;

    if (addedFeatures.length) {
        totalPrice = price + addedFeatures.map(i => i.price).reduce((num, prevNum) => num + prevNum);
    }

    return (
        <div className="card">
            <p>Additional Features</p>
            <ul>
                {features.length ? features.map((item, id) => {
                    return (
                        <li className="feature-item" key={id}>
                            <button onClick={() => onClick({ type: actions.ADDFEATURE, payload: id })}>Add</button>
                            <div>{item.feature} (+{item.price})</div>
                        </li>)
                }) : <div style={{ marginTop: '10px' }}>Nice looking car!</div>}
            </ul>
            <div style={{ marginTop: '10px' }}>Total Amount: {totalPrice} </div>
        </div>
    )
}

export default UseReducerSecond;