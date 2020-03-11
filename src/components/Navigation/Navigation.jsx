import React from 'react';
import classes from './Navigation.module.css';
import {NavLink} from  'react-router-dom';

const NavElem = (props) => {
  return (
    <div className={classes['Navigation-elem']}><NavLink to={props.to} activeClassName={classes.activeLink}>{props.navName}</NavLink></div>
  )
}

const Navigation = (props) => {
  return (
    <nav className={classes['Navigation']}>
      {props.isAuthorized && <div>
        <NavElem to='/profile' navName='Profile'/>
        <NavElem to='/messages' navName='Messages' />
        <NavElem to='/news' navName='News' />
        <NavElem to='/music' navName='Music' />
        <NavElem to='/users' navName='Find User' />
        <NavElem to='/settings' navName='Settings' />
      </div>}
    </nav>
  );
}

export default Navigation;
