import React from 'react';

import Users from './Users.jsx';

import { follow, unfollow, setUsers, setCurrenPage, toggleIsFetching, toggleFollowFetching, requestUsers} from '../../redux/users-reducer.js';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowFetchingID } from '../../redux/users-selector.js';


import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect.js';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    if (this.props.currentPage === pageNumber) {
      return;
    }

    this.props.setUsers([], this.props.totalUsersCount);
    this.props.requestUsers(pageNumber, this.props.pageSize);
  }

  render(){

    return (
      <>
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isFetching={this.props.isFetching}
          toggleIsFetching={this.props.toggleIsFetching}
          followFetchingID={this.props.followFetchingID}

        />
      </>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followFetchingID: getFollowFetchingID(state),
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userID) => {
//       dispatch(followAC(userID));
//     },
//     unfollow: (userID) => {
//       dispatch(unfollowAC(userID));
//     },
//     setUsers: (users, totalUsersCount) => {
//       dispatch(setUsersAC(users, totalUsersCount));
//     },
//     setCurrenPage: (currentPage) => {
//       dispatch(setCurrenPageAC(currentPage));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     }
//   }
// }

// let withRedirectUsersContainer = withAuthRedirect(UsersContainer);
//
// export default connect(mapStateToProps, {follow, unfollow, setUsers,
//   setCurrenPage, toggleIsFetching, toggleFollowFetching,
//   getUsers})(withRedirectUsersContainer);

export default compose(
  withAuthRedirect,
  connect(
    mapStateToProps,
    {
      follow,
      unfollow,
      setUsers,
      setCurrenPage,
      toggleIsFetching,
      toggleFollowFetching,
      requestUsers
    }
  )
)(UsersContainer);
