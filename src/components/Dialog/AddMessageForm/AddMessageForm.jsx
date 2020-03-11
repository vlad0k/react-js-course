import React from 'react';

import { reduxForm, Field } from 'redux-form';

import { required, maxLengthCreator } from '../../../utils/validators/validators.js';
import { TextArea } from '../../common/FormControls/FormControls.jsx';

const maxLength10 = maxLengthCreator(10);

const SendMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field validate={[ required, maxLength10 ]} component={TextArea} name='newMessage' />
      <input type='submit' value='Send'/>
    </form>
  )
}

export default reduxForm({form: 'dialogAddmessageForm'})(SendMessageForm)
