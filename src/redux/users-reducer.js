import { usersAPI } from '../api/api.js';
import { updateObjectInArray } from '../utils/object-helpers.js'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOW_FETCHING = 'TOGGLE-FOLLOW-FETCHING';



// const photoURL = 'https://steemitimages.com/0x0/http://rampages.us/alharthiaa/wp-content/uploads/sites/8487/2015/08/5249700000_5247598126_mrbean_rare_collection_xlarge_xlarge.jpeg';

const initialState = {
  users: [
    // {id: 1, photoURL, followed: false, fullName: 'Dmitry', status:"I'm a boss", location: {city: 'Minsk', country: 'Belarus'} },
    // {id: 2, photoURL, followed: true, fullName: 'Alex', status:"I'm a boss too", location: {city: 'Moskow', country: 'Russia'} },
    // {id: 3, photoURL, followed: false, fullName: 'Andrew', status:"I'm a mini-boss", location: {city: 'KievUkraine', country: 'Ukraine'} },
  ],
  currentPage: 1,
  pageSize: 20,
  totalUsersCount: 0,
  followFetchingID: [],
  fake: 10
}

const usersReducer = (state = initialState, action) => {

  switch(action.type) {

    case FOLLOW: {
      let stateCopy = {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
        // users: state.users.map( u => {
        //   if (u.id === action.userID) {
        //     return { ...u, followed: true};
        //   }
        //   return u;
        // })
      }
      return stateCopy
    }

    case UNFOLLOW: {
      let stateCopy = {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
        // users: state.users.map( u => {
        //   if (u.id === action.userID) {
        //     return { ...u, followed: false};
        //   }
        //   return u;
        // })
      }
      return stateCopy
    }

    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
        totalUsersCount: action.totalUsersCount
      }
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }

    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }

    case TOGGLE_FOLLOW_FETCHING: {
      return {
        ...state,
        followFetchingID: (action.isFetching
          ? [...state.followFetchingID, action.id]
          : state.followFetchingID.filter(id => id !== action.id)
        ),
      }
    }

    default:
      return state;
  }
}

export default usersReducer;

export const followSuccess = (userID) => ({type: FOLLOW, userID });
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users, totalUsersCount) => ({type: SET_USERS, users, totalUsersCount});
export const setCurrenPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowFetching = (isFetching, id) => ({type: TOGGLE_FOLLOW_FETCHING, isFetching, id});

export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrenPage(page));

  const data = await usersAPI.getUsers(page, pageSize)

  dispatch(setUsers(data.items, data.totalCount));
  dispatch(toggleIsFetching(false));
};

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(toggleFollowFetching(true, id));

  let data = await apiMethod(id);

  if (data.resultCode === 0){
    dispatch(actionCreator(id));
    dispatch(toggleFollowFetching(false, id));
  }
}

export const follow = id => async dispatch => {
  let apiMethod = usersAPI.follow.bind(usersAPI);
  let actionCreator = followSuccess;
  followUnfollowFlow(dispatch, id, apiMethod, actionCreator)
};

export const unfollow = id => async dispatch => {
  let apiMethod = usersAPI.unfollow.bind(usersAPI);
  let actionCreator = unfollowSuccess;
  followUnfollowFlow(dispatch, id, apiMethod, actionCreator)
}
