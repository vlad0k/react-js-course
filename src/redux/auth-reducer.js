import { authAPI } from '../api/api.js';
import { stopSubmit } from 'redux-form';

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
      }
    }

    default: {
      return state
    }
  }
}

export default authReducer;

// Action Creators
export const setAuthUserData = (id, email, login, isAuthorized) => ({type: SET_USER_DATA, data: {id, email, login, isAuthorized}});

// Thunk Creators
export const getAuthUserData = () => dispatch => {
  return authAPI.me().then(data => {
      if (data.resultCode === 0){
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
}

export const login = (email, password, rememberMe) => dispatch => {
  authAPI.login(email, password, rememberMe).then((result) => {
    if (result.resultCode === 0) {
      dispatch(getAuthUserData());
    } else if (result.resultCode === 1){
      let action = stopSubmit('login', {_error: result.messages[0]});
      dispatch(action)
    }
  })
}

export const logout = () => dispatch => {
  authAPI.logout().then((result) => {
    if (result.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  })
}
