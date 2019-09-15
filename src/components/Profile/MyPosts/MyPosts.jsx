import React from 'react';
import classes from './MyPosts.module.css';

import Post from './Post/Post.jsx';

const MyPosts = () => {

  let postsData = [
    {
      id: 1,
      content: 'Hi, there',
      likesCount: 9
    },
    {
      id: 0,
      content: 'My 1st post',
      likesCount: 12
    },
    {
      id: 2,
      content: 'Blah Blah Blah',
      likesCount: 12
    }
  ];
  let posts = postsData.map(elem => <Post message={elem.content} likes={elem.likesCount}/>)
  return (
    <div>

      <div className={classes.PostInput}>
        <h3>My Posts</h3>
        <textarea />
        <div>
          <button>Add</button>
          <button>Remove</button>
        </div>

      </div>
      <div className={classes.postsBlock}>
        {posts}
      </div>
    </div>
  );
}

export default MyPosts;
