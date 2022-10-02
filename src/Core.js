/* eslint-disable no-unused-vars */
import styles from './Core.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import Address from './address/Address';
import RegisterFormProvider from './RegisterFormProvider';


const Core = () => {

  return (
    <div className={ `${styles.parent}` }>

      <RegisterFormProvider>

        <Address></Address>

      </RegisterFormProvider>

    </div>
  );
};

export default Core;


