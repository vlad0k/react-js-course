import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <img className={classes['Profile-image']} src='https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg' alt=''/>
      <div className={classes.descBlock}>
        ava+desc
      </div>
    </div>

  );
}

export default ProfileInfo;
