import { useState } from "react";

export default function TodoList() {
    // 현재 입력 중인 할 일 텍스트를 저장
    const [todo, setTodo] = useState("");
    // 할 일 목록을 배열로 저장
    const [todos, setTodos] = useState([]);
//입력값이 공백이 아닌경우, 기존 할일 목록에 새로운 할일을 추가
    const addTodo = () => {
        // 공백을 모두 제거한 값이 빈 문자열이 아니면
        if (todo.trim()) {
            // 기존 todos배열의 모든 항목을 그대로 복사하고,
            // 그뒤에 새로운 할 일을 추가한 새로운 배열을 만든다.
            setTodos([...todos, todo])
            // 입력값 초기화
            setTodo("");
        }
    };
    return (
        <>
   <h3>할 일 목록</h3>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {/* 배열의 각각의 값을 꺼내서 목록으로 표시 */}
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}