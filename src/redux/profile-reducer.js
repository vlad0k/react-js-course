const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'

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
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {

  switch(action.type) {

    case ADD_POST: {
      let newPost = {
        id: Math.random(),
        content: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost ],
        newPostText: ''
      }
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }


    default:
      return state;
  }
}

export default profileReducer;

export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText});

export const addPostActionCreator = () => ({ type: ADD_POST });

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
