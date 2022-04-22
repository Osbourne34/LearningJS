import React from "react";

import './Pizza.css';

import PizzaItem from './../pizza-item';

function Pizza(props) {
    const { basePizza, ingredients } = props.pizza;

    return (
        <div className="pizza col-9">
            <h3 className="text-center">Your pizza:</h3>
            <div className="row" style={{ marginTop: "23px" }}>
                <PizzaItem image={basePizza.image} />
                {ingredients && ingredients.map((item, id) => {
                    return <PizzaItem key={id} image={item.image} />
                })}
            </div>
        </div>
    )
}

export default Pizza;