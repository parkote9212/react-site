import React, { useRef, useState } from 'react';

const Ex_ref2 = () => {
    const renderCount = useRef(0);
    const [text, setText] = useState("");

    renderCount.current += 1;
    return (
        <div>
            <input
            value={text} type="text" onChange={(e) => setText(e.target.value)} />

            <p>렌더링 횟수: {renderCount.current}</p>
        </div>
    );
};

export default Ex_ref2;