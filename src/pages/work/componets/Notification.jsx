import React from "react";

// 컴포넌트에 적용할 스타일을 자바스크립트 객체 형태로 정의합니다.
// CSS 속성은 camelCase(예: backgroundColor)로 작성해야 합니다.
const styles = {
    wrapper: {
        margin: 8,       // margi -> margin 오타 수정
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

// React.Component를 상속받아 Notification이라는 이름의 클래스 컴포넌트를 정의합니다.
class Notification extends React.Component {
    // 생성자(constructor)는 컴포넌트가 생성될 때 가장 먼저 호출됩니다.
    constructor(props) {
        // super(props)는 부모 클래스(React.Component)의 생성자를 호출하는 것으로, 항상 맨 처음에 와야 합니다.
        super(props);

        // this.state는 컴포넌트 내부에서 관리할 상태(state)를 저장하는 객체입니다.
        // 현재는 비어있지만, 나중에 상태가 필요하면 여기에 추가할 수 있습니다. (예: this.state = { isRead: false };)
        this.state = {};
    }

    // render() 메서드는 컴포넌트가 화면에 어떻게 보일지를 정의하는 부분입니다.
    // 클래스 컴포넌트에서 반드시 필요한 메서드입니다.
    render() {
        return (
            // 최상위 div에 wrapper 스타일을 적용합니다.
            <div style={styles.wrapper}>
                {/* 메시지를 보여주는 span 태그에 messageText 스타일을 적용합니다. */}
                <span style={styles.messageText}>
                    {/* this.props는 부모 컴포넌트로부터 전달받은 속성(props)들을 담고 있는 객체입니다.
                      여기서는 부모로부터 받은 'message'라는 prop을 화면에 출력합니다.
                    */}
                    {this.props.message}
                </span>
            </div>
        );
    }
}

// 다른 파일에서 Notification 컴포넌트를 사용할 수 있도록 export(내보내기) 합니다.
export default Notification;