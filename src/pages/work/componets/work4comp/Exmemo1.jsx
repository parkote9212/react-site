import React, { useMemo, useState } from 'react';

const Exmemo1 = () => {
    const [count, setCount] = useState(0);

    const power = useMemo(() => {
        console.log("제곱 계산중")

        return count ** 2

    }, [count])


    return (
        <div>
            <h1>count : {count}</h1>
            <h1>double : {power}</h1>
            <button onClick={() => setCount((c) => c + 1)}> 1++</button>
        </div>
    );
};

export default Exmemo1;