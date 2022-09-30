/* eslint-disable no-unused-vars */
import styles from './Core.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import Address from './address/Address';
import AddressProvider from './AddressProvider';


const Core = () => {

  return (
    <div className={ `${styles.parent}` }>

      <AddressProvider>

        <Address></Address>

      </AddressProvider>

    </div>
  );
};

export default Core;


