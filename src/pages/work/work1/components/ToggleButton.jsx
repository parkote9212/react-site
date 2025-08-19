import { useState } from "react"

export default function ToggleButton() {

    const [isOn, setIsOn] = useState(false)

    return (
        <>
            <h3>Boolean값의 상태 변화 체크</h3>
            <button onClick={() => setIsOn(!isOn)}>
               버튼 {isOn ? "켜짐" : "꺼짐"}
            </button>
        </>
    )
}