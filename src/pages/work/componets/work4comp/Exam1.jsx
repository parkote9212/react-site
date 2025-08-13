import React, { useEffect } from 'react';

const Exam1 = () => {

    useEffect(() => {
        console.log("컴포넌트가 마운트되었습니다.");
    },[])
    return (
        <div>
            <h2>예제 1: 마운트 시 콘솔 출력</h2>
        </div>
    );
};

export default Exam1;