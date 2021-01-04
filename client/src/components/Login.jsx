import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const history = useHistory();

  return (
    <div>
      <h1 id="heading">THE HAY KING</h1>
      <div id="login">
        <a role="button" id="facebook-button" href="/auth/facebook">
          Sign in with Facebook
        </a>
        <a role="button" id="google-button" href="/auth/google">
          Sign in with Google
        </a>
        <a role="button" id="twitter-button" href="/auth/twitter">
          Sign in with Twitter
        </a>
      </div>
    </div>
  );
};

export default Login;
