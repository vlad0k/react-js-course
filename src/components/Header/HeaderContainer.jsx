import React from 'react';
import { connect } from 'react-redux';

import Header from './Header.jsx';



import { getAuthUserData } from '../../redux/auth-reducer.js';


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuthorized: state.auth.isAuthorized,
  login: state.auth.login,
});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
