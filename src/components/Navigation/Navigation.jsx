import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='Navigation'>
      <div className='Navigation-elem'><a href='#'>Profile</a></div>
      <div className='Navigation-elem'><a href='#'>Messages</a></div>
      <div className='Navigation-elem'><a href='#'>News</a></div>
      <div className='Navigation-elem'><a href='#'>Music</a></div>
      <div className='Navigation-elem'><a href='#'>Settings</a></div>
    </nav>
  );
}

export default Navigation;
