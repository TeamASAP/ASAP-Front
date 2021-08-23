import React from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';
import Responsive from './Responsive';
import SideBar from './SideBar';

const Spacer = styled.div`
    height : 107px;
`

const Wrapper = styled(Responsive)`
    overflow : auto;
`; 

const MainImage = styled.div`
    background-color : lightgray;
    height : 272px;
    margin-bottom : 36px;
`;

const Main = ({name}) => {
    return (
        <>
        <Spacer/>
        <Wrapper>
            <MainImage>이미지 배너</MainImage>
            <SideBar name={name}/>
            <Calendar/>
        </Wrapper>
        <Spacer/>
        </>
    );
}

export default Main;