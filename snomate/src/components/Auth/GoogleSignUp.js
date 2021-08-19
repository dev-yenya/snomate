import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class SignUp extends Component {
    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
    }

    render() {
        return (
            <div>
                <GoogleLogin
                clientId="836975129561-mpubv5jtlnnoa5pmua6c5ufnoursjs2d.apps.googleusercontent.com"
                buttonText="회원가입"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    }
}

export default SignUp;