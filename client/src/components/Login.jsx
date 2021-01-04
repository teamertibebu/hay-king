import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Login Page</h1>
      <a role="button" id="facebook-button" href="/auth/facebook">
        Login With Facebook
      </a>
    </div>
  );
};

export default Login;
