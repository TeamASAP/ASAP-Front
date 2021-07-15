import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import styled from 'styled-components';

const EtcP = styled.div`
    width: 100%;
    height: 800px;
`;

const Etc = () => {
    return (
        <>
            <Header/>
            <EtcP>etc</EtcP>
            <Footer/>
        </>
    );
};

export default Etc;