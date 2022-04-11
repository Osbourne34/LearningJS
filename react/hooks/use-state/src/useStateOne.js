import React, { useState } from 'react';

function UseStateOne() {
    const [items, setItems] = useState([
        { text: 'item' },
        { text: 'item' },
        { text: 'item' }
    ]);
    let [id, setId] = useState(null);

    const elements = items.map((item, idx) => {
        return <li onClick={() => setId(idx)} key={idx}>{item.text} {idx}</li>
    });

    return (
        <div>
            <p>clicked: {id}</p>
            <ul>
                {elements}
            </ul>
            <button
                onClick={() => {
                    setItems([...items, { text: 'item' }])
                    setId(id = null)}}>
                Add</button>
        </div>
    )
}

export default UseStateOne;