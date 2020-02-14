import React from 'react';
import classes from './Dialog.module.css';

import ContactName from './ContactName/ContactName.jsx'
import Message from './Message/Message.jsx'

const Dialog = (props) => {

  let messageInputRef = React.createRef();

  let sendButtonClick = () => {
    props.sendButtonClick();
    messageInputRef.current.value = '';
  }

  const newMessageChangeHandler = () => {
    props.newMessageChangeHandler(messageInputRef.current.value);
  }

  return (
    <div className={classes.Dialogs}>

      <div className={classes.contacts}>
        {props.messagesPage.dialogsData.map((elem) => <ContactName data={elem} />)}
      </div>

      <div className={classes.messageWrapper}>
        {props.messagesPage.messages.map((elem) => <Message data={elem} />)}
        <textarea onChange={newMessageChangeHandler} ref={messageInputRef} value={props.newMessageBody}/>
        <button onClick={sendButtonClick}>Send</button>
      </div>
    </div>
  );
}

export default Dialog;
