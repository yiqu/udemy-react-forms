/* eslint-disable no-unused-vars */
import styles from './Filter.module.scss';
import React, { useEffect, useReducer, useState, useContext, useMemo, useCallback } from 'react';
import useWhyDidYouUpdate from '../../shared/hooks/whyDidYouUpdate';

const Filter = (props) => {
  const [filterText, setFilterText] = useState("");

  const filterSubmitHandler = (event) => {
    event.preventDefault();
  };

  const filterChangeHandler = (event) => {
    setFilterText(event.target.value);
    props.onFilter(event.target.value);
  };

  return (
    <React.Fragment>
      <form className="d-flex justify-content-center align-items-center mb-2">
        <div className="form-group mb-0">
          <input type="text" className="form-control-sm mr-1" id="filter" placeholder="Filter..." value={ filterText }
          onChange={ filterChangeHandler }/>
        </div>
        <button type="submit" className="btn btn-primary btn-sm" onClick={ filterSubmitHandler }>Filter</button>
      </form>
    </React.Fragment>
  );
};

export default Filter;