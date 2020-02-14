import React from 'react';
import './App.css';

import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/Profile.jsx';
import DialogContainer from './components/Dialog/DialogContainer.jsx';

import { BrowserRouter, Route } from 'react-router-dom';

function App({ state, store }) {
  console.log('render');
  return (
    <BrowserRouter>
      <div className='App-wrapper'>

        <Header className='App-header'/>
        <Navigation className='App-navigation' />
        <div className='App-content'>
          <Route
            path='/messages'
            render={() => <DialogContainer store={store} />}
          />
          <Route
            path='/profile'
            render={ () => <Profile store={store} /> }
          />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
