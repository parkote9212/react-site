import React, { useCallback, useState } from 'react';

const Ex_callback3 = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const increment = useCallback(() => {
        setCount((prev) => prev + step);
    }, [step])
    return (
        <div>
            <p>Count :  {count}  </p>
            <input type="number"
                value={step} onChange={(e) => setStep(Number(e.target.value))}
            />
            <button onClick={increment}>증가</button>
        </div>
    );
};

export default Ex_callback3;