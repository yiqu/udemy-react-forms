/* eslint-disable no-unused-vars */
import styles from './Table.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import DateDisplay from '../../shared/date/DateDisplay';
import useWhyDidYouUpdate from '../../shared/hooks/whyDidYouUpdate';

const UserTable = (props) => {

  return (
    <>
      {
      props.isLoading ? 
      (
        <div>
          {props.isLoading ? 'Loading..' : ''}
        </div>
      ) 
        : 
      (
        <div>
          <div className='poppins fs-13 mb-2'>
            There are currently {  } users.
          </div>
          <table>
            <tbody>
              <tr>
                <th>First Name</th>
                <th>M.</th>
                <th>Last Name</th>
                <th>Sex</th>
                <th>Age</th>
                <th>Address</th>
                <th>Email</th>
                <th>Job</th>
                <th>ID</th>
                <th>Date Added</th>
              </tr>

              { props.sorted.map((res) => {
            return (
              <tr key={ res.id }>
                <td>{res.firstName}</td>
                <td>{res.middleName}</td>
                <td>{res.lastName}</td>
                <td>{res.sex}</td>
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

export default UserTable;