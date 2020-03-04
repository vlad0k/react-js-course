import React from 'react';
import Profile from './Profile.jsx';
import axios from 'axios';

import { setUserProfile } from '../../redux/profile-reducer.js';

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userID = this.props.match.params.userid;
    if (!userID) {
      userID = 2;
    }

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then( response => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

let withURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(withURLDataContainerComponent);
