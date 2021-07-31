import React from 'react';
import AuthForm from '../components/auth/AuthForm';

const RegisterPage = ( {history} ) => {
    const onSubmit = () => {
<<<<<<< HEAD
        //회원가입 dispatch(대기자 명단에 추가)
        alert('회원가입 요청이 완료되었습니다. 관리자의 승인을 기다려주세요');
        history.push('/');
=======
        //회원가입 dispatch
        history.push('/main');
>>>>>>> 286eba292a40a9d98689f32296a232a86d7dedc5
    };
    return (
        <>
            <AuthForm type="register" onSubmit={onSubmit}/>
        </>
    );
};

export default RegisterPage;