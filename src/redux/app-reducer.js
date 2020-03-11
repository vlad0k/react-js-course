// import { authAPI } from '../api/api.js';

import { getAuthUserData } from './auth-reducer.js';

const INITHIALIZED_SUCCESS = 'INITHIALIZED-SUCCESS';

const initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case INITHIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      }
    }

    default: {
      return state
    }
  }
}

export default appReducer;

// Action Creators
export const initializedSuccess = () => ({type: INITHIALIZED_SUCCESS})

// Thunk Creators

export const initializeApp = () => dispatch => {
  dispatch(getAuthUserData())
    .then(() => {
      dispatch(initializedSuccess())
    })

}
