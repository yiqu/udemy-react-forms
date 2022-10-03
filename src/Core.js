/* eslint-disable no-unused-vars */
import styles from './Core.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import RegisterFormProvider from './RegisterFormProvider';
import Registration from './register-form/Register';
import Users from './users/Users';


const Core = () => {

  return (
    <div className={ `${styles.parent}` }>

      <RegisterFormProvider>

        <Registration></Registration>

      </RegisterFormProvider>
      
      <Users></Users>

    </div>
  );
};

export default Core;


