import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Responsive from './Responsive';

const Wrapper = styled(Responsive)`
  height: 2.5rem;
  display: flex;
  align-items: center;
  span {
    margin-right: 30px;
  }
`;


const Block = styled.div`
  position: fixed;
  width: 100%;
  background: #f0f0f0;
  z-index : 100;
  top : 4rem;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  color: gray;
  &:hover{
    text-decoration: none;
    color: black;
  }
`

const SubBar = ( {user} ) => {
    useEffect(() => {
        const path = window.location.pathname;
        document.getElementById(path).style.color = "black";
        document.getElementById(path).style.fontWeight = "bold";
        return () => {
        };
      }, []);
    return (
        <>
        <Block>
            <Wrapper>
            <LinkTo to="/mypage"><span id="/mypage">마이페이지</span></LinkTo>
            {user === "manager" && <LinkTo to="/manager"><span id="/manager">관리자페이지</span></LinkTo>}
            </Wrapper>
        </Block>
        </>
    );
};

export default SubBar;