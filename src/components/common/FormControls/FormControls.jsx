import React, { createElement } from 'react';
import classes from './FormControls.module.css';

const FormControl = ({input, meta, element, label, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={classes['formControl'] + ' ' + (hasError ? classes['error'] : '')}>
      <div>
        {createElement(element, { ...input, ...props})}{label}
      </div>
      <div>
        { hasError && <span>{meta.error}</span>}
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
