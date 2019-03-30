import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './User.module.css';

const User = (props) => {
  let path = '/users/' + props.id;
  return (
    <NavLink to={path}>
      <div className={s.user}>
        <div className={s.user__ava}>
          <img src={props.avaSrc}/>
        </div>
        <div className={s.user__name}>{props.name}</div>
      </div>
    </NavLink>
  );
}

export default User;
