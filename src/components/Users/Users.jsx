import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

import { NavLink } from  'react-router-dom';

import Preloader from '../common/Preloader/Preloader.jsx';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);


  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={classes['Users']}>

      {
        pages.map(p => {
          return (<span className={[classes['pagePicker']+' '+((props.currentPage === p) && classes['selectedPage'])]} onClick={() => {props.onPageChange(p)}}>{p}</span>);
        })
      }

      {props.isFetching && <Preloader isFetching={props.isFetching}/>}

      {
        props.users.map( u => (
          <div key={u.id}>
            <span>
              <NavLink to={`/profile/${u.id}`}>
                <img className={classes['userPhoto']} src={ u.photos.small ? u.photos.small : userPhoto} alt={u.name}/>
              </NavLink>

              <div>
                {!u.followed && <button onClick={() => props.follow(u.id)}>Follow</button>}
                {u.followed && <button onClick={() => props.unfollow(u.id)}>Unfollow</button>}
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
          </div>)
        )
      }
    </div>
  )
}

export default Users;
