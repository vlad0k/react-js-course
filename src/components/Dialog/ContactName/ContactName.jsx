import React from 'react';
import classes from '../Dialog.module.css';

import {NavLink} from 'react-router-dom';


const ContactName = (props) => {
  return(
    <div className={classes.name}>
      <NavLink to={`/messages/${props.data.id}`} activeClassName={classes.activeName}>{props.data.name}</NavLink>
    </div>
  )
}

export default ContactName;
