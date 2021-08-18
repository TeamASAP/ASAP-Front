import React from 'react';
import GoogleLogin from 'react-google-login';

const LoginPage = ( {history} ) => {
  const REACT_APP_CLIENT_ID = "931874382125-dimlgk45igef319hcb9nk3873u9e0uek.apps.googleusercontent.com";
  const onSuccess = async(response) => {
    //console.log(response);
    //로그인 성공 시 session_id...웹 server와 연동
    console.log('로그인 성공');
    history.push('/main');
  }

  const onFailure = (error) => {
      console.log(error);
      //로그인 실패 시 오류 출력
      history.push('/login');
  }

  return(
      <div>
          <GoogleLogin
              clientId={REACT_APP_CLIENT_ID}
              responseType={"id_token"}
              onSuccess={onSuccess}
              onFailure={onFailure}/>
      </div>
  )

}

export default LoginPage;
