// import React from 'react';

import Dialog from './Dialog.jsx'

import { updateNewMessageBodyActionCreator, addNewMessageActionCreator } from '../../redux/dialogs-reducer.js';

// import StoreContext from '../../StoreContext';

import { connect } from 'react-redux';

// const DialogContainer = () => {
//
//   let sendButtonClick = (store) => {
//     var action = addNewMessageActionCreator();
//     store.dispatch(action);
//   }
//
//   const newMessageChangeHandler = (store, content) => {
//     var action = updateNewMessageBodyActionCreator(content);
//     store.dispatch(action);
//   }
//
//   return (
//     <StoreContext.Consumer>
//       {(store) => (
//         <Dialog
//           sendButtonClick={() => sendButtonClick(store)}
//           newMessageChangeHandler={(content) => newMessageChangeHandler(store, content)}
//           messagesPage={store.getState().dialogsPage}
//         />
//       )}
//     </StoreContext.Consumer>
//   );
// }

let mapStateToProps = (state) => {

  return {
    messagesPage: state.messagesPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendButtonClick: () => {
      dispatch(addNewMessageActionCreator())
    },
    newMessageChangeHandler: (body) => {
      dispatch(updateNewMessageBodyActionCreator(body))
    }

  }
}
const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);


export default DialogContainer;
