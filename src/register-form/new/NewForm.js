/* eslint-disable no-unused-vars */
import styles from './NewForm.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import { useFormik, useFormikContext, Formik } from 'formik';
import * as Yup from 'yup';
import { RegisterFormContext } from '../../RegisterFormProvider';
import { validationSchema } from '../../shared/validation/schema';
import UserForm from './form/Form';


const NewForm = () => {
  const registerContext = useContext(RegisterFormContext);

  const randomUserHandler = () => {
    registerContext.getRandomUser();
  };

  const submitUserHandler = (user) => {
    registerContext.addUser(user);
    // const res = registerContext.postUserFn(user).then((res) => {
    //   console.log(res);
    //   return res;
    // }).catch((err) => {
    //   console.log(err);
    // }).finally(() => {
    //   console.log("done");
    // });
    // return res;
  };

  return (
    <React.Fragment>
      <div>
        <button onClick={ randomUserHandler } className='btn btn-info'>Randomize a user</button>
      </div>
      <Formik
        initialValues={ registerContext.defaultUser }
        validationSchema={ validationSchema }
        onSubmit={ submitUserHandler }
      >
        {
          (formik) => {
           return <UserForm formik={ formik } randomUser={ registerContext.defaultUser } 
            submitFn={ registerContext.postUserFn } apiLoading={ registerContext.apiLoading }></UserForm>;
          }
        }
      </Formik>
    </React.Fragment>
    
  );
};

export default NewForm;