import React from 'react';
import classes from './MyPosts.module.css';

import Post from './Post/Post.jsx';

const MyPosts = (props) => {

  let myPosts = () => props.postsData.map((elem) => <Post message={elem.content} likesCount={elem.likesCount} />);


  let postsBlock = React.createRef();
  let newPostElement = React.createRef();
  let newPostClear = React.createRef();

  let addPost = () => {
    props.addPost();
  }
  let newPostChange = () => {
    props.updateNewPostText(newPostElement.current.value);
  }
  let newPostClearF = () => {
    if (newPostElement.current.value){
      props.updateNewPostText('');
    }
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
