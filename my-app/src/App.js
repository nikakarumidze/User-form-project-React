import React, { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import UserList from './components/User/UserList';

function App() {
  const [allUsers, changeTo] = useState([]);
  const getAllUsers = (data) => {
    changeTo((prevState) => [data, ...prevState]);
  };
  return (
    <div className='App'>
      <Form onAddingUser={getAllUsers} />
      {allUsers.length === 0 ? '' : <UserList users={allUsers} />}
    </div>
  );
}

export default App;
