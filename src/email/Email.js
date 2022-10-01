/* eslint-disable no-unused-vars */
import styles from './Email.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';


const Email = () => {

  const [email, setEmail] = useState('');
  const [isTouched, setTouched] = useState(false);

  const inputChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const inputBlurHandler = () => {
    setTouched(true);
  };

  const submitHandler = () => {
    setTouched(true);
    if (!email.includes("@")) {
      return;
    } else {
      setTouched(false);
      setEmail("");
    }
  };
  
  let isInvalid = false;
  
  if (isTouched  && !email.includes("@")) {
    isInvalid = true;
  }

  return (
    <div className={ `d-flex ${styles.parent}` }>
      <div>
        <div>
          Email
        </div>
        <input onChange={ inputChangeHandler } onBlur={ inputBlurHandler } value={ email }/>
      </div>
      { isInvalid && <div className='text-danger'>Check your email input!</div> }
      <div>
        <button className='btn btn-primary' onClick={ submitHandler }>Submit</button>
      </div>
    </div>
  );
};

export default Email;