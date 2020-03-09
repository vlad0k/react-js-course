import React from 'react';

import Users from './Users.jsx';

import { follow, unfollow, setUsers, setCurrenPage, toggleIsFetching, toggleFollowFetching, getUsers} from '../../redux/users-reducer.js';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect.js';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    if (this.props.currentPage === pageNumber) {
      return;
    }

    this.props.setUsers([], this.props.totalUsersCount);
    this.props.setCurrenPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followFetchingID: state.usersPage.followFetchingID,
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
      getUsers
    }
  )
)(UsersContainer);
