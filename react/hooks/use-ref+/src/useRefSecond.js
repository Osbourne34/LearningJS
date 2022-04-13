import React, { useRef } from 'react';

function UseRefSecond() {
    const refInput = useRef();

    const onFocus = () => {
        refInput.current.focus();
    }
    return (
        <div className="wrap">
            <div className="text">Enter a name:</div>
            <div className="inner">
                <input ref={refInput} type="text" />
                <button onClick={onFocus}>Focus</button>
            </div>
            <button>Remove Focus</button>
        </div>
    )
}

export default UseRefSecond;