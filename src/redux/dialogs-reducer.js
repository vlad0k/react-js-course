const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const profileReducer = (state, action) => {

  if (action.type === UPDATE_NEW_MESSAGE_BODY){
    state.newMessageBody = action.body;
  }

  if (action.type === ADD_MESSAGE) {
    let newMessage = {
      id: Math.random(),
      content: state.newMessageBody
    }
    state.newMessageBody = '';
    state.messages.push(newMessage);
  }

  return state;
}

export default profileReducer;


export const updateNewMessageBodyActionCreator = (newText) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: newText
  });

export const addNewMessageActionCreator = () => ({ type: ADD_MESSAGE });
