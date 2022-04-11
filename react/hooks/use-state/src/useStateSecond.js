import React, { useState } from "react";

function UseStateSecond() {

    const [time, setTime] = useState(new Date());

    const interval = setInterval(() => {
        setTime(new Date())
        clearInterval(interval);
    }, 1000);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return (
        <div className="timer">
            <h2 className="timer__title">The time is</h2>
            <div className="timer__wrap">
                <span>{hours}</span>
                <span>:</span>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds} </span>
                <span>{hours >= 0 && hours <= 12 ? 'AM' : 'PM'}</span>
            </div>
        </div>
    )
}

export default UseStateSecond;