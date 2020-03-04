const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
  id: null,
  login: null,
  email: null,
  isFetching: false,

}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data
      }
    }

    default: {
      return state
    }
  }
}

export default authReducer;


export const setAuthUserData = (userid, email, login) => ({type: SET_USER_DATA, data: {userid, email, login}});
