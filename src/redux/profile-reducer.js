const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const dialogsReducer = (state, action) => {
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
