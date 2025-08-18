import React, { useCallback, useEffect, useState } from 'react';

const Ex_callback5 = () => {
    const [count,setCount] = useState(0);

const handleKeyPress = useCallback((e) => {
    if (
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight"
    ) {
        setCount((prev) => prev + 1);
    }
}, []);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        console.log('이벤트 등록');
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
            console.log('이벤트 제거');
        };
    }, [handleKeyPress])

    return (
        <>
<p> ArrowUp,Down,Left,Right 키를 눌러 증가</p>
<p>Count :  {count}</p>
        </>

    );
};

export default Ex_callback5;