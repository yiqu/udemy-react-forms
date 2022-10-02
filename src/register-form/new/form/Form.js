/* eslint-disable no-unused-vars */
import styles from './Form.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import { useFormikContext } from 'formik';
import { useDeepCompareEffect, useShallowCompareEffect, useCustomCompareEffect,
  useLifecycles, useUpdateEffect } from 'react-use';
import FormStats from './status/FormStats';
import FormikTextInput from '../../../shared/input/SimpleInput';
import FormikSelect from '../../../shared/select/Select';


const UserForm = ({formik, randomUser}) => {
  console.log("user form render");
  const { values, submitForm , isValid, touched, dirty, isSubmitting, submitCount, handleSubmit, validateForm,
    validateOnMount, validationSchema, setValues, resetForm } = useFormikContext();

  useUpdateEffect(() => {
    resetForm({
      values: randomUser
    });
  }, [randomUser]);

  return (
    <>
      <form onSubmit={ formik.handleSubmit } className={ `${styles.parent}` }>
        <FormStats stats={ {
          values,
          dirty,
          isValid,
          touched,
          isSubmitting,
          submitCount
        } } />

        <div className="form-row">

          <div className="form-group col">
            <FormikTextInput label="First Name"
              name="firstName"
              type="text"
              placeholder="Enter first name (3)">
            </FormikTextInput>
          </div>


          <div className="form-group col">
            <FormikTextInput label="Last Name"
              name="lastName"
              type="text"
              placeholder="Enter last name (3)">
            </FormikTextInput>
          </div>

          <div className="form-group col">
            <FormikTextInput label="Email"
              name="email"
              type="text"
              placeholder="Enter email">
            </FormikTextInput>
          </div>

          <div className="form-group col-2">
            <FormikTextInput label="Age"
              name="age"
              type="number"
              placeholder="Enter age (>10)">
            </FormikTextInput>
          </div>
        </div>

        <div className="form-group">
          <FormikTextInput label="Address"
            name="address"
            type="text"
            placeholder="Enter address">
          </FormikTextInput>
        </div>
        
        <FormikSelect label="Job Title" name="jobTitle">
          <option value="">Select a job type</option>
          <option value="designer">Designer</option>
          <option value="Software Developer">Software Developer</option>
          <option value="Software Tester">Software Tester</option>
          <option value="other">Other</option>
        </FormikSelect>

      </form>
    
    </>
  );
};

export default UserForm;