import Dialog from './Dialog.jsx'

import { updateNewMessageBodyActionCreator, addNewMessageActionCreator } from '../../redux/dialogs-reducer.js';

import { withAuthRedirect } from '../hoc/withAuthRedirect';

// import StoreContext from '../../StoreContext';

import { connect } from 'react-redux';
import { compose } from 'redux';

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

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialog)

// let AuthRedirectComponent = withAuthRedirect(Dialog);

// const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


// export default DialogContainer;
