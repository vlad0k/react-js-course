import React from 'react';
import classes from './Dialog.module.css';

import ContactName from './ContactName/ContactName.jsx'
import Message from './Message/Message.jsx'

const Dialog = (props) => {

  let messageInputRef = React.createRef();

  let sendButtonClick = (event) => {
    event.preventDefault();
    props.sendButtonClick();
  }

  const newMessageChangeHandler = (event) => {
    props.newMessageChangeHandler(event.target.value);
  }

  return (
    <div className={classes.Dialogs}>

      <div className={classes.contacts}>
        {props.messagesPage.dialogsData.map((elem) => <ContactName data={elem} />)}
      </div>

      <div className={classes.messageWrapper}>
        {props.messagesPage.messages.map((elem) => <Message data={elem} />)}
        <form onSubmit={sendButtonClick}>
          <textarea onChange={newMessageChangeHandler} ref={messageInputRef} value={props.messagesPage.newMessageBody}/>
          <input type='submit' value='Send'/>
        </form>
      </div>
    </div>
  );
}

export default Dialog;
