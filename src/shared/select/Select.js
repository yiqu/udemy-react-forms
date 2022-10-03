/* eslint-disable no-unused-vars */
import styles from './Select.module.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';

const FormikSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>

      <label htmlFor={ props.id || props.name }>
        {label}
      </label>

      <select { ...field } { ...props } className="form-control form-control-sm" />

      {meta.touched && meta.error ? (
        <div className="text-danger form-error">{meta.error}</div>
      ) : null}

    </>
  );
};

export default FormikSelect;