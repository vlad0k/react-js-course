import React from 'react';

const Settings = props => {

  const logoutHandler = e => {
    props.logout();
  }

  return(
    <div>
      <button onClick={logoutHandler}>Log Out</button>
    </div>
  )
}

export default Settings;
