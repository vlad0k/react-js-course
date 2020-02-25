import React from 'react';
import classes from './Navigation.module.css';
import {NavLink} from  'react-router-dom';

const Navigation = () => {
  return (
    <nav className={classes['Navigation']}>
      <div className={classes['Navigation-elem']}><NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink></div>
      <div className={classes['Navigation-elem']}><NavLink to='/messages' activeClassName={classes.activeLink}>Messages</NavLink></div>
      <div className={classes['Navigation-elem']}><NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink></div>
      <div className={classes['Navigation-elem']}><NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink></div>
      <div className={classes['Navigation-elem']}><NavLink to='/users' activeClassName={classes.activeLink}>Find Users</NavLink></div>
      <div className={classes['Navigation-elem']}><NavLink to='/settings'activeClassName={classes.activeLink}>Settings</NavLink></div>
    </nav>
  );
}

export default Navigation;
