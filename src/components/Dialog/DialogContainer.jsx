import React from 'react';

import Dialog from './Dialog.jsx'

import { updateNewMessageBodyActionCreator, addNewMessageActionCreator } from '../../redux/dialogs-reducer.js';

const DialogContainer = (props) => {

  let state = props.store.getState();

  let sendButtonClick = () => {
    var action = addNewMessageActionCreator();
    props.store.dispatch(action);
  }

  const newMessageChangeHandler = (content) => {
    var action = updateNewMessageBodyActionCreator(content);
    props.store.dispatch(action);
  }

  return (
    <Dialog
      sendButtonClick={sendButtonClick}
      newMessageChangeHandler={newMessageChangeHandler}
      messagesPage={state.dialogsPage}
    />
  );
}

export default DialogContainer;
