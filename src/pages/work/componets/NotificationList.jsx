import React from "react";
import Notification from "./Notification";

// 미리 준비된 알림 데이터 배열
const reservedNotifications = [
    {
        id: 1, // 각 항목을 구분하기 위해 고유한 key를 위한 id 추가
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "이제 곧 미팅이 시작됩니다.",
    },
    // 나중에 알림을 더 추가할 수 있습니다.
    // { id: 3, message: "세 번째 알림입니다." }
];

// setInterval 함수를 참조하기 위한 전역 변수
var timer;

// NotificationList 클래스 컴포넌트 정의
class NotificationList extends React.Component {
    // 1. 생성자: 컴포넌트가 처음 생성될 때 호출됨
    constructor(props) {
        super(props);

        // 컴포넌트의 초기 상태(state) 설정
        this.state = {
            notifications: [], // 화면에 표시될 알림들을 담을 빈 배열
        };
    };

    // 2. componentDidMount: 컴포넌트가 화면에 마운트(생성)된 직후에 호출됨
    // 주로 외부 데이터 로딩(API 호출), 타이머 설정 등을 여기서 수행합니다.
    componentDidMount() {
        // setInterval을 사용하여 1초(1000ms)마다 특정 작업을 반복 수행
        timer = setInterval(() => {
            // 현재 state의 notifications 배열 길이가 예약된 알림 배열의 길이보다 작을 때만 실행
            if (this.state.notifications.length < reservedNotifications.length) {
                const index = this.state.notifications.length;

                // [개선된 부분]
                // state를 직접 수정하지 않고, 새로운 배열을 만들어 상태를 업데이트합니다. (불변성 유지)
                // 기존 notifications 배열에 새로운 알림 하나를 추가한 새 배열을 만듭니다.
                const newNotifications = this.state.notifications.concat(reservedNotifications[index]);
                
                // setState를 사용하여 상태를 업데이트하면, React가 자동으로 render() 함수를 다시 호출(리렌더링)합니다.
                this.setState({
                    notifications: newNotifications
                });
            } else {
                // 더 이상 추가할 알림이 없으면 타이머를 정지시킵니다.
                clearInterval(timer);
            }
        }, 1000);
    }

    // 3. componentWillUnmount: 컴포넌트가 화면에서 언마운트(제거)되기 직전에 호출됨
    // 여기서 componentDidMount에서 설정했던 타이머 등을 정리(clean-up)해야 메모리 누수를 방지할 수 있습니다.
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    // 4. render: 화면에 표시할 UI를 반환
    render(){
        return(
            <div>
                {/* this.state.notifications 배열을 map 함수를 사용해 순회하면서
                    각각의 알림(notification)에 대해 Notification 컴포넌트를 생성합니다. */}
                {this.state.notifications.map((notification) => {
                    // map 사용 시 각 요소를 구분하기 위해 고유한 'key' prop을 제공하는 것이 중요합니다.
                    return (
                        <Notification 
                            key={notification.id} 
                            message={notification.message} 
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;