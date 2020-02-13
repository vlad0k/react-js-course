import React from 'react';
import classes from './MyPosts.module.css';

import Post from './Post/Post.jsx';

import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer.js';




// let updateNewPostTextActionCreator = (newText) => {
//   return {
//     type: 'UPDATE-NEW-POST-TEXT',
//     newText: newText
//   }
// }
//
// let addPostActionCreator = () => {
//   return {
//     type: 'ADD-POST'
//   }
// }

const MyPosts = (props) => {

  let myPosts = () => props.postsData.map((elem) => <Post message={elem.content} likesCount={elem.likesCount} />);


  let postsBlock = React.createRef();
  let newPostElement = React.createRef();
  let newPostClear = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
    // props.addPost(newPostElement.current.value);
  }
  let newPostChange = () => {
    let action = updateNewPostTextActionCreator(newPostElement.current.value);
    props.dispatch(action);
    // props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value});
  }
  let newPostClearF = () => {
    // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: ''};
    if (newPostElement.current.value){
      let action = updateNewPostTextActionCreator('');
      props.dispatch(action);
    }
    // props.updateNewPostText('');
  }

  return (
    <div>

      <div className={classes.PostInput}>
        <h3>My Posts</h3>
        <textarea onChange={newPostChange} ref={newPostElement} value={props.newPostText}/>
        <div>
          <button onClick={addPost}>Add Post</button>
          <button onClick={newPostClearF} ref={newPostClear}>Clear</button>
        </div>

      </div>
      <div className={classes.postsBlock} ref={postsBlock}>
        {myPosts()}
      </div>
    </div>
  );
}

export default MyPosts;
