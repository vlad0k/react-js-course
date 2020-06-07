import React from 'react';


import Preloader from './components/common/Preloader/Preloader.jsx';
import logo from './assets/images/logo512.png';



import NavigationContainer from './components/Navigation/NavigationContainer.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import DialogContainer from './components/Dialog/DialogContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import LoginContainer from './components/Login/LoginContainer.jsx';
import SettingsContainer from './components/Settings/SettingsContainer.jsx';


import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer.js';

class App extends React.Component {

  componentDidMount() {
      this.props.initializeApp();
  }

  render() {
    
    if(!this.props.initialized){
      return (
        <div className='App-preloader-wrapper'>
          <img className='App-logo' src={logo} alt='dkfs'/>
          <div className='App-preloader'>
            <span>Loading...</span> <Preloader  />
          </div>
        </div>
      )
    }

    return (
      <div className='App-wrapper'>

        <HeaderContainer className='App-header'/>

        <NavigationContainer className='App-navigation' />

        <div className='App-content'>
          <Route
            path='/'
            render={ () => <ProfileContainer /> }
            exact
          />
          <Route
            path='/messages'
            render={() => <DialogContainer />}
          />
          <Route
            path='/profile/:userid?'
            render={ () => <ProfileContainer /> }
          />
          <Route
            path='/users'
            render={ () => <UsersContainer /> }
          />
          <Route
            path='/login'
            render={ () => <LoginContainer /> }
          />
          <Route
            path='/settings'
            render={ () => <SettingsContainer /> }
          />
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized,
});


  connect(mapStateToProps, {initializeApp}),
  withRouter,
)(App);