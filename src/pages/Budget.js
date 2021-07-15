import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import styled from 'styled-components';

const Bud = styled.div`
    width: 100%;
    height: 800px;
`;

const Budget = () => {
    return (
        <>
            <Header/>
            <Bud>budget page</Bud>
            <Footer/>
        </>
    );
};

export default Budget;