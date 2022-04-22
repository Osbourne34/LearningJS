import React from "react";

import './IngredientItem.css';

function IngredientItem(props) {
    const { name, price, count, onCountPlus, onCountMinus } = props;
    const isDisabled = count <= 0 ? true : false;
    return (
        <div className="ingredient-item p-3 border-bottom d-flex align-items-center justify-content-between">
            <div>
                <div className="fw-bold">{name}</div>
                <div className="text-secondary">{price}$</div>
            </div>
            <div className="d-flex align-items-center">
                <button 
                    disabled={isDisabled}
                    onClick={onCountMinus}
                    className="btn btn-danger fw-bold">-</button>
                <div className="ingredient-item__count border rounded border-secondary bg-secondary bg-opacity-25">{count}</div>
                <button
                    onClick={onCountPlus}
                    className="btn btn-success fw-bold"
                >+</button>
            </div>
        </div>
    )
}

export default IngredientItem;