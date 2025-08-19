import React, { useMemo, useState } from 'react';

const users = [
    { id: 1, name: "kim", active: true },
    { id: 2, name: "lee", active: false },
    { id: 3, name: "park", active: true },
    { id: 4, name: "choi", active: false },
];

const Exmemo3 = () => {
    // '활성 사용자만 보기' 상태를 관리 (true이면 활성 사용자만)
    const [showActive, setShowActive] = useState(true);

    // showActive 값이 변경될 때만 필터링 로직을 다시 실행
    const filteredUsers = useMemo(() => {
        console.log("사용자 필터링 실행");
        return users.filter((user) => (user.active === showActive));
    }, [showActive])

    return (
        <div>
            <button
                // 이전 상태(prev)를 받아와 반대 값(!prev)으로 토글
                onClick={() => setShowActive((prev) => !prev)}
            >
                {showActive ? "비활성 사용자 보기" : "활성 사용자만 보기"}
            </button>
            <ul>
                {filteredUsers.map((user) => (
                    // JSX 문법 오류 수정
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Exmemo3;