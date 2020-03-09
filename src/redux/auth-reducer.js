import { authAPI } from '../api/api.js';

const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
  id: null,
  login: null,
  email: null,
  isFetching: false,
  isAuthorized: false

}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuthorized: true
      }
    }

    default: {
      return state
    }
  }
}

export default authReducer;

// Action Creators
export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});

// Thunk Creators
export const getAuthUserData = () => dispatch => {
  authAPI.me().then(data => {
      if (data.resultCode === 0){
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
}
