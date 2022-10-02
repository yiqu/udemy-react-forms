/* eslint-disable no-unused-vars */
import styles from './Select.module.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';

const FormikSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>

      <label htmlFor={ props.id || props.name }>
        {label}
      </label>

      <select { ...field } { ...props } className="custom-select" />

      {meta.touched && meta.error ? (
        <div className="text-danger form-error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikSelect;