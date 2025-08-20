// src/components/Layout.jsx

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

// 스타일 컴포넌트는 'hover' 방식으로 되돌립니다.
const Nav = styled.nav`
  background-color: #333;
  padding: 0;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  a { /* span 선택자 제거 */
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  a:hover {
    background-color: #111;
  }
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  list-style: none;
  padding: 0;
`;

const DropdownNavItem = styled(NavItem)`
  position: relative;

  /* ✨ 마우스를 올리면 드롭다운 메뉴를 보여주는 CSS :hover 로직 */
  &:hover > ${DropdownMenu} {
    display: block;
  }
`;

const DropdownMenuItem = styled.li`
  a {
    color: black;
    padding: 12px 16px;
    text-align: left;

    &:hover {
      background-color: #f1f1f1;
    }
  }
`;
const MainContent = styled.main`
  max-width: 1200px; /* 콘텐츠의 최대 너비를 1200px로 제한 */
  width: 100%; /* 화면이 1200px보다 작을 때를 대비 */
  margin: 30px auto; /* 위아래 여백 30px, 좌우는 auto로 중앙 정렬 */
  padding: 20px; /* 내용물과 테두리 사이의 여백 */
  box-sizing: border-box; /* padding이 너비에 포함되도록 설정 */
`;

function Layout() {
    return (
        <div>
            <Nav>
                <NavList>
                    <NavItem>
                        <Link to="/">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/login">Login</Link>
                    </NavItem>

                    <DropdownNavItem>
                        {/* ✨ span을 Link로 변경하고, 목록 페이지 경로를 연결 */}
                        <Link to="/work">과제방</Link>
                        <DropdownMenu>
                            <DropdownMenuItem><Link to="/work/work1">Work 1</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link to="/work/work2">Work 2</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link to="/work/work3">Work 3</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link to="/work/work4">Work 4</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link to="/work/work5">Work 5</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link to="/work/work6">Work 6</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link to="/work/work7">Work 7</Link></DropdownMenuItem>

                        </DropdownMenu>
                    </DropdownNavItem>

                    <DropdownNavItem>
                        {/* ✨ span을 Link로 변경하고, 목록 페이지 경로를 연결 */}
                        <Link to="/exam">예제방</Link>
                        <DropdownMenu>
                            <DropdownMenuItem><Link to="/exam/chapter7">Chapter 7</Link></DropdownMenuItem>
                            <DropdownMenuItem><Link to="/exam/chapter8">Chapter 8</Link></DropdownMenuItem>

                        </DropdownMenu>
                    </DropdownNavItem>
                </NavList>
            </Nav>

            <hr />

            <main>
                <MainContent>
                    <Outlet />
                </MainContent>
            </main>
        </div>
    );
}

export default Layout;