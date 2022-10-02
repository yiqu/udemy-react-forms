/* eslint-disable no-unused-vars */
import styles from './NewForm.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import { useFormik, useFormikContext, Formik } from 'formik';
import * as Yup from 'yup';
import { RegisterFormContext } from '../../RegisterFormProvider';
import { validationSchema } from '../../shared/validation/schema';
import UserForm from './form/Form';


const NewForm = () => {
  console.log("new form render");
  const registerContext = useContext(RegisterFormContext);

  const formSettings = {
    initialValues: {
      ...registerContext.defaultUser
    }
  };

  const randomUserHandler = () => {
    registerContext.getRandomUser();
  };

  const submitUserHandler = (user) => {
    console.log("submit", user);
  };

  return (
    <React.Fragment>
      <div>
        <button onClick={ randomUserHandler } className='btn btn-info'>Randomize a user</button>
      </div>
      <Formik
        initialValues={ formSettings.initialValues }
        validationSchema={ validationSchema }
        onSubmit={ submitUserHandler }
      >
        {
          (formik) => {
           return <UserForm formik={ formik } randomUser={ registerContext.defaultUser } ></UserForm>;
          }
        }
      </Formik>
    </React.Fragment>
    
  );
};

export default NewForm;