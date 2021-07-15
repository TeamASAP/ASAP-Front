import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import styled from 'styled-components';

const TT = styled.div`
    width: 100%;
    height: 800px;
`;

const TimeTable = () => {
    return (
        <>
            <Header/>
            <TT>timetable</TT>
            <Footer/>
        </>
    );
};

export default TimeTable;