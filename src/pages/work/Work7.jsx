import { BrowserRouter, Routes, Route } from 'react-router';
import styled from 'styled-components';
// Pages
import MainPage from './componets/work7comp/pages/MainPage';
import PostWritePage from './componets/work7comp/pages/PostWritePage';
import PostViewPage from './componets/work7comp/pages/PostViewPage';

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
