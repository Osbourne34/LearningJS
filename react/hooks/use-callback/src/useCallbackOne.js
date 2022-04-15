import React, { useCallback, useMemo, useState } from 'react';

function UseCallbackOne() {

    // Не понял как можно решить задачу с помощью useCallback.
    // Сделал вариант с useMemo

    // 2-ую задачу не очень понял, на видео плохо видно.

    const [countOne, setCountOne] = useState(10);
    const [countTwo, setCountTwo] = useState(20);
    const [countThree, setCountThree] = useState(10000);

    const totalOfCounters = (countOne, countTwo) => {
        return countOne + countTwo;
    }

    const sum = useMemo(() => {
        return totalOfCounters(countOne, countTwo)
    }, [countOne, countTwo])

    const countThreeSum = useMemo(() => {
        return countThree;
    }, [countThree])

    return (
        <>
            <div className="wrap">
                {countOne} <button onClick={() => setCountOne(countOne + 1)}>+ 1</button>
            </div>
            <div className="wrap">
                {countTwo} <button onClick={() => setCountTwo(countTwo - 1)}>- 1</button>
            </div>
            <div className="wrap">
                Result: {sum}
            </div>
            <div className="wrap">
                {countThreeSum} <button onClick={() => setCountThree(countThree - 1)}>- 1</button>
            </div>
        </>
    )
}

export default UseCallbackOne;