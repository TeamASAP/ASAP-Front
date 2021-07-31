import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const Wrapper = styled(Responsive)`
    margin-top : 10px;
    font-size : 15px;
    border:2px solid lightgray;
    border-radius: 15px;
    overflow : auto;
    width : 500px;
`;

const StyledButton = styled.button`
    margin-bottom : 1rem;
`;

const Spacer = styled.div`
    height : 150px;
`

const Spacer2 = styled.div`
    height : 100px;
`

const Title = styled.div`
    font-size: 24px;   
    padding : 1rem;
`;

const SubTitle = styled.div`
    font-size : 20px;
`;

const Info = styled.div`
    font-size : 14px;
    padding : 2rem;
`;

const TT = styled.div`
    background : lightgray;
    width : 300px;
    height : 200px;
    margin : auto;
    margin-top : 1rem;
    margin-bottom : 1rem;
`;

const Ul = styled.ul`
    list-style : none;
    padding-left : 0;
    font-size: 16px;
`


const UserInfo = () => {
    //현재 사용자 가져오기
    //user
    return (
        <>
        <Spacer/>
        <Wrapper>
            <Title>마이페이지</Title>
            <Info>
                <SubTitle>회원정보</SubTitle>
                <Ul>
                    <li>이름</li>
                    <li>ID(학번)</li>
                    <li>직급</li>
                </Ul>
                <StyledButton>정보수정</StyledButton>
                <SubTitle>시간표</SubTitle>
                <TT>시간표</TT>
                <StyledButton>시간표 업데이트</StyledButton>
            </Info>
        </Wrapper>
        <Spacer2/>
        </>
    );
}

export default UserInfo;