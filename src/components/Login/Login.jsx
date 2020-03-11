import React from 'react';
import classes from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import classesForm from '../common/FormControls/FormControls.module.css';

import { required } from '../../utils/validators/validators.js';
import { Input } from '../common/FormControls/FormControls.jsx';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate={required} placeholder='Email' component={Input} type='email' name='email' val='free@samuraijs.com' />
      </div>

      <div>
        <Field validate={required} placeholder='Password' type='password' component={Input} name='password' val='free'/>
      </div>

      <div>
        <Field component={Input} name='rememberMe' type='checkbox' placeholder='login' label='Remember Me'/>
      </div>
      { props.error && <div className={classesForm["formSummaryError"]}>{props.error}</div>}
      <div>
        <input type='submit' value='Login'/>
        <input type='reset' value='Clear' onClick={props.reset}/>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

  const initialValues = {
    email: 'free@samuraijs.com',
    password: 'free'
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
