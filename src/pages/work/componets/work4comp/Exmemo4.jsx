import React, { useMemo, useState } from 'react';

// React.memo를 사용해 props가 변경되지 않으면 리렌더링을 방지하는 자식 컴포넌트
const ChildComponent = React.memo(({ config }) => {
    console.log("자식 컴포넌트 리렌더링!");
    return <div style={{ color: config.theme === 'dark' ? 'white' : 'black' }}>
        현재 테마: {config.theme}
    </div>;
});

const Exmemo4 = () => {
    const [theme, setTheme] = useState("light");
    const [count, setCount] = useState(0);

    // 1. useMemo로 config 객체를 메모이제이션
    // theme 값이 변경될 때만 새로운 객체를 생성한다.
    const config = useMemo(() => ({
        theme: theme
    }), [theme]);

    // 2. onClick 문법 오류 수정
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div style={{ background: theme === 'dark' ? '#222' : '#fff', padding: '20px' }}>
            <button onClick={toggleTheme}>테마변경</button>
            <hr />
            <button onClick={() => setCount(c => c + 1)}>카운트 증가</button>
            <p>Count: {count}</p>
            <hr />
            <ChildComponent config={config} />
        </div>
    );
};

export default Exmemo4;