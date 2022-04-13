import React, { useState, useMemo } from "react";

function UseMemoOne() {
    const [value, setValue] = useState(0);

    const factorial = (num) => {
        let res = 1;
        if (num <= 0) {
            return 0;
        } else {
            for (let i = 1; i <= num; i++) {
                res = res * i;
            }
        }
        return res;
    }

    const factorailMemo = useMemo(() => {
        return factorial(value);
    }, [value]);

    return (
        <div>
            <input onChange={(e) => setValue(e.target.value)} value={value} type="number" />
            <p>Факториал числа {value} равен {factorailMemo}</p>
        </div>
    )
}

export default UseMemoOne;