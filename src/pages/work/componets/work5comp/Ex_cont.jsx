import React, { createContext, useContext, useState } from 'react';

// 콘텍스트 생성
const GlobalContext = createContext()

const Ex_cont = ({children}) => {
    const [count, setCount] = useState(0)


    return (
        <div>
            <GlobalContext.Provider value={{ count, setCount }}>
                {children}
            </GlobalContext.Provider>
        </div>
    );
};

export default Ex_cont;

export const useGlobal = () => useContext(GlobalContext)