import React, { useRef } from 'react';

const Ex_ref5 = () => {
    const itemsRef = useRef([]);

    const addItem = () => {
        const newItem = `Item ${itemsRef.current.length + 1}`
        // 배열에 직접 추가
        itemsRef.current = [...itemsRef.current, newItem];
        //콘솔에서 배열 확인
        console.log(itemsRef.current);
    };

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {itemsRef.current.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Ex_ref5;