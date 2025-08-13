import React, { useEffect, useState } from 'react';

const Exam3 = () => {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((s) => s +1)
        },1000)
        
        return () => {
            clearInterval(timer)
            console.log("타이머 종료")
        }
    },[])

    return (
        <div>
        <p>{seconds}초 경과</p>      
        </div>
    );
};

export default Exam3;