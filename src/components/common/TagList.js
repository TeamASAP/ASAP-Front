import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width : 100%;
    background-color : lightgray;
    padding-bottom : 16px;
    margin-bottom : 10px;
`

const TagListHeader = styled.div`
    height : 50px;
    text-align : left;
    line-height: 50px;
    font-size: 16px;
    padding-left : 20px;
    margin-bottom : 16px;
`

const Tags = styled.div`
    padding-left : 20px;
    height : 16px;
    font-size: 14px;
    text-align : left;
    margin-bottom : 10px;

`

const TagList = () => {
    return (
        <>
        <Wrapper>
            <TagListHeader>태그 목록</TagListHeader>
            <Tags>태그</Tags>
            <Tags>태그</Tags>
            <Tags>태그</Tags>
            <Tags>태그</Tags>
            <Tags>태그</Tags>
            <Tags>태그</Tags>
            <Tags>태그</Tags>
            <Tags>태그</Tags>
        </Wrapper>
        </>
    );
}

export default TagList;