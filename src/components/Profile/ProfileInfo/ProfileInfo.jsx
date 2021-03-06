import React from 'react';
import classes from './ProfileInfo.module.css';
import userPNG from '../../../assets/images/user.png';
import ProfileStatusHooks from './ProfileStatusHooks';


import Preloader from '../../common/Preloader/Preloader.jsx'


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {
        // <img className={classes['Profile-image']} src='https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg' alt=''/>
      }
      <div className={classes.descBlock}>
        <img className={classes['userPhoto']} src={props.profile.photos.large ? props.profile.photos.large : userPNG} alt='avatar'/>
        <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} pageID={props.pageID} myID={props.myID}/>
      </div>
    </div>

  );
}

export default ProfileInfo;
