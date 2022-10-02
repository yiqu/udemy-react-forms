/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";


export const RegisterFormContext = React.createContext({
  defaultUser: {},
  previousAddedUser: {},
  addUser: () => {},
  getRandomUser: () => {}
});

export const getUser = () => {
  return {
    firstName: Math.random() > 0.5 ? 'Kevin' : 'Bekah',
    lastName: Math.random() > 0.5 ? 'Qu' : 'Treadwell',
    email: 'kevin@aol.com',
    address: Math.random() > 0.5 ? '1012 Friendly St.' : '1011 Lune Ln.',
    jobTitle: Math.random() > 0.5 ? 'Software Tester' : 'Software Developer',
    age: Math.random() > 0.5 ? 30 : 25,
  };
};

const RegisterFormProvider = (props) => {

  const [previousAddedUser, setPreviousAddedUser] = useState();
  const [defaultUser, setdefaultUser] = useState(getUser());

  const updatePreviousAddedUserHandler = (user) => {
    setPreviousAddedUser((prev) => {
      return {
        ...user
      };
    });
  };

  const addNewUser = (user) => {

  };

  const getRandomUser = () => {
    setdefaultUser(() => {
      return getUser();
    });
  };

  const contextValue = {
    defaultUser: defaultUser,
    previousAddedUser: previousAddedUser,
    addUser: addNewUser,
    getRandomUser: getRandomUser
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