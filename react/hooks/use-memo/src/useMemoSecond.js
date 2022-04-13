import React, { useState, useMemo } from 'react';

function UseMemoSecond() {
    // Не понял как использовать useMemo в этой задаче
    const [valueOne, setValueOne] = useState('');
    const [valueTwo, setValueTwo] = useState('');

    return (
        <div>
            <input type="text" value={valueOne} onChange={(e) => setValueOne(e.target.value)} />
            <input type="text" value={valueTwo} onChange={(e) => setValueTwo(e.target.value)} />
            <p>{valueOne ? valueOne : 'Vasya'}</p>
        </div>
    )
}

export default UseMemoSecond;