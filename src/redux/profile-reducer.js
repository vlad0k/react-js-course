const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
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
    newPostText: 'lalala'
}

const dialogsReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    if (state.newPostText) {
      let newPost = {
        id: Math.random(),
        content: state.newPostText,
        likesCount: 0
      };
      state.postsData.push(newPost);
      state.newPostText = '';
    }
  }

  if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }

  return state;
}

export default dialogsReducer;

export const updateNewPostTextActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
  });

export const addPostActionCreator = () => ({ type: ADD_POST });
