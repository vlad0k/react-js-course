import React from 'react';
import classes from './Profile.module.css';

import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = () => {
  return (
    <div className={classes['Profile']}>
      <div>
        <ProfileInfo />
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;
