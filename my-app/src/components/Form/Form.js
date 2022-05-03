import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './Form.module.css';

const Form = (props) => {
  const [enteredUserName, SetEnteredUserName] = useState('');
  const [enteredAge, SetEnteredAge] = useState('');
  const [error, setError] = useState();

  const btnSubmit = (event) => {
    event.preventDefault();
    if (enteredAge < 1 || enteredUserName.trim().length === 0) {
      return setError({
        title: 'Invalid',
        message: 'Please enter valid information',
      });
    }
    SetEnteredUserName('');
    SetEnteredAge('');
    let randomNum = Math.random();
    let newObj = { enteredUserName, enteredAge, randomNum };
    props.onAddingUser(newObj);
  };

  const userNameChangeHandler = (event) => {
    SetEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    SetEnteredAge(event.target.value);
  };
  return (
    <div>
      {error ? <ErrorModal title={error.title} message={error.message} onClick={() =>setError(null)}/> : ''}
      <Card cssClass={classes.input}>
        <form onSubmit={btnSubmit}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            onChange={userNameChangeHandler}
            value={enteredUserName}
          />
          <label htmlFor='age'>Age</label>
          <input
            type='number'
            id='age'
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default Form;
