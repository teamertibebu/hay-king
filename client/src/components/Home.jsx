import axios from 'axios';
import React from 'react';
import Navbar from './Nav';
import Trivia from './Trivia';
import { Typography, Grid } from '@material-ui/core';

const Home = () => {
  return (
    <>
      <Navbar />
      <Grid container spacing={7} direction="column" alignItems="center">
        <Grid item>
          <Typography>Home Page</Typography>
        </Grid>
        <Grid item>
          <Trivia />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
