import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import styled from 'styled-components';

const Eve = styled.div`
    width: 100%;
    height: 800px;
`;

const Event = () => {
    return (
        <>
            <Header/>
            <Eve>event</Eve>
            <Footer/>
        </>
    );
};

export default Event;