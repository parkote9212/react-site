import { useState } from "react"

export default function ColorChanger() {

    const [color, setColor] = useState("red")

    return (
        <>

            <h3>스타일값의 상태 변화 체크</h3>
            <p>색상 변경</p>
            <p style={{ backgroundColor: color, color:"white" }}>
                좋아하는 색은 {color}입니다.
            </p>
            <button onClick={() => setColor("red")}>빨강</button>
            <button onClick={() => setColor("blue")}>파랑</button>
            <button onClick={() => setColor("orange")}>오렌지</button>
            <button onClick={() => setColor("green")}>초록</button>
        </>
    )
}