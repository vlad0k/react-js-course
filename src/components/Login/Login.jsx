import React from 'react';
import classes from './Login.module.css';
import { reduxForm } from 'redux-form';
import classesForm from '../common/FormControls/FormControls.module.css';

import { required } from '../../utils/validators/validators.js';
import { Input, createField } from '../common/FormControls/FormControls.jsx';

const LoginForm = ({ handleSubmit, error, reset}) => {
  return (
    <form onSubmit={ handleSubmit}>

      {createField('Email', 'email', [required], Input, {type: 'email'})}
      {createField('Password', 'password', [required], Input, {type: 'password'})}
      {createField(null, 'rememberMe', null, Input, { type: 'checkbox', label: 'Remember Me' })}
      { error && <div className={classesForm["formSummaryError"]}>{ error}</div>}
      <div>
        <input type='submit' value='Login'/>
        <input type='reset' value='Clear' onClick={ reset}/>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

  const initialValues = {
    email: 'kaxad92526@mailernam.com',
    password: '1234'
  }

  const onSubmit = (formData) => {
    const {email, password, rememberMe} = formData;
    props.login(email, password, rememberMe);
  }
  return (
    <div className={classes['Login']}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} initialValues={initialValues} />
    </div>
  );
}

export default Login
