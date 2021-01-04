import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Login Page</h1>
      <div id="login">
        <a role="button" id="facebook-button" href="/auth/facebook">
          Login With Facebook
        </a>
        <a role="button" id="google-button" href="/auth/google">
          Sign in with Other
        </a>
        <a role="button" id="twitter-button" href="/auth/twitter">
          Sign in with Twitter
        </a>
      </div>
    </div>
  );
};

export default Login;
