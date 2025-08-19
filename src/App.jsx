// App.jsx

import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Layouts
import Layout from "./components/Layout"; // 'componets' 오타 수정
import WorkLayout from "./components/WorkLayout"; // 새로 만들 과제방 레이아웃

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Work1 from "./pages/work/work1/Work1";
import Work2 from "./pages/work/work2/Work2";
import Work3 from "./pages/work/work3/Work3";
import Work4 from "./pages/work/work4/Work4";
import Work5 from "./pages/work/work5/Work5";
import Work6 from "./pages/work/work6/Work6";
import Work7 from "./pages/work/work7/Work7";


function App() {
    return (
        // HashRouter가 전체를 감싸야 합니다.
        <HashRouter>
            <Routes>
                {/* 1. 최상위 부모 Route는 공통 레이아웃을 담당합니다. */}
                <Route path="/" element={<Layout />}>

                    {/* 2. Layout의 자식들: Home, Login, 그리고 과제방 전체 */}
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />

                    {/* 3. '과제방' 경로를 만들고, 이 경로의 레이아웃을 WorkLayout으로 지정합니다. */}
                    <Route path="work" element={<WorkLayout />}>

                        {/* 4. WorkLayout의 자식들: 각 과제 페이지들 */}
                        <Route path="work1" element={<Work1 />} />
                        <Route path="work2" element={<Work2 />} />
                        <Route path="work3" element={<Work3 />} />
                        <Route path="work4" element={<Work4 />} />
                        <Route path="work5" element={<Work5 />} />
                        <Route path="work6" element={<Work6 />} />
                        <Route path="work7/*" element={<Work7 />} />
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;