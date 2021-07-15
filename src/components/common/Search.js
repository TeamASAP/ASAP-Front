import React from 'react';
import styled from 'styled-components';

const SearchDiv = styled.div`
    width : 100%;
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
    margin-bottom : 10px;
    background-color : lightgray;
`;

const SearchBox = styled.input`
    width : 218px;
    height : 31px;
    margin-right : 9px;
    border:none;
`

const SearchImage = styled.div`
    width : 19px;
    height : 19px;
    background-color : white;
    display : inline-block;
    margin-left : 9px;
`;

const Search = () => {
    return (
        <>
        <SearchDiv>
            <SearchImage/>
            <SearchBox placeholder="태그 검색"></SearchBox>
        </SearchDiv>
        </>
    );
}

export default Search;