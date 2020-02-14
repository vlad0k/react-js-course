const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const initialState = {
  dialogsData: [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Lena'},
    {id: 4, name: 'Sveta'},
    {id: 5, name: 'Sasha'},
    {id: 6, name: 'Victor'}
  ],
  messages: [
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
  ],
  newMessageBody: '',
}

const profileReducer = (state = initialState, action) => {

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
