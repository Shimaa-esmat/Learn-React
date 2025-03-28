import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
// import './CourseInput.css';

import styled from 'styled-components';

const FormControl = styled.div`

  margin: 0.5rem 0;


& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${probs => probs.inValid ? 'red' : 'black'}
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => props.inValid ? 'red' : '#ccc'};
  background: ${props => props.inValid ? '#ffd7d7' : "transparint"}
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.invalid  label{
  color:  red;
}
`

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    console.log(event.target.value)
    if(event.target.value.trim().length > 0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0 ){
      setIsValid(false)
      return ;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl inValid={!isValid}>
        <label 
        // style={{color: !isValid ? 'red' : 'black'}}
        >Course Goal</label>
        <input 
        // style={{
        //   borerColor: !isValid ? 'red' : "#ccc",
        //   backgroundColor: !isValid ? 'salmon' : 'transparent'
        // }} 
        type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
