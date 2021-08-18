import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Wait from './Wait';
import Members from './Members';
 
const Spacer = styled.div`
    height : 150px;
`

const Spacer2 = styled.div`
    height : 100px;
`

const Wrapper = styled(Responsive)`
    overflow : auto;
    item-align : center;
`;

const Title = styled.div`
    font-size: 24px;
    margin-bottom : 81px;
    margin-left : 95px;
`

const WaitManagerTitle = styled.div`
    font-size: 18px;
    display : inline-block;
    width : 480px;
    margin-right : 50px;
    margin-left : 95px;
`;

const CurrManagerTitle = styled.div`
    font-size: 18px;
    display : inline-block;
    width : 480px;
    margin-right : 95px;
    float : right;
`;

const AboutMembers = ({ title }) => {
    return (
        <>
        <Spacer/>
        <Wrapper>
        <Title>
            {title}
        </Title>
        <WaitManagerTitle>
            인증 대기자
            <Wait/>
        </WaitManagerTitle>
        <CurrManagerTitle>
            현재 부원
            <Members/>
        </CurrManagerTitle>
        </Wrapper>
        <Spacer2/>
        </>
    );
}

export default AboutMembers;