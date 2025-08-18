import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import { decreasement, increasement, increasmentByAmount } from './redux_slice';


const Ex_redux = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>리덕스 카운터 : {count}</h2>
<button onClick={() => dispatch(increasement())}>+1</button>
<button onClick={() => dispatch(decreasement())}>-1</button>
<button onClick={() => dispatch(increasmentByAmount(5))}>+5</button>
        </div>
    );
};

export default Ex_redux;