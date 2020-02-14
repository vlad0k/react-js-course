import React from 'react';

import MyPosts from './MyPosts.jsx';

import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer.js';

const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }
  let newPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }

  return (
    <MyPosts
      updateNewPostText={newPostChange}
      addPost={addPost}
      postsData={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
    />
  );
}

export default MyPostsContainer;
