import React from 'react';

import Menu from '../Menu/Menu';
import MenuIcon from '../MenuIcon/MenuIcon';

import s from './Header.module.css';

const Header = () => {
  return (
      <header className='header'>
        <div className='container'>
          <div className='row'>
            <MenuIcon />
            <div className='hide'>
              <Menu />
            </div>
            <span className={s.logo}>
              MYTRACKY
            </span>
          </div>  
        </div>
      </header>
  );
};

export default Header;