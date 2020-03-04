import React from 'react';
import classes from './Profile.module.css';

import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import Preloader from '../common/Preloader/Preloader.jsx';

const Profile = (props) => {
  if(!props.profile){
    return <Preloader />
  }

  return (
    <div className={classes['Profile']}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
