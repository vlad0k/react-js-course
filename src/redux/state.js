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
      ]
    }
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _addPost() {
    if (this._state.profilePage.newPostText) {
      let newPost = {
        id: Math.random(),
        content: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) { // Object {type: 'ADD POST'}
    if (action.type === 'ADD-POST') {
      this._addPost();
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._updateNewPostText(action.newText)
    }
  }
}

export default store;

export const updateNewPostTextActionCreator = (newText) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: newText
  }
}

export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}
