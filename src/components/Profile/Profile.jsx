import React from 'react';
import classes from './Profile.module.css';

import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
  return (
    <div className={classes['Profile']}>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
      />
    </div>
  );
}

export default Profile;
