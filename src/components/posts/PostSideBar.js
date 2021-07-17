import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import TagList from './TagList';

const Spacer = styled.div`
    height : 53px;
`

const Wrapper = styled.div`
    width : 270px;
    text-align : center;
    float : left;
`

const PostSideBar = () => {
    return(
        <>
        <Wrapper>
            <Spacer/>
            <Search/>
            <TagList/>
        </Wrapper>
        </>
    );
}

export default PostSideBar