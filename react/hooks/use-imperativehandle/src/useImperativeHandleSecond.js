import React, { forwardRef, useImperativeHandle, useRef } from "react";

function UseImperativeHandleSecond() {
    const ref = useRef();

    return (
        <React.Fragment>
            <CustomInput ref={ref} />
            <div style={{ marginTop: "15px" }}>
                <button onClick={() => ref.current.focus()} style={{ display: "block" }}>Focus</button>
                <button onClick={() => ref.current.setValue()}>Other</button>
            </div>
        </React.Fragment>
    )
}

const CustomInput = forwardRef((props, ref) => {
    const value = '???';
    const input = useRef();
    useImperativeHandle(ref, () => ({
        focus,
        setValue
    }))

    const focus = () => {
        input.current.focus();
    }
    const setValue = () => {
        input.current.value = value;
    }

    return (
        <input ref={input} type="text" />
    )
})

export default UseImperativeHandleSecond;