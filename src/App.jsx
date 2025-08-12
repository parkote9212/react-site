// App.js

import { HashRouter, Routes, Route } from "react-router-dom"; // 1. HashRouter로 변경
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./componets/Layout";
import Work1 from "./pages/work/Work1";
import Work2 from "./pages/work/Work2";

function App() {
  return (
    <>
      <h1>과제방</h1>
      {/* 2. <BrowserRouter>를 <HashRouter>로 변경 */}
      <HashRouter>
        <Routes>
          {/* Layout을 부모 Route로 설정 */}
          <Route path="/" element={<Layout />}>
            {/* '/react-site' 경로 접속 시 기본으로 보여줄 페이지 */}
            <Route index element={<Home />} />

            {/* '/react-site/login' 경로 */}
            <Route path="login" element={<Login />} />

            <Route path="work1" element={<Work1 />} />

            <Route path="work2" element={<Work2 />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;