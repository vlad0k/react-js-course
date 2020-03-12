import { profileAPI } from '../api/api.js';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

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
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

  switch(action.type) {

    case ADD_POST: {
      let newPost = {
        id: Math.random(),
        content: action.newPost,
        likesCount: 0
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost ],
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

    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }

    default:
      return state;
  }
}

export default profileReducer;

export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText});
export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (id) => (dispatch => {
  dispatch(setUserProfile(null))
  profileAPI.getProfile(id).then( data => {
    dispatch(setUserProfile(data));
  });

});

export const getUserStatus = (id) => dispatch => {
  profileAPI.getUserStatus(id).then((data) => {
    dispatch(setUserStatus(data));
  })
};

export const updateStatus = (status) => dispatch => {
  profileAPI.updateStatus(status).then((data) => {
    if(data.resultCode ===0){
      dispatch(setUserStatus(status));
    }
  })
};
