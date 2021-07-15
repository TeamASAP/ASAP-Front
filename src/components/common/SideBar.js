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
    margin-top : 10px;
    height : 48px;
    margin-bottom : 10px;
    background-color : lightgray;
`

const SideBar = () => {
    return (
        <>
        <Wrapper>
            <Profile/>
            <WriteButton>게시글 작성하기</WriteButton>
            <Search></Search>
            <TagList/>
        </Wrapper>
        </>
    );
}

export default SideBar;