/* eslint-disable no-unused-vars */
import styles from './Register.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import { useFormik, useFormikContext, Formik } from 'formik';
import * as Yup from 'yup';
import NewForm from './new/NewForm';


const Registration = () => {

  const [showNewForm, setShowNewForm] = useState(true);

  const toggleNewFormHandler = () => {
    setShowNewForm((prev) => {
      return !prev;
    });
  };

  return (
    <React.Fragment>
      { showNewForm ? <NewForm></NewForm> : <div>
        <button className='btn btn-primary' onClick={ toggleNewFormHandler }>Add new user</button>
      </div>}
    </React.Fragment>
  );
};

export default React.memo(Registration);