import React from 'react';
import {statuses} from '../../redux/usersReducer';
import * as axios from 'axios';

import User from './User/User';

import s from './Users.module.css';

const Users = (props) => {

  if (props.status === statuses.NOT_INITIALIZED) {
    props.setStatus(statuses.IN_PROGRESS);
    axios
      .get('http://mytracky.ru:8080/users')
      .then(res => {
        props.setStatus(statuses.SUCCESS);
        props.setUsers(res.data);
      })
  }

  let userElements = props.users
                            .map((u) => <User name={u.name} 
                                              id={u.id} 
                                              avaSrc={u.userpic} />)

  if (!props.users.length ? userElements = 'Users not found' : userElements)

  return (
    <div className='container'>
      <div>
      <p className='welcomeText'>Users</p>
        {userElements}
      </div>
    </div>
  );
}

export default Users;
