/* eslint-disable no-unused-vars */
import styles from './Checkbox.module.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const FormikCheckbox = ({children, ...props}) => {

  const [field, meta, helper ] = useField({...props, type: 'checkbox'});


  return (
    <div>
      <label className={ `${styles.parent}` }>
        <input type="checkbox" { ...props } { ...field } />
        { children}
      </label>
      {
        meta.touched && meta.error ? (<div className="text-danger">
          {meta.error}
        </div>) : null
      }
    </div>
  );

};

export default FormikCheckbox;