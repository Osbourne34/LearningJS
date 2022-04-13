import React, { useState, useEffect } from "react";

function UseEffectOne() {
    
    const [count, setCount] = useState(0);
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    const handler = () => {
        setCount(count + 1)
    }

    const mouseMoveHandler = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler)
    }, [])

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handler}>click me</button>
            <div>position X: {position.x} </div>
            <div>position Y: {position.y} </div>
        </div>
    )
}

export default UseEffectOne;