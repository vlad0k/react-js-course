import React from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

export const withProfileRedirect = (Component, to) => {

  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isAuthorized) {
        return <Redirect to={'/profile'} />
      }
      return <Component {...this.props}/>
    }
  }

  const setStateToProps = (state) => ({
    isAuthorized: state.auth.isAuthorized
  })

  return connect(setStateToProps, {})(RedirectComponent);
}
