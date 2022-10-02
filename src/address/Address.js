/* eslint-disable no-unused-vars */
import styles from './Address.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import Street from './street/Street';
import { useFormik, useFormikContext, Formik } from 'formik';
import * as Yup from 'yup';
import AddressForm from './AddressForm';


// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const validationSchema = Yup.object({
  firstName: Yup.string().min(3, 'Must be at least 3 characters').required('First name is required').trim(),
  lastName: Yup.string().max(5, 'Must be less than 5 characters').required('Requires a last name').trim(),
  email: Yup.string().required(" email!").email("Invalid email!"),
  // birthday: Yup.date().min(new Date(), "min!").required('Required!')
});

const SignupForm = () => {

  
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted

  
  const formSettings = {
    initialValues: {
      firstName: 'Kevin',
      lastName: '',
      email: '',
      birthday: ''
    }
  };
  const submitHandler = (values, actions) => {
    console.log("submitting", values);
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 2000);
  };

  return (
    <React.Fragment>

      <Formik
      initialValues={ formSettings.initialValues }
      validationSchema={ validationSchema }
      onSubmit={ submitHandler }
      >
        {
          (formik) => {
           return <AddressForm formik={ formik } submitHandler={ submitHandler }></AddressForm>;
          }
        }
      </Formik>


    </React.Fragment>
  );
};

export default SignupForm;