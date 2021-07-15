import React from 'react';
import AuthForm from '../components/auth/AuthForm';

const RegisterPage = ( {history} ) => {
    const onSubmit = () => {
        //회원가입 dispatch
        history.push('/main');
    };
    return (
        <>
            <AuthForm type="register" onSubmit={onSubmit}/>
        </>
    );
};

export default RegisterPage;