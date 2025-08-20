// compo/Layout.js

import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            {/* 상위 내비게이션을 홈, 로그인, 과제방으로 변경 */}
            <nav>
                <ul>
                    <li>
                        <Link to="">Home</Link>
                    </li>
                    <li>
                        <Link to="login">Login</Link>
                    </li>
                    <li>
                        {/* '과제방' 페이지로 이동하는 링크 추가 */}
                        <Link to="work">과제방</Link>
                    </li>
                    <li>
                        {/* '과제방' 페이지로 이동하는 링크 추가 */}
                        <Link to="exam">예제방</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            {/* ↓ 이 Outlet 자리에 Home, Login 또는 '과제방' 컴포넌트가 렌더링됩니다. */}
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;