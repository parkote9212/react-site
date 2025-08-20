// compo/WorkLayout.js

import { Link, Outlet } from "react-router-dom";

function ExampleLayout() {
    return (
        <div>
            <h3>과제 리스트</h3>
            {/* 기존 과제 링크들을 이곳으로 옮겨옵니다. */}
            <nav>
                <ul>
                
                   <li>
                        <Link to="chapter7">Chapter 7</Link>
                    </li>
                   <li>
                        <Link to="chapter8">Chapter 8</Link>
                    </li>
                     <li>
                        <Link to="chapter9">Chapter 9</Link>
                    </li>
                   <li>
                        <Link to="chapter10">Chapter 10</Link>
                    </li>
                     <li>
                        <Link to="chapter11">Chapter 11</Link>
                    </li>
                     <li>
                        <Link to="chapter12">Chapter 12</Link>
                    </li>
                     <li>
                        <Link to="chapter13">Chapter 13</Link>
                    </li>
                     <li>
                        <Link to="chapter14">Chapter 14</Link>
                    </li>
                     <li>
                        <Link to="chapter15">Chapter 15</Link>
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

export default ExampleLayout;