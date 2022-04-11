import React, { useState, useRef } from "react";

function UseRefOne() {
    const [visibleInput, setVisibleInput] = useState(true);
    const [value, setValue] = useState('');

    // Не понятно как использовать useRef для этой задачи.
    const ref = useRef('');

    return (
        <div>
            <button onClick={() => setVisibleInput(true)}>Show</button>
            <button onClick={() => setVisibleInput(false)}>Hide</button>
            <label>
                <span>An input field!</span>
                {visibleInput && <input
                    value={value}
                    onChange={(e) => setValue(value => value = e.target.value)}
                    type="text" />
                }
            </label>
        </div>
    )
}

export default UseRefOne;