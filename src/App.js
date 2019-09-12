import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/Profile.jsx';

function App() {
  return (
    <div className='App-wrapper'>

      <Header className='App-header'/>

      <Navigation className='App-navigation' />

      <Profile className='App-content' />

    </div>
  );
}

export default App;
