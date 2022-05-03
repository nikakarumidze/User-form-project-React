import User from './User';
import classes from './UserList.module.css';
import Card from '../UI/Card';

const UserList = (props) => {
  return (
    <Card cssClass={classes.users}>
      <ul>
        {props.users.map((user) => (
          <User
            userName={user.enteredUserName}
            userAge={user.enteredAge}
            key={user.randomNum}
          />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
