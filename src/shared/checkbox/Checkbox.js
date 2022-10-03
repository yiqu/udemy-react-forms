/* eslint-disable no-unused-vars */
import styles from './Checkbox.module.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const FormikCheckbox = ({children, ...props}) => {


  // define type for special input types
  const [field, meta, helper ] = useField({
    ...props, 
    type: 'checkbox'
  });

  return (
    <>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id={ props.id || props.name } { ...props } { ...field }/>
        <label className="form-check-label" htmlFor={ props.id || props.name }>
          { children }
        </label>
      </div>
      {
        meta.touched && meta.error ? (<div className="text-danger form-error">
          {meta.error}
        </div>) : null
      }
    </>
  );

};

export default FormikCheckbox;