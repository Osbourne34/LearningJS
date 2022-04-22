import React from "react";

import './PizzaItem.css';

function PizzaItem(props) {
    const { image, children } = props;
    return (
        <div className="pizza-item col-3">
            <img src={image} />
            {children}
        </div>
    )
}

export default PizzaItem;