import React, { useState, useMemo } from "react";

function UseMemoOne() {
    const [num, setNum] = useState(0);

    const factorial = (n) => {
        return n ? n * factorial(n - 1) : 1;
    }

    const factorialMemo = useMemo(() => {
        return factorial(num);
    }, [num]);

    const onInputHandler = (e) => {
        setNum(e.target.value);
    }

    return (
        <div>
            <input onChange={onInputHandler} value={num} type="text" />
            <p>The factorial of {num} is {factorialMemo}</p>
        </div>
    )
}

export default UseMemoOne;