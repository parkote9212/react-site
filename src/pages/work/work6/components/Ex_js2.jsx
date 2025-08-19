import React, { useState } from 'react';
import { store_public } from './store_js';

const Ex_js2 = () => {
    //객체를 바로 호출하면 오류
    const [count, setCount] = useState(store_public.count)

    const handleClick1 = () => {
        store_public.increament();

        setCount(store_public.count);
    };
    const handleClick2 = () => {
        store_public.decreament();

        setCount(store_public.count);
    };
    const handleClick3 = () => {
        store_public.reset();

        setCount(store_public.count);
    };

    return (
        <div>
            <p>카운트 : {count}</p>
            <button onClick={handleClick1}>1증가</button>
            <button onClick={handleClick2}>1감소</button>
            <button onClick={handleClick3}>리셋</button>

        </div>
    );
};

export default Ex_js2;