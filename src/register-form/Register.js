/* eslint-disable no-unused-vars */
import styles from './Register.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import { useFormik, useFormikContext, Formik } from 'formik';
import * as Yup from 'yup';
import NewForm from './new/NewForm';


const Registration = () => {
  return (
    <div className='mb-3'>

      <NewForm></NewForm> 

    </div>
  );
};

export default React.memo(Registration);