import { BrowserRouter, Routes, Route } from 'react-router';
import styled from 'styled-components';
// Pages
import MainPage from './components/pages/MainPage';
import PostWritePage from './components/pages/PostWritePage';
import PostViewPage from './components/pages/PostViewPage';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function Work7() {
    return (
        <>
             <MainTitleText>소플의 미니 블로그</MainTitleText>
            <Routes>
                <Route
                    index
                    element={<MainPage />}
                />
                <Route
                    path='post-write'
                    element={<PostWritePage />}
                />
                <Route
                    path='post/:postId'
                    element={<PostViewPage />}
                />
            </Routes>
            </>
    );
}

export default Work7;
