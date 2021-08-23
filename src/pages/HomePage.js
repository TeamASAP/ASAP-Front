import React from 'react';
import GoogleLogin from 'react-google-login';
import dotenv from 'dotenv'
dotenv.config()

const HomePage = ( { history } ) => {
    const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    // Google Login
    const responseGoogle = (res) => {
        window.sessionStorage.setItem('id', res.googleId);
        window.sessionStorage.setItem('name', res.profileObj.name);
        window.sessionStorage.setItem('provider', 'google');
        history.push('/main');
    }
     // Login Fail
    const responseFail = (err) => {
        console.error(err);
    }

    return(
        <div>
            <h2>home page</h2>
            <GoogleLogin
clientId={REACT_APP_CLIENT_ID}
buttonText="Google"
onSuccess={responseGoogle}
onFailure={responseFail}
/>
        </div>
    )
};

export default HomePage;