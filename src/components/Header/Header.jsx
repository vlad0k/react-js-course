import React from 'react';
import classes from './Header.module.css';

import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={classes['Header']}>
      <NavLink to='/profile'>
        <img className={classes['Header-logo']} src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png' alt='' />
      </NavLink>

      <div className={classes['loginBlock']}>
        {props.isAuthorized ? <NavLink to='/settings'>{props.login}</NavLink> : <NavLink to='/login'>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;
