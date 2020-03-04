import React from 'react';
import * as axios from 'axios';

import Users from './Users.jsx';

import { follow, unfollow, setUsers, setCurrenPage, toggleIsFetching } from '../../redux/users-reducer.js';

import { connect } from 'react-redux';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items, response.data.totalCount);
      this.props.toggleIsFetching(false);
    });
  }

  onPageChange = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setUsers([], this.props.totalUsersCount);
    this.props.setCurrenPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items, response.data.totalCount);
      this.props.toggleIsFetching(false);
    });
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

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrenPage, toggleIsFetching,})(UsersContainer);
