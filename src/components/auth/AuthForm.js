import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';

const Wrapper = styled(Responsive)`
  width : 795px;
  position : absolute;
  top: 50%;
  left: 50%;
  transform : translate(-50%, -50%);
`

const InputDiv = styled.div`
  width: 360px;
  p {
    font-size: 14px;
    float : left;
    margin-bottom : 8px;
    margin-top : 46px;
    
  }
`;

const Input = styled.input`
  width: 360px;
  height: 50px;
  display : block;
  background: #F1F9FF;
  border: 2px solid #BCE0FD;
  box-sizing: border-box;
  border-radius: 10px;
`;

const Select = styled.select`
  width: 360px;
  height: 50px;
  display : block;
  background: #F1F9FF;
  border: 2px solid #BCE0FD;
  box-sizing: border-box;
  border-radius: 10px;
`

const textMap = {
    login: '로그인',
    register: '회원가입', 
};

const LeftDiv = styled.div`
float: left;
`

const Logo = styled.div`
  width: 310px;
  font-size : 2em;
  display : block;
`;

const Form = styled.form`
  float : right;
  text-align :center;
  display : inline-block;
`;

const FormButton = styled(Button)`
  width: 327px;
  height: 48px;
  background-color : lightgray;
  margin-top : 58px;
`;

const Message = styled.div`
  width: 310px;
  font-size: 14px;
  input {
    float : right;
    background: #F1F9FF;
    border: 2px solid #BCE0FD;
    border-radius: 5px;
    width: 20px;
    height: 20px;
  }
  span {
    color: #2699FB;
  }

`;

const AuthForm = ({type, onSubmit}) => {
    const text = textMap[type];
    return (
        <>
        <Wrapper>
          <LeftDiv>
          <Logo>{text}</Logo>
          {type === 'register' && (
          <Message>
            <p>숙명여자대학교 소프트웨어학부 학생회 일원이 맞으신가요? 회원 가입 후 관리자의 승인을 기다려주세요.</p>
            <span>네 학생회부원이 맞습니다.</span>
            <input type="checkbox" name="chk"></input>
          </Message>
          )}
          </LeftDiv>
          <Form onSubmit={onSubmit}>
          {type === 'register' && (
            <InputDiv>
              <p>이름</p>
              <Input
              name="memberName"
              placeholder="이름"
            />
            </InputDiv>
          )}
          <InputDiv>
            <p>ID</p>
            <Input
              name="username"
              placeholder="아이디"
            />
          </InputDiv>
          <InputDiv>
            <p>Password</p>
            <Input
              name="password"
              placeholder="비밀번호"
              type="password"
            />
          </InputDiv>
          {type === 'register' && (
            <InputDiv>
              <p>Password 확인</p>
              <Input
                name="passwordConfirm"
                placeholder="비밀번호 확인"
                type="password"
              />
            </InputDiv>
          )}
          {type === 'register' && (
            <InputDiv>
              <p>직급선택</p>
              <Select
                name="grade"
                placeholder="비밀번호 확인"
                type="password"
              >
                <option value = "과대">과대</option>
                <option value = "부과대">부과대</option>
                <option value = "총무">총무</option>
                <option value = "부원">부원</option>
              </Select>
            </InputDiv>
          )}
          <FormButton>{text}</FormButton>
        </Form>
        </Wrapper>
        </>
    );
};

export default AuthForm;