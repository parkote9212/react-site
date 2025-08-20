import React from 'react';

// 컴포넌트 밖에서 미리 값을 정의해두면 재사용하기 좋고 코드가 깔끔해집니다.
// 'c'나 'f' 같은 키(key)를 받아서 '섭씨', '화씨' 같은 전체 이름을 찾아주는 객체(일종의 사전)입니다.
const scaleNames = {
    c: "섭씨",
    f: "화씨",
    k: "절대",
};

// TemperatureInput 컴포넌트는 온도를 입력받는 UI 부분을 담당합니다.
// 부모 컴포넌트로부터 props를 통해 필요한 데이터와 함수를 전달받습니다.
function TemperatureInput(props) {
    
    // input 창의 내용이 변경될 때마다 호출될 함수입니다.
    // 키보드를 한 번 타이핑할 때마다 실행된다고 생각하면 쉽습니다.
    const handleChange = (event) => {
        // event.target.value는 사용자가 input 창에 입력한 최신 텍스트 값입니다.
        // 이 값을 부모로부터 전달받은 onTemperatureChange 함수에 담아 실행시킵니다.
        // 즉, "부모님, 방금 값이 이걸로 바뀌었어요!"라고 알려주는 것과 같습니다.
        props.onTemperatureChange(event.target.value);
    };

    // return 안의 코드가 실제 화면에 그려지는 부분(JSX)입니다.
    return (
        // <fieldset>은 관련된 입력 요소들을 그룹으로 묶어주는 태그입니다.
        <fieldset>
            {/* <legend>는 fieldset 그룹의 제목을 나타냅니다. */}
            <legend>
                {/* 부모가 내려준 props.scale 값('c' 또는 'f')을 사용해서
                  scaleNames 객체에서 해당하는 한글 이름('섭씨' 또는 '화씨')을 찾아 보여줍니다.
                  JSX 안에서 {}를 쓰면 자바스크립트 코드를 실행할 수 있습니다.
                */}
                온도를 입력해 주세요 (단위: {scaleNames[props.scale]})
            </legend>
            
            {/* 이것이 바로 '제어 컴포넌트(Controlled Component)'의 핵심입니다.
              input의 동작 방식 두 가지를 부모로부터 받은 props로 제어합니다.
            */}
            <input 
                // 1. value: input 창에 표시될 값은 항상 부모가 주는 props.temperature 값입니다.
                //    input이 스스로 값을 기억하는 게 아니라, 부모의 상태(State)를 그대로 보여주는 것입니다.
                value={props.temperature} 
                
                // 2. onChange: input 창에 변화가 생기면(사용자가 타이핑하면) handleChange 함수를 실행합니다.
                //    이 함수는 위에서 정의했듯이, 변경된 값을 다시 부모에게 알려주는 역할을 합니다.
                onChange={handleChange} 
            />
        </fieldset>
    );
}

// 이 TemperatureInput 컴포넌트를 다른 파일에서 import해서 사용할 수 있도록 내보냅니다(export).
export default TemperatureInput;