/* eslint-disable no-unused-vars */
import styles from './Users.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import { useFireCollection } from '../shared/firebase/collection-hooks';
import useWhyDidYouUpdate from '../shared/hooks/whyDidYouUpdate';
import User from './User/User';
import DateDisplay from '../shared/date/DateDisplay';


export const Users = () => {

  const { values, isLoading, error } = useFireCollection();

  const sorted = useMemo(() => {
    let val = [...values];
    val.sort((prev, curr) => {
      return (prev.dateAdded ?? 0) < (curr.dateAdded ?? 0) ? 1 : -1;
    });
    return val;
    
  }, [values]);

  return (
    <>
      {
      isLoading ? 
      (
        <div>
          {isLoading ? 'Loading..' : ''}
        </div>
      ) 
        : 
      (
        <div>
          <div className='poppins fs-13 mb-2'>
            There are currently { values.length } users.
          </div>
          <table>
            <tbody>
              <tr>
                <th>First Name</th>
                <th>M.</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Email</th>
                <th>Job</th>
                <th>ID</th>
                <th>Date Added</th>
              </tr>

              { sorted.map((res) => {
            return (
              <tr key={ res.id }>
                <td>{res.firstName}</td>
                <td>{res.middleName}</td>
                <td>{res.lastName}</td>
                <td>{res.age}</td>
                <td>{res.address}</td>
                <td>{res.email}</td>
                <td>{res.jobTitle}</td>
                <td>{res.id.slice(0, 5)}</td>
                <td>
                  <DateDisplay date={ res.dateAdded }></DateDisplay>
                </td>
              </tr>
            );
          }) }
            </tbody>
          </table>
        </div>
      )
      }
    </>
   
  );
};

export default Users;