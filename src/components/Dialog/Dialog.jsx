import React from 'react';
import classes from './Dialog.module.css';



import ContactName from './ContactName/ContactName.jsx'
import Message from './Message/Message.jsx'
import AddMessageForm from './AddMessageForm/AddMessageForm.jsx'


const Dialog = (props) => {

  // let messageInputRef = React.createRef();

  let onSubmit = (formData) => {
    props.sendButtonClick(formData.newMessage);
  }

  return (
    <div className={classes.Dialogs}>

      <div className={classes.contacts}>
        {props.messagesPage.dialogsData.map((elem) => <ContactName data={elem} />)}
      </div>

      <div className={classes.messageWrapper}>
        {props.messagesPage.messages.map((elem) => <Message data={elem} />)}
        <AddMessageForm onSubmit={onSubmit} newMessageBody={props.messagesPage.newMessageBody}/>
      </div>
    </div>
  );
}

export default Dialog;
