import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.span`
    a {
        margin: 15px;
    }
`;

const LinkTo = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 15px;
  &:hover{
    text-decoration: none;
    color: #afafaf;
  }
`

const Navbar = () => {
    return (
        <>
        <Wrapper>
        <LinkTo to="/conference">회의록</LinkTo>
        <LinkTo to="/event">행사</LinkTo>
        <LinkTo to="/budget">예산</LinkTo>
        <LinkTo to="/timetable">부원시간표</LinkTo>
        <LinkTo to="/etc">기타</LinkTo>
        <LinkTo to="/takeover">인수인계</LinkTo>
        <LinkTo to="/mypage">마이페이지</LinkTo>
        </Wrapper>
        </>
    );
};

export default Navbar;