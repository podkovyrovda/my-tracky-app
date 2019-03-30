import React from 'react';
import {NavLink} from 'react-router-dom';

import s from './Menu.module.css';

const Menu = () => {
  return (
      <nav className={s.menu}>
        <ul className={s.menu__list}>
          <li className={s.menu__listItem}>
            <NavLink to='/'>Dashboard</NavLink>
          </li>
          <li className={s.menu__listItem}>
            <NavLink to='/users'>Users</NavLink>
          </li>
          <li className={s.menu__listItem}>
            <NavLink to='/profile'>Profile</NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Menu;