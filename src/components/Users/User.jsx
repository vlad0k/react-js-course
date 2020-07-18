import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

import { NavLink } from  'react-router-dom';

import Preloader from '../common/Preloader/Preloader.jsx';
import Paginator from '../common/Paginator/Paginator.jsx';

const User = (props) => {
  return (


          <div key={u.id}>
            <span>

              <NavLink to={`/profile/${u.id}`}>
                <img className={classes['userPhoto']} src={ u.photos.small ? u.photos.small : userPhoto} alt={u.name}/>
              </NavLink>

              <div className={classes['follow']}>

                {!u.followed && <button
                    disabled={props.followFetchingID.some(id => id === u.id)}
                    onClick={() => props.follow(u.id)}
                  >Follow</button>}

                {u.followed && <button
                    disabled={props.followFetchingID.some(id => id === u.id)}
                    onClick={() => props.unfollow(u.id)}
                  >Unfollow</button>}

                {props.followFetchingID.some(id => id === u.id) && <Preloader />}

              </div>

            </span>

            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>

              <span>
                <div>{'u.location.city'}</div>
                <div>{'u.location.country'}</div>
              </span>
            </span>
          </div>
  )
}

export default User;
