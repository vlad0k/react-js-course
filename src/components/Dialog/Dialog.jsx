import React from 'react';
import classes from './Dialog.module.css';

import {NavLink} from 'react-router-dom';


const ContactName = (props) => {
  return(
    <div className={classes.name}>
      <NavLink to={`/messages/${props.data.id}`} activeClassName={classes.activeName}>{props.data.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={classes.message}>
      {props.data.content}
    </div>
  )
}

const Dialog = () => {

  let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Lena'},
    {id: 4, name: 'Sveta'},
    {id: 5, name: 'Sasha'},
    {id: 6, name: 'Victor'}
  ];

  let messages = [
    {
      id: 1,
      content: 'Hi!'
    },
    {
      id: 2,
      content: 'How are u?!'
    },
    {
      id: 3,
      content: "The weather is good isn't it?"
    }
  ];
  return (
    <div className={classes.Dialogs}>

      <div className={classes.contacts}>
        {dialogsData.map((elem) => <ContactName data={elem} />)}


      </div>

      <div className={classes.messageWrapper}>
        {messages.map((elem) => <Message data={elem} />)}
      </div>
    </div>
  );
}

export default Dialog;
