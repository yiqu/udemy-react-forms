/* eslint-disable no-unused-vars */
import styles from './User.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';

export const User = ({data}) => {

  return (
    <div className={ `${styles.parent}` }>
      <div>
        { data.id }
      </div>
      <div>
        { data.firstName }
      </div>
      <div>
        { data.lastName }
      </div>
      <div>
        { data.age }
      </div>
      <div>
        { data.jobTitle }
      </div>
    </div>
  );
};

export default User;