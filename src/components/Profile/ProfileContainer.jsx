import React from 'react';
import Profile from './Profile.jsx';

import { getUserProfile, getUserStatus, updateStatus } from '../../redux/profile-reducer.js';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { withAuthRedirect } from '../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userID = this.props.match.params.userid
    if (!userID) {
      userID = this.props.myID;
    }
    this.props.getUserProfile(userID);
    this.props.getUserStatus(userID);
  }

  render() {
    return (
      <div>
        <Profile {...this.props}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myID: state.auth.id,
  }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let withURLDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, { getUserProfile })(withURLDataContainerComponent);

export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }),
)(ProfileContainer);
