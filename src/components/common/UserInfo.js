import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const Wrapper = styled(Responsive)`
    width : 650px;
`;

const StyledButton = styled.button`

`;

const Spacer = styled.div`
    height : 180px;
`

const Spacer2 = styled.div`
    height : 100px;
`

const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 1rem;
`;

const SubTitle = styled.div`
    font-size : 20px;
`;

const Info = styled.div`
    font-size : 14px;
    margin-top : 10px;
    font-size : 15px;
    border:2px solid lightgray;
    border-radius: 15px;
    padding: 2rem;
`;

const Table = styled.table`
    padding : 2rem;
    .contents {
        width: 400px;
        text-align: center;
    }
`


const UserInfo = () => {
    //현재 사용자 가져오기
    //user
    return (
        <>
        <Spacer/>
        <Wrapper>
            <Title>마이페이지</Title>
            <Info>
                <SubTitle>회원정보</SubTitle>
                <Table>
                    <tr>
                        <td>이름</td><td className="contents">~user.name~</td>
                    </tr>
                    <tr>
                        <td>학번</td><td className="contents">~user.sid~</td>
                    </tr>
                    <tr>
                        <td>직급</td><td className="contents">~user.rank~</td>
                    </tr>
                    <tr>
                        <td>비밀번호</td><td className="contents">********</td><td><StyledButton>변경</StyledButton></td>
                    </tr>
                </Table>
            </Info>
        </Wrapper>
        <Spacer2/>
        </>
    );
}

export default UserInfo;