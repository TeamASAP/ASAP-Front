import React from 'react';
import AuthForm from '../components/auth/AuthForm';

const LoginPage = ( {history} ) => {
    const onSubmit = () => {
        //로그인 dispatch
        history.push('/main');
    };
    return (
        <>
            <AuthForm type="login" onSubmit={onSubmit}/>
        </>
    );
};

export default LoginPage;