import React from 'react';
import classes from './Header.module.css';

import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes['Header']}>
      <NavLink to='/profile'>
        <img className={classes['Header-logo']} src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png' alt='' />
      </NavLink>
    </header>
  );
}

export default Header;
