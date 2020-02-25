const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

// const photoURL = 'https://steemitimages.com/0x0/http://rampages.us/alharthiaa/wp-content/uploads/sites/8487/2015/08/5249700000_5247598126_mrbean_rare_collection_xlarge_xlarge.jpeg';

const initialState = {
  users: [
    // {id: 1, photoURL, followed: false, fullName: 'Dmitry', status:"I'm a boss", location: {city: 'Minsk', country: 'Belarus'} },
    // {id: 2, photoURL, followed: true, fullName: 'Alex', status:"I'm a boss too", location: {city: 'Moskow', country: 'Russia'} },
    // {id: 3, photoURL, followed: false, fullName: 'Andrew', status:"I'm a mini-boss", location: {city: 'KievUkraine', country: 'Ukraine'} },
  ]
}

const usersReducer = (state = initialState, action) => {

  switch(action.type) {

    case FOLLOW: {
      let stateCopy = {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userID) {
            return { ...u, followed: true};
          }
          return u;
        })
      }
      return stateCopy
    }

    case UNFOLLOW: {
      let stateCopy = {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userID) {
            return { ...u, followed: false};
          }
          return u;
        })
      }
      return stateCopy
    }

    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    }

    default:
      return state;
  }

}

export default usersReducer;

export const followAC = (userID) => ({type: FOLLOW, userID });
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users) => ({type: SET_USERS, users});
