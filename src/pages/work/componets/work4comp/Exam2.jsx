import React, { useEffect, useState } from 'react';

const Exam2 = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`카운트 값이 변경됨 : ${count}`);
    }, [count])

    return (
        <div>
            <h2>예제 2: 상태 변경 감지</h2>
            <p>카운트 : {count}</p>
            <button onClick={() => setCount((c) => c + 1)} >증가</button>
        </div>
    );
};

export default Exam2;