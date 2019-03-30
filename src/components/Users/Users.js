import React from 'react';
import User from './User/User';
import s from './Users.module.css';

const Users = (props) => {
let userElements = props.state
.map((u) => <User name={u.name} id={u.id} avaSrc={u.userpic} />)

  return (
    <div className='container'>
      <div className='users'>
      <p className={s.welcomeText}>Users</p>
        {userElements}
      </div>
    </div>
  );
}

export default Users;
