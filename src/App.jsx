// App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./compo/Login";
import Home from "./compo/Home";
import Layout from "./compo/Layout";
import Work from "./compo/Work";

function App() {
  return (
    <>
      <h1>과제방</h1>
      <BrowserRouter>
        <Routes>
          {/* Layout을 부모 Route로 설정 */}
          <Route path="/react-site" element={<Layout />}>
            {/* '/react-site' 경로 접속 시 기본으로 보여줄 페이지 */}
            <Route index element={<Home />} />
            
            {/* '/react-site/login' 경로 */}
            <Route path="login" element={<Login />} />
            
            {/* '/react-site/work' 경로 */}
            <Route path="work" element={<Work />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;