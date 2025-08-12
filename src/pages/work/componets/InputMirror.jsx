import { useState } from "react"

export default function InputMirror() {
    const [text, setText] = useState("")

    return (
        <>
            <h3>String 값의 상태변화 체크</h3>
            <input type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="글자를 입력해주세요"
            />
            <p>입력된 값은 : {text}</p>
        </>
    )

}