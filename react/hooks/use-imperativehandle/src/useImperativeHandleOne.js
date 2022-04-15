import React, { forwardRef, useImperativeHandle, useState, useRef } from "react";

function UseImperativeHandleOne() {
    const ref = useRef();

    return (
        <React.Fragment>
            <Counter ref={ref} />
            <button onClick={() => ref.current.increment()}>Btn2 +1</button>
        </React.Fragment>
    )
}

const Counter = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);
    useImperativeHandle(ref, () => ({
        increment
    }));

    const increment = () => setCount(count + 1);

    return (
        <React.Fragment>
            <button onClick={increment}>Click +1</button>
            <p>{count}</p>
        </React.Fragment>
    )
})

export default UseImperativeHandleOne;