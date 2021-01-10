import React, { useState } from 'react';
import questions from '../../../triviaQuestions.json';
import {
  Grid,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    left: '25%',
    border: '3px solid lightgrey',
    width: '50%',
  },
  item: {
    border: '3px solid lightgrey',
    width: '95%',
  },
});

const questionsList = questions.questions;
const ran = Math.floor(Math.random() * questionsList.length);
const question = questionsList[ran].question;
const options = questionsList[ran].options;
const answer = questionsList[ran].answer;

const Trivia = () => {
  const classes = useStyles();
  let [answerChoice, setAnswerChoice] = useState('');
  const handleAnswerChoice = (event) => {
    setAnswerChoice(event.target.value);
  };

  const handleSubmit = () => {
    // answerChoice === answer ? );
  };

  return (
    <Grid
      className={classes.container}
      container
      spacing={7}
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h5">{question}</Typography>
      </Grid>

      <FormControl component="fieldset" className={classes.item}>
        <FormLabel component="legend">Answer Choices</FormLabel>
        <RadioGroup
          aria-label="answer choices"
          name="answer choices"
          onChange={handleAnswerChoice}
        >
          {options.map((option, i) => {
            return (
              <FormControlLabel
                value={option}
                key={option + i}
                control={<Radio />}
                label={option}
              />
            );
          })}
        </RadioGroup>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSubmit}
        >
          Submit Answer
        </Button>
      </FormControl>
    </Grid>
  );
};

export default Trivia;
