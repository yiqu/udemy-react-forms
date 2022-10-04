/* eslint-disable no-unused-vars */
import styles from './Users.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import { useFireCollection } from '../shared/firebase/collection-hooks';
import useWhyDidYouUpdate from '../shared/hooks/whyDidYouUpdate';
import DateDisplay from '../shared/date/DateDisplay';
import UserTable from "./table/Table";
import Filter from "./filter/Filter";
import { useDeepCompareEffect } from "react-use";


export const Users = () => {

  const { values, isLoading, error } = useFireCollection();

  const [users, setUsers] = useState([]);
  const [filterText, setFilterText] = useState('');


  useDeepCompareEffect(() => {
    let val = [...values];
    if (filterText) {
      const filterableKeys = ['firstName', 'lastName', 'sex', 'age', 'address', 'email', 'jobTitle'];
      const filter = filterText+"".trim();
      val = val.filter((res) => {
        let wholeObjectValue = "";
        filterableKeys.forEach((key) => {
          wholeObjectValue = wholeObjectValue + res[key];
        });
        wholeObjectValue = wholeObjectValue.toLowerCase();
        return wholeObjectValue.includes(filter);
      });
    }
    
    val.sort((prev, curr) => {
      return (prev.dateAdded ?? 0) < (curr.dateAdded ?? 0) ? 1 : -1;
    });
    setUsers(val);
  }, [values, filterText]);


  const onFilterHandler = useCallback((text) => {
    setFilterText(text);
  }, []);

  return (
    <>
      <div>
        {filterText}
      </div>
      <Filter onFilter={ onFilterHandler }></Filter>
      <UserTable isLoading={ isLoading } sorted={ users }></UserTable>
    </>
   
  );
};

export default Users;