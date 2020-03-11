// import React from 'react';

import MyPosts from './MyPosts.jsx';

import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer.js';

// import StoreContext from '../../../StoreContext';

import { connect } from 'react-redux';

// const MyPostsContainer = () => {
//
//   let addPost = (store) => {
//     store.dispatch(addPostActionCreator());
//   }
//   let newPostChange = (store, text) => {
//     let action = updateNewPostTextActionCreator(text);
//     store.dispatch(action);
//   }
//
//   return (
//     <StoreContext.Consumer>
//       {(store) => (
//         <MyPosts
//           updateNewPostText={(text) => newPostChange(store, text)}
//           addPost={() => addPost(store)}
//           postsData={store.getState().profilePage.postsData}
//           newPostText={store.getState().profilePage.newPostText}
//         />
//       )}
//     </StoreContext.Consumer>
//   );
// }

const mapStateToProps = (state) => ({
  postsData: state.profilePage.postsData,
  newPostText: state.profilePage.newPostText,
})

const mapDispatchToProps = (dispatch) => ({
  updateNewPostText: (text) => {
    dispatch(updateNewPostTextActionCreator(text))
  },
  addPost: (text) => {
    dispatch(addPostActionCreator(text))}
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
