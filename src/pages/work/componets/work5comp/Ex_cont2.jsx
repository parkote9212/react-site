import React from 'react';
import { useGlobal } from './Ex_cont';

const Ex_const2 = () => {
    // 1. 객체 비구조화 할당 {}을 사용합니다. 인자는 필요 없습니다.
    const { count, setCount } = useGlobal();

    // 2. 함수형 업데이트를 사용하는 것이 더 안전하고 좋은 습관입니다.
    const handleIncrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div>
            {/* 3. 버튼 태그를 올바르게 수정합니다. */}
            <button onClick={handleIncrement}>
                -1 감소
            </button>
        </div>
    );
};

export default Ex_const2;