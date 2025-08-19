import React from 'react';
import { store_zu } from './store_zu';
import { store_zu2 } from './stote_zu2';

const Ex_zustand = () => {
    const { count, increament, decreament, clear } = store_zu()
    const { color, red, blue, remove } = store_zu2()
    return (
        <div>
            <p>카운트 : {count}</p>
            <button onClick={increament}> +1</button>
            <button onClick={decreament}> -1</button>
            <button onClick={clear}> 0</button>

            <p>색상 : {color}</p>
            <button onClick={red}> 빨강</button>
            <button onClick={blue}> 파랑</button>
            <button onClick={remove}> 지우기</button>

        </div>
    );
};

export default Ex_zustand;