import profileReducer from './profile-reducer';
import dialogsReducer from  './dialogs-reducer';
import sidebarReducer from  './sidebar-reducer';

let store = {
  _callSubscriber(state) {
    console.log('State Changed');
  },
  
  _state: {
    profilePage: {
      postsData: [
        {
          id: 1,
          content: 'Hi, there',
          likesCount: 9
        },
        {
          id: 0,
          content: 'My 1st post',
          likesCount: 12
        },
        {
          id: 2,
          content: 'Blah Blah Blah',
          likesCount: 12
        }
      ],
      newPostText: ''
    },
    dialogsPage: {
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
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) { // Object {type: 'ADD POST'}
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
}

export default store;
