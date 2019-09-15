import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes['Header']}>
      <img className={classes['Header-logo']} src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png' alt='' />
    </header>
  );
}

export default Header;
