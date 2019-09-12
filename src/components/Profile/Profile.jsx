import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className='Profile'>
      <img className='Profile-image' src='https://www.belightsoft.com/products/imagetricks/img/intro-video-poster@2x.jpg' />
      <div>
        ava + descr
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div>
          <div>
            Post 1
          </div>
          <div>
            Post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
