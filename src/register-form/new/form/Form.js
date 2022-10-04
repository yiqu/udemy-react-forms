/* eslint-disable no-unused-vars */
import styles from './Form.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import { useFormikContext } from 'formik';
import { useDeepCompareEffect, useShallowCompareEffect, useCustomCompareEffect,
  useLifecycles, useUpdateEffect } from 'react-use';
import FormStats from './status/FormStats';
import FormikTextInput from '../../../shared/input/SimpleInput';
import FormikSelect from '../../../shared/select/Select';
import FormikCheckbox from "../../../shared/checkbox/Checkbox";
import { emptyFormValue } from "../../../RegisterFormProvider";
import FormikRadio from "../../../shared/radio/Radio2";


const UserForm = ({formik, randomUser, submitFn, apiLoading, cancelAddFn}) => {
  const { values, submitForm , isValid, touched, dirty, isSubmitting, submitCount, handleSubmit, validateForm,
    validateOnMount, validationSchema, setValues, resetForm, setSubmitting, errors, setTouched } = useFormikContext();

  useUpdateEffect(() => {
    resetForm({
      values: randomUser
    });
  }, [randomUser]);

  const submitHandler = async (payload) => {
    handleSubmit();
    const formErrors = await validateForm();
    const errorNames = Object.keys(formErrors);
    if (errorNames.length > 0) {
      const doc = document.querySelectorAll(`[name="${errorNames[0]}"]`)[0];
      doc?.focus();
    }
  };

  const resetCurrentForm= () => {
    resetForm({
      values: emptyFormValue
    });
  };

  const cancelAddUserHandler = () => {
    cancelAddFn(false);
  };

  return (
    <>
      <form onSubmit={ formik.handleSubmit } className={ `${styles.parent}` }>
        <fieldset disabled={ apiLoading }>
          <FormStats stats={ {
          values,
          dirty,
          isValid,
          touched,
          isSubmitting,
          submitCount,
          apiLoading: apiLoading
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
              <FormikTextInput label="Middle Name"
              name="middleName"
              type="text"
              placeholder="Enter middle name (3)">
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

            <div className="form-group col-2">
              <FormikRadio label="Sex"
              name="sex" options={ [{ display: 'Male', value: 'male' },
              { display: 'Female', value: 'female' }] }>
              </FormikRadio>
            </div>
          </div>

          <div className="form-group">
            <FormikTextInput label="Address"
            name="address"
            type="text"
            placeholder="Enter address">
            </FormikTextInput>
          </div>
        
          <div className="form-group">
            <FormikSelect label="Job Title" name="jobTitle">
              <option value="null">Select a job title</option>
              <option value="designer">Designer</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Software Tester">Software Tester</option>
              <option value="other">Other</option>
            </FormikSelect>
          </div>
        

          <div className="form-group">
            <FormikCheckbox label="Privacy" name="terms">
              Agree to terms
            </FormikCheckbox>
          </div>
       
          <div className='d-flex justify-content-between'>
            <div>
              <button className="btn btn-primary btn-sm mr-2" onClick={ submitHandler } type="button"
            disabled={ apiLoading }>{ apiLoading ? 'Working...' : 'Submit' }</button>
              <button type="button" className="btn btn-info btn-sm" onClick={ resetCurrentForm }>Reset</button>
            </div>
         
            <button type="button" className="btn btn-danger btn-sm" onClick={ cancelAddUserHandler }>Cancel</button>
          </div>
        </fieldset>
        
      </form>
    
    </>
  );
};

export default UserForm;