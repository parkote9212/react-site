import React, { useMemo, useState } from 'react';

const Exmemo5 = () => {

    const [price, setPrice] = useState(1000);
    const [quantity, setQuantity] = useState(1);
    const [discount, setDiscount] = useState(0.1);

    const total = useMemo(() => {
        console.log("총액계산");
        return (
            price * quantity * (1 - discount)
        );
    }, [price, quantity, discount]);

    return (
        <div>
            <h2>가격 계산기</h2>

            {/* 가격 입력 */}
            <div>
                <label>가격: {" "} </label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(+e.target.value)}
                /> 원
            </div>

            {/* 수량 입력 */}
            <div>
                <label>수량: {" "} </label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(+e.target.value)}
                /> 개
            </div>

            {/* 할인율 입력 */}
            <div>
                <label>할인율: {" "} </label>
                <input
                    type="number"
                    value={discount}
                    onChange={(e) => setDiscount(+e.target.value)}
                /> (예: 0.1 = 10%)
            </div>

            <hr />
            {/* 총액 표시 */}
            <h2>총액: {total.toFixed(0)}원</h2>
        </div>
    );
};

export default Exmemo5;