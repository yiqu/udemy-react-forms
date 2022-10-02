/* eslint-disable no-unused-vars */
import styles from './Core.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import RegisterFormProvider from './RegisterFormProvider';
import Registration from './register-form/Register';


const Core = () => {

  return (
    <div className={ `${styles.parent}` }>

      <RegisterFormProvider>

        <Registration></Registration>

      </RegisterFormProvider>

      <hr></hr>
      <div>
        Current users:
      </div>

    </div>
  );
};

export default Core;


