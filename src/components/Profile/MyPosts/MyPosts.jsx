import React from 'react';
import classes from './MyPosts.module.css';

import { reduxForm, Field } from 'redux-form';

import { required, maxLengthCreator } from '../../../utils/validators/validators.js';
import { TextArea } from '../../common/FormControls/FormControls.jsx';

import Post from './Post/Post.jsx';

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form className={classes.PostInput} onSubmit={props.handleSubmit}>
      <h3>My Posts</h3>

      <Field validate={[required, maxLength10]} component={TextArea} name='newPostText' placeholder='Post message'/>
      <div>
        <input type='submit' value='Add Post' />

      </div>
      <input type="reset"/>
    </form>
  )
}

const AddNewPostReduxForm = reduxForm({form: 'newPostText'})(AddNewPostForm);

const MyPosts = (props) => {

  let myPosts = () => props.postsData.map((elem) => <Post message={elem.content} likesCount={elem.likesCount} />);

  let onSubmit = (formData) => {
    props.addPost(formData.newPostText);
  }

  return (
    <div>
      <AddNewPostReduxForm onSubmit={onSubmit}/>
      <div className={classes.postsBlock}>
        {myPosts()}
      </div>
    </div>
  );
}

export default MyPosts;
