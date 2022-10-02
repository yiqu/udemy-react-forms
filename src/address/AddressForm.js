/* eslint-disable no-unused-vars */
import styles from './Address.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import { useFormikContext } from 'formik';

const AddressForm = ({formik, submitHandler}) => {
  const { values, submitForm , isValid, touched, dirty, isSubmitting, submitCount, handleSubmit, validateForm,
  validateOnMount, validationSchema} = useFormikContext();
  const suHandler = () => {
    if (isValid){
      submitForm(values);
    }
  };
  useEffect(() => {
    console.log("hi");
    validateForm();
  }, [validateForm]);
  return (

    <form onSubmit={ formik.handleSubmit } className={ `${styles.parent} my-3` }>

      <div>
        Values: { JSON.stringify(values) }
      </div>
      <div>
        Is Dirty:{ JSON.stringify(dirty) }
      </div>
      <div>
        Is Valid: { JSON.stringify(isValid) }
      </div>
      <div>
        Touched: { JSON.stringify(touched) }
      </div>
      <div>
        IS submitting: { JSON.stringify(isSubmitting) }
      </div>
      <div>
        submit count: { JSON.stringify(submitCount) }
      </div>
      <label htmlFor="firstName">First Name</label>
      <input
   id="firstName"
   type="text"
   { ...formik.getFieldProps('firstName') }
 />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
 ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
   id="lastName"
   type="text"
   { ...formik.getFieldProps('lastName') }
 />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
 ) : null}

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" { ...formik.getFieldProps('email') } />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
 ) : null}

      <button type="button" onClick={ suHandler }>Submit</button>
    </form>
  );
};

export default AddressForm;