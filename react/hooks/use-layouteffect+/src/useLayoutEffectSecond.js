import React, { useState, useRef } from "react";

function UseLayoutEffectSecond() {
    // Не очень понял как тут использовать useLayoutEffect hook;
    const [deg, setDeg] = useState(0);
    const input = useRef();

    const handle = () => {
        setDeg(input.current.value);
    }

    return (
        <div className="wrap">
            <div style={{ transform: `rotate(${deg}deg)` }} className="box"></div>
            <input ref={input} type="number" />
            <button onClick={handle}>Rotate</button>
        </div >
    )
}

export default UseLayoutEffectSecond;