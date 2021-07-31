import React from 'react';
import styled from 'styled-components';
import PostSideBar from './PostSideBar';
import Responsive from '../common/Responsive';
import Button from '../common/Button';

const Spacer = styled.div`
    height : 150px;
`
const Spacer2 = styled.div`
    height : 107px;
`

const Wrapper = styled(Responsive)`
    overflow : auto;
`;  

const PostListWrapper = styled.div`
    width : 900px;
    float : right;
    margin-bottom : 70px;
`

const Title = styled.div`
    font-size: 30px;
    margin-bottom : 19px;
`

const PostItemBlock = styled.div`
    height : 125px;
    background-color : lightgray;
    margin-bottom : 32px;
    /* 맨 위 포스트는 padding-top 없음 */
    &:first-child {
        padding-top: 0;
    }
    & + & {
        border-top: 1px solid lightgray;
    }
    h2 {
        font-size: 2rem;
        margin-bottom: 0;
        margin-top: 0;
        &:hover {
        color: lightgray;
        }
    }
    p {
        margin-top: 2rem;
    }
`;

const Pagenation = styled.div`
    width: 388px;
    height: 53px;
    background-color : lightgray;
    margin : 0 auto;
`;


const WriteButton = styled(Button)`
    width: 179px;
    height: 44px;
    background-color : lightgray;
    text-decoration : none;
    display : block;
    padding : 0;
    line-height : 48px;
    text-align : center;
    float : right;

`

const PostList = ({ title }) => {
    return(
        <>
            <Spacer/>
            <Wrapper>
                <PostSideBar/>
                <PostListWrapper>
                    <Title>
                        {title}
                        <WriteButton to='/write'>게시글 작성하기</WriteButton>
                    </Title>
                    <PostItemBlock></PostItemBlock>
                    <PostItemBlock></PostItemBlock>
                    <PostItemBlock></PostItemBlock>
                    <PostItemBlock></PostItemBlock>
                    <PostItemBlock></PostItemBlock>
                    <PostItemBlock></PostItemBlock>
                </PostListWrapper>    
            </Wrapper>
            <Pagenation>페이지네이션</Pagenation>
            <Spacer2/>
        </>
    );
}

export default PostList