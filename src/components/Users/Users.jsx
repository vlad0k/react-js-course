import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

 const Users = (props) => {

   (props.users.length === 0) && axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
     console.log(response);
     props.setUsers(response.data.items);
   });

   // (props.users.length === 0) && props.setUsers([
   //     {id: 1, photoURL, followed: false, fullName: 'Dmitry', status:"I'm a boss", location: {city: 'Minsk', country: 'Belarus'} },
   //     {id: 2, photoURL, followed: true, fullName: 'Alex', status:"I'm a boss too", location: {city: 'Moskow', country: 'Russia'} },
   //     {id: 3, photoURL, followed: false, fullName: 'Andrew', status:"I'm a mini-boss", location: {city: 'KievUkraine', country: 'Ukraine'} },
   //   ]
   // );

   return(
    <div className={classes['Users']}>
      {
        props.users.map( u => <div key={u.id}>
          <span>
            <div>
              <img className={classes['userPhoto']} src={ u.photos.small ? u.photos.small : userPhoto} alt={u.name}/>
            </div>

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
      }
    </div>
  )
}

export default Users;
