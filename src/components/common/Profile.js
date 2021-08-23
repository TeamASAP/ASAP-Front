import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { withRouter } from 'react-router-dom';

const ProfileDiv = styled.div`
    width : 100%;
    height : auto;
    text-align : center;
    background-color : lightgray;
    margin-bottom : 10px;
    padding-bottom : 15px;
`

const ProfileHeader = styled.div`
    height : 50px;
    margin-bottom : 18px;
    line-height: 50px;
    text-align : left;
    padding-left : 20px;

`;

const Info = styled.div`
    p {
        text-align : left;
        margin-left : 20px;
        font-size: 14px;
        line-height: 16px;
        margin-top : 0px;
        margin-bottom : 8px;
    }
    margin-bottom : 15px;
`

const ProfileButton = styled(Button)`
    width: 115px;
    height: 37px;
    font-size: 10px;
    & + & {
    margin-left: 12px;
    }
`

const Profile = ({ history, name }) => {
    const onLogout = () => {
        //로그아웃 dispatch
        window.sessionStorage.clear();
        history.push('/');
    };
    function linkto(page) {
        history.push(page);
    };
    return (
        <>
        <ProfileDiv>
            <ProfileHeader>프로필</ProfileHeader>
            <Info>
                <p>이름 {name}</p>
                <p>직급</p>
            </Info>
            <ProfileButton onClick={()=>linkto('/main')}>정보 수정</ProfileButton>
            <ProfileButton onClick={onLogout}>로그아웃</ProfileButton>
        </ProfileDiv>
        </>
    );
}

export default withRouter(Profile);
