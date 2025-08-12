// App.js

import { HashRouter, Routes, Route } from "react-router-dom"; // 1. HashRouter로 변경
import "./App.css";
import Login from "./compo/Login";
import Home from "./compo/Home";
import Layout from "./compo/Layout";
import Work from "./compo/Work";

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

            {/* '/react-site/work' 경로 */}
            <Route path="work" element={<Work />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;