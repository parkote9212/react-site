import { useState } from "react"

export default function Counter() {
    // 훅 useState 사용하기
    // const [상수이름, 세터함수] = useState(초기값);
    const [count, setCount] = useState(0);

    return (
        <>
            <h3>Number값의 변화 체크</h3>
            <h2>카운터 : {count}</h2>
            <button onClick={() => setCount(count + 1)}> 1씩 ++ 증가</button>
            <button onClick={() => setCount(count - 1)}> 1씩 -- 감소</button>
        </>
    )

}
// export default Counter