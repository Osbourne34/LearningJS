import React, { useState, useEffect } from "react";

function UseEffectSecond() {
    // Не очень понятно как использовать useEffect в этой задаче.
    const colors = [
        { color: 'sea' },
        { color: 'sand' },
        { color: 'peach' }
    ]

    const [currentColor, setCurrentColor] = useState('sand')

    const optionsSelect = colors.map((color, id) => <option key={id}>{color.color}</option>)
    const classColor = "color-box " + currentColor;

    return (
        <div className="color">
            <select value={currentColor} onChange={(e) => setCurrentColor(e.target.value)}>
                {optionsSelect}
            </select>
            <div className={classColor}></div>
        </div>
    )
}

export default UseEffectSecond;
