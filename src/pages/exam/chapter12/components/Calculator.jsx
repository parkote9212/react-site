// React에서 상태(State)를 사용하기 위해 useState Hook을 가져옵니다.
import { useState } from "react";
// 자식 컴포넌트인 TemperatureInput을 가져옵니다.
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if (props.celsisus >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

// --- 순수 자바스크립트 헬퍼(Helper) 함수들 ---

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// [추가된 함수 1] 섭씨를 켈빈으로 변환
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

// [추가된 함수 2] 켈빈을 섭씨로 변환
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator() {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };
    
    // [추가된 핸들러] 켈빈 입력창이 변경될 때 실행될 함수
    const handleKelvinChange = (temperature) => {
        setTemperature(temperature);
        setScale("k");
    };


    // --- 렌더링 로직 (가장 큰 변화) ---
    // 3개 이상의 단위를 관리하기 위해 삼항 연산자 대신 if문으로 변경하여 가독성을 높였습니다.
    let celsius = '';
    let fahrenheit = '';
    let kelvin = '';
    
    if (scale === 'c') {
        celsius = temperature;
        fahrenheit = tryConvert(temperature, celsiusToFahrenheit);
        kelvin = tryConvert(temperature, celsiusToKelvin);
    } else if (scale === 'f') {
        celsius = tryConvert(temperature, fahrenheitToCelsius);
        fahrenheit = temperature;
        // 켈빈으로 바로 변환하는 대신, 기준 단위인 섭씨를 통해 변환합니다.
        kelvin = tryConvert(celsius, celsiusToKelvin);
    } else if (scale === 'k') {
        celsius = tryConvert(temperature, kelvinToCelsius);
        // 화씨로 바로 변환하는 대신, 기준 단위인 섭씨를 통해 변환합니다.
        fahrenheit = tryConvert(celsius, celsiusToFahrenheit);
        kelvin = temperature;
    }

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            {/* [추가된 입력창] 켈빈 온도 입력창 */}
            <TemperatureInput
                scale="k"
                temperature={kelvin}
                onTemperatureChange={handleKelvinChange}
            />
            <BoilingVerdict celsisus={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;