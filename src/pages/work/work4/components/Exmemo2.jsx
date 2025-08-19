import React, { useMemo, useState } from 'react';

function heavyCalculation(num) {
    console.log("무거운 계산 실행중")
    let total = 0;
    for (let i = 0; i < 100; i++) {
        total += num
    }
    return total;
}

const Exmemo2 = () => {
    const [num, setNum] = useState(1);
    const [theme, setTheme] = useState(false);

    const total = useMemo(() => {
        return heavyCalculation(num);
    }, [num]);
    return (
        <div
         style={{background: theme ? "#222" : "#fff",
            color: theme ? "#fff" : "#000",}}
        >

            <input
                type="number" value={num}
                onChange={(e) => setNum(Number(e.target.value))}
            />
            <p>결과 {total}</p>
            <button onClick={() => setTheme((t) => !t)}>테마변경</button>

        </div>
    );
};

export default Exmemo2;