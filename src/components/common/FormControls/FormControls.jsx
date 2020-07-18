import React, { createElement } from 'react';
import { Field } from 'redux-form';
import classes from './FormControls.module.css';

const FormControl = ({input, meta: {touched, error}, element, label, ...props}) => {
  const hasError = touched && error;
  return (
    <div className={classes['formControl'] + ' ' + (hasError ? classes['error'] : '')}>
      <div>
        {createElement(element, { ...input, ...props})}{label}
      </div>
      <div>
        { hasError && <span>{error}</span>}
      </div>

    </div>
  )
}

export const TextArea = (props) => {
  return(
   <FormControl {...props} element='textarea'/>
 )};

 export const Input = (props) => {
   console.log(props);
   return(
    <FormControl {...props} element='input'/>
  )};

  export const createField = (placeholder, name, validators, component, props) => (
    <div>
      <Field validate={validators} placeholder={placeholder} component={component} name={name} {...props}/>
    </div>
  );

// export const TextArea = ({input, meta, ...props}) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={classes['formControl'] + ' ' + (hasError ? classes['error'] : '')}>
//       <div>
//         <textarea {...input} {...props}/>
//       </div>
//       <div>
//         { hasError && <span>{meta.error}</span>}
//       </div>
//
//     </div>
//   )
// }

// export const Input = ({input, meta, ...props}) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={classes['formControl'] + ' ' + (hasError ? classes['error'] : '')}>
//       <div>
//         <input {...input} {...props}/>
//       </div>
//       <div>
//         { hasError && <span>{meta.error}</span>}
//       </div>
//     </div>
//   )
// }


// const Element = Element => ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={ props.formControl + " " + (hasError ? props.error : "") }>
//       <Element {...input} {...props} />
//       { hasError && <span> { meta.error } </span> }
//     </div>
//   );
// };
