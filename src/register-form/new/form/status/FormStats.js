/* eslint-disable no-unused-vars */
import styles from './FormStats.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';

const FormStats = ({stats}) => {
  const keys = Object.keys(stats);
  return (
    <div className={ styles.parent }>
      {
        keys.map((res) => {
          return <div key={ res } className={ styles.cata }>
            <div className={ `${styles.label}` }>{res}:</div>
            <div className={ styles.value }>{ JSON.stringify(stats[res])}</div>
          </div>;
        })
      }
    </div>
  );
};

export default FormStats;