import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  h1: {
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const Login = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div>
      <div id="container">
        <Typography
          className={classes.h1}
          align="center"
          variant="h1"
          color="primary"
          display="block"
        >
          SLUM DUNDER MIFFLINAIRE
        </Typography>
      </div>
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
