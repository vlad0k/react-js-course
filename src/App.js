import React from 'react';
import './App.css';

import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import DialogContainer from './components/Dialog/DialogContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App-wrapper'>

      <HeaderContainer className='App-header'/>
      <Navigation className='App-navigation' />
      <div className='App-content'>
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
      </div>

    </div>
  );
}

export default App;
