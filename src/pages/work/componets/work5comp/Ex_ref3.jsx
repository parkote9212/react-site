import React, { useRef, useState } from 'react';

const Ex_ref3 = () => {
    const timerRef = useRef(null);
    const [count, setCount] = useState(0);

    const startTimer = () => {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => {
                setCount((prev) => prev + 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    return (
        <div>
            <p>카운트: {count}</p>
            <button onClick={startTimer}> 시작 </button>
            <button onClick={stopTimer}> 정지 </button>
        </div>
    );
};

export default Ex_ref3;