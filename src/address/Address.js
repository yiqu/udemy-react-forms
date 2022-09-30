/* eslint-disable no-unused-vars */
import styles from './Address.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import Street from './street/Street';


const Address = () => {
console.log("addrsss render");
  return (
    <div>
      <div>
        Address:
      </div>
      
      <Street></Street>

    </div>
  );
};

export default Address;