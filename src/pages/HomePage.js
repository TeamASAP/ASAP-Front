import React from 'react';
import GoogleLogin from 'react-google-login';
import dotenv from 'dotenv'
dotenv.config()

const HomePage = ( { history } ) => {
    const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const onSuccess = async(response) => {
        //console.log(response);
        //로그인 성공 시 session_id...웹 server와 연동
        console.log('로그인 성공');
        history.push('/main');
    }

    const onFailure = (error) => {
        console.log(error);
        //로그인 실패 시 오류 출력
        history.push('/');
    }

    return(
        <div>
            <h2>home page</h2>
            <GoogleLogin
              clientId={REACT_APP_CLIENT_ID}
              buttonText="구글계정으로 로그인하기"
              onSuccess={onSuccess}
              onFailure={onFailure}/>
        </div>
    )
};

export default HomePage;