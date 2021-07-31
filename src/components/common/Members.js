import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const Wrapper = styled.div`
    margin-top : 10px;
    font-size : 15px;
    background : lightgray;
    overflow : auto;
`;

const StyledButton = styled.button`
    margin-left : 10px;
`;

const Member = styled.div`
    margin : 10px;
`;

const Members = () => {
    //DB에서 현재 부원 가져오기, 삭제하면 DB에서 지우기
    const members = ["부원1", "부원2", "부원3", "부원4", "부원5", "부원6", "부원7"];
    const memberList = members.map((member) => (<Member>{member}<StyledButton>수정</StyledButton><StyledButton>삭제</StyledButton></Member>));
    return (
        <>
        <Wrapper>
            {memberList}
        </Wrapper>
        </>
    );
}

export default Members;