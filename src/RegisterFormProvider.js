/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import * as fromFireRest from './shared/rest/fire-rest';

export const RegisterFormContext = React.createContext({
  defaultUser: {},
  previousAddedUser: {},
  isAddingNewUser: false,
  addUser: () => {},
  postUserFn: () => {},
  getRandomUser: () => {},
  cancelAddFn: () => {}
});

export const getUser = () => {
  return {
    firstName: Math.random() > 0.5 ? 'Kevin' : 'Bekah',
    middleName: Math.random() > 0.5 ? 'R' : 'Y',
    lastName: Math.random() > 0.5 ? 'Qu' : 'Treadwell',
    email: 'kevin@aol.com',
    address: Math.random() > 0.5 ? '1012 Friendly St.' : '1011 Lune Ln.',
    available: false,
    jobTitle: Math.random() > 0.5 ? 'Software Tester' : 'Software Developer',
    age: Math.random() > 0.5 ? 30 : 25,
    terms: Math.random() > 0.5 ? true : false
  };
};

export const emptyFormValue = {
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  address: '',
  jobTitle: '',
  age: '',
  terms: ''
};

const RegisterFormProvider = (props) => {

  const [previousAddedUser, setPreviousAddedUser] = useState();
  const [defaultUser, setdefaultUser] = useState(getUser());
  const [apiLoading, setApiLoading] = useState(false);
  const [isAddingNewUser, setIsAddingNewUser] = useState(false);

  const updatePreviousAddedUserHandler = (user) => {
    setPreviousAddedUser((prev) => {
      return {
        ...user
      };
    });
  };

  const addNewUser = (user) => {
    console.log("submit: ", user);
    const u = {
      dateAdded: new Date().getTime(),
      ...user
    };
    setApiLoading(true);
    fromFireRest.getAddUserRef(u).then((res) => {
      return res;
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setApiLoading(false);
    });
  };

  const getRandomUser = () => {
    setdefaultUser(() => {
      return getUser();
    });
  };

  const addUserToggle = (add) => {
    setIsAddingNewUser((prev) => {
      return add === undefined ? !prev : add;
    });
  };

  const contextValue = {
    defaultUser: defaultUser,
    previousAddedUser: previousAddedUser,
    apiLoading: apiLoading,
    isAddingNewUser: isAddingNewUser,
    addUser: addNewUser,
    postUserFn: fromFireRest.getAddUserRef,
    getRandomUser: getRandomUser,
    cancelAddFn: addUserToggle
  };

  return (
    <>
      <RegisterFormContext.Provider value={ {
        ...contextValue
      } }>

        { props.children }

      </RegisterFormContext.Provider>
    </>
   
  );
};

export default RegisterFormProvider;