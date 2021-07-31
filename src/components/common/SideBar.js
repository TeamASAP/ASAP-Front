import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Profile from './Profile';
import Search from './Search';
import TagList from './TagList';

const Wrapper = styled.div`
    width : 270px;
    text-align : center;
    float : left;
`

const WriteButton = styled(Button)`
    width : 100%;
    height : 48px;
    background-color : lightgray;
    text-decoration : none;
    display : block;
    padding : 0;
    line-height : 48px;

`

const SideBar = () => {
    return (
        <>
        <Wrapper>
            <Profile/>
            <WriteButton to='/write'>게시글 작성하기</WriteButton>
            <Search></Search>
            <TagList/>
        </Wrapper>
        </>
    );
}

export default SideBar;