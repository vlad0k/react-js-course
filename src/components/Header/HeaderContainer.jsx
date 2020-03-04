import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';

import Header from './Header.jsx';



import { setAuthUserData } from '../../redux/auth-reducer.js';


class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true
      })
      .then(response => {
        if (response.data.resultCode === 0){
          this.props.setAuthUserData( response.data.data.login)
        }
      });
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
