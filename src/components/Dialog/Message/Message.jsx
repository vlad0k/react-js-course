import React from 'react';
import classes from '../Dialog.module.css';

const Message = (props) => {
  return (
    <div className={classes.message}>
      {props.data.content}
    </div>
  )
}

export default Message;
