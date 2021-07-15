import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import styled from 'styled-components';

const My = styled.div`
    width: 100%;
    height: 800px;
`;

const MyPage = () => {
    return (
        <>
            <Header/>
            <My>mypage</My>
            <Footer/>
        </>
    );
};

export default MyPage;