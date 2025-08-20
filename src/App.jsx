// App.jsx

import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Layouts
import Layout from "./components/Layout"; // 'componets' 오타 수정
import WorkLayout from "./components/WorkLayout"; // 새로 만들 과제방 레이아웃
import ExampleLayout from "./components/ExampleLayout";
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
import Chapter7 from "./pages/exam/chapter7/Chapter7";
import Chapter8 from "./pages/exam/chapter8/Chapter8";
import Chapter9 from "./pages/exam/chapter9/Chapter9";
import Chapter10 from "./pages/exam/chapter10/Chapter10";
import Chapter11 from "./pages/exam/chapter11/Chapter11";
import Chapter12 from "./pages/exam/chapter12/Chapter12";
import Chapter13 from "./pages/exam/chapter13/Chapter13";
import Chapter14 from "./pages/exam/chapter14/Chapter14";
import Chapter15 from "./pages/exam/chapter15/Chapter15";



function App() {
    return (
        
        // HashRouter가 전체를 감싸야 합니다.
        <HashRouter>
            <h2>박근철 Vite React 과제방</h2>
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
                     {/* 3. '과제방' 경로를 만들고, 이 경로의 레이아웃을 ExampleLayout으로 지정합니다. */}
                    <Route path="exam" element={<ExampleLayout/>}>

                        {/* 4. ExampleLayout의 자식들: 각 과제 페이지들 */}
                        <Route path="chapter7" element={<Chapter7 />} />
                        <Route path="chapter8" element={<Chapter8 />} />
                        <Route path="chapter9" element={<Chapter9 />} />
                        <Route path="chapter10" element={<Chapter10 />} />
                        <Route path="chapter11" element={<Chapter11 />} />
                        <Route path="chapter12" element={<Chapter12 />} />
                        <Route path="chapter13" element={<Chapter13 />} />
                        <Route path="chapter14" element={<Chapter14 />} />
                        <Route path="chapter15" element={<Chapter15 />} />
                        
                    </Route>
                    
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;