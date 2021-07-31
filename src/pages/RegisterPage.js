import React from 'react';
import AuthForm from '../components/auth/AuthForm';

const RegisterPage = ( {history} ) => {
    const onSubmit = () => {
        //회원가입 dispatch(대기자 명단에 추가)
        alert('회원가입 요청이 완료되었습니다. 관리자의 승인을 기다려주세요');
        history.push('/');
    };
    return (
        <>
            <AuthForm type="register" onSubmit={onSubmit}/>
        </>
    );
};

export default RegisterPage;