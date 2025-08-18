// compo/WorkLayout.js

import { Link, Outlet } from "react-router-dom";

function WorkLayout() {
    return (
        <div>
            <h3>과제 리스트</h3>
            {/* 기존 과제 링크들을 이곳으로 옮겨옵니다. */}
            <nav>
                <ul>
                    <li>
                        <Link to="work1">리액트 usestate사용</Link>
                    </li>
                    <li>
                        <Link to="work2">리액트 예제 P174</Link>
                    </li>
                    <li>
                        <Link to="work3">리액트 예제 P189</Link>
                    </li>
                    <li>
                        <Link to="work4">리액트 후크 Effect,Memo</Link>
                    </li>
                     <li>
                        <Link to="work6">리액트 Context,Store(zu,리덕스)</Link>
                    </li>
                </ul>
            </nav>

            <hr />
            
            <h4>과제 내용</h4>
            {/* ↓ 이 Outlet 자리에 work1, work2 등 각 과제 컴포넌트가 렌더링됩니다. */}
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default WorkLayout;