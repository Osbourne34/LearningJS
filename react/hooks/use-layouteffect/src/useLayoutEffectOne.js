import React, { useLayoutEffect, useState } from "react";

function UseLayoutEffectOne() {
    const [num, setNumber] = useState(0);
    
    const randomNum = () => {
        setNumber((state) => state = Math.random() * 2000);
    }

    const runTest = () => {
        setInterval(randomNum, 100);
    }

    useLayoutEffect(() => {
        randomNum()
    }, [])

    return (
        <div>
            <p>{num}</p>
            <button onClick={randomNum}>Change number</button>
            <button onClick={runTest}>Run test</button>
        </div>
    )
}

export default UseLayoutEffectOne;