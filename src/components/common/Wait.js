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

const Waiting = styled.div`
    margin : 10px;
`;



const Wait = () => {
    //DB에서 대기자명단 가져오기, 수락하면 현재부원 DB로 옮기기, 거부하면 대기자명단 DB에서 지우기
    const waitings = ["대기자1", "대기자2", "대기자3", "대기자4", "대기자5"];
    const waitingList = waitings.map((waiting) => (<Waiting>{waiting}<StyledButton>승인</StyledButton><StyledButton>거부</StyledButton></Waiting>));
    return (
        <>
        <Wrapper>
            {waitingList}
        </Wrapper>
        </>
    );
}

export default Wait;