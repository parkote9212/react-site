// compo/Layout.js

import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            {/* 이 내비게이션은 어떤 페이지를 가든 공통으로 보입니다. */}
            <nav>
                <ul>
                    <li>
                        {/* to=""는 부모 경로인 /react-site를 의미합니다. */}
                        <Link to="">Home</Link>
                    </li>
                    <li>
                        <Link to="login">Login</Link>
                    </li>
                    <li>
                        <Link to="work">Work</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            {/* ↓ 이 자리에 Home, Login, Work 컴포넌트가 렌더링됩니다. */}
            <main>
                <Outlet />
            </main>

        </div>
    );
}
export default Layout;