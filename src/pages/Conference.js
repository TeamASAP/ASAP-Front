import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import styled from 'styled-components';

const Conf = styled.div`
    width: 100%;
    height: 800px;
`;

const Conference = () => {
    return (
        <>
            <Header/>
            <Conf>conf</Conf>
            <Footer/>
        </>
    );
};

export default Conference;