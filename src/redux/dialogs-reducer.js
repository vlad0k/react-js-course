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
}

const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      console.log(action.body);
      return {
        ...state,
        newMessageBody: action.body
      }
    }
    case ADD_MESSAGE: {
      let newMessage = {
        id: 4,
        content: action.newMessageBody
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
      }
    }
    default: {
      return state
    }
  }
}

export default dialogsReducer;


// export const updateNewMessageBodyActionCreator = (newText) => ({
//     type: UPDATE_NEW_MESSAGE_BODY,
//     body: newText
//   });

export const addNewMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody });
