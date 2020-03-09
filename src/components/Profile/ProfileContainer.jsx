import React from 'react';
import Profile from './Profile.jsx';

import { getUserProfile } from '../../redux/profile-reducer.js';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

// import { withAuthRedirect } from '../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userID = this.props.match.params.userid ? this.props.match.params.userid : 6083/*this.props.myID*/;
    console.log(this.props.match.params.userid, this.props.myID);

    this.props.getUserProfile(userID);
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
    myID: state.auth.id
  }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let withURLDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, { getUserProfile })(withURLDataContainerComponent);

export default compose(
  withRouter,
  connect(mapStateToProps, { getUserProfile }),
)(ProfileContainer);
