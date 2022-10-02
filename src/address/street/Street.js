/* eslint-disable no-unused-vars */
import styles from './Street.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import { AddressContext } from '../../RegisterFormProvider';

const Street = () => {
  console.log("street render");

  const addressContext = useContext(AddressContext);

  const streetNameHandler = (event) => {
    addressContext.updateStreetName(event.target.value);
  };


  return (
    <div className={ `d-flex justify-content-start` }>
      <div>
        Street: 
      </div>

      <div>
        <input onChange={ streetNameHandler } value={ addressContext.streetName }/>
      </div>
      
    </div>
  );
};

export default Street;