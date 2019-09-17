import React from 'react';
import classes from './MyPosts.module.css';

import Post from './Post/Post.jsx';



const MyPosts = (props) => {

  let myPosts = () => props.postsData.map((elem) => <Post message={elem.content} likesCount={elem.likesCount} />);

  let newPostElement = React.createRef();
  let postsBlock = React.createRef();

  let addPost = () => {
    props.addPost(newPostElement.current.value);
  }

  return (
    <div>

      <div className={classes.PostInput}>
        <h3>My Posts</h3>
        <textarea ref={newPostElement}/>
        <div>
          <button onClick={addPost}>Add Post</button>
            <button>Remove</button>
        </div>

      </div>
      <div className={classes.postsBlock} ref={postsBlock}>
        {myPosts()}
      </div>
    </div>
  );
}

export default MyPosts;
