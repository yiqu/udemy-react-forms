/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";


export const AddressContext = React.createContext({
  defaultUser: {},
  previousAddedUser: {},
  addUser: () => {},
  getRandomUser: () => {}
});

export const RANDOM_USER = {
  firstName: Math.random() > 0.5 ? 'Kevin' : 'Bekah',
  lastName: Math.random() > 0.5 ? 'Qu' : 'Treadwell',
  email: 'kevin@aol.com',
  address: Math.random() > 0.5 ? '1012 Friendly St.' : '1011 Lune Ln.',
  jobTitle: Math.random() > 0.5 ? 'Software Tester' : 'Software Developer',
  age: Math.random() > 0.5 ? 30 : 25,
};

const RegisterFormProvider = (props) => {

  const [previousAddedUser, setPreviousAddedUser] = useState();

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
    return RANDOM_USER;
  };

  const contextValue = {
    defaultUser: RANDOM_USER,
    previousAddedUser: previousAddedUser,
    addUser: addNewUser,
    getRandomUser: getRandomUser
  };

  return (
    <>
      <AddressContext.Provider value={ {
        ...contextValue
      } }>

        { props.children }

      </AddressContext.Provider>
    </>
   
  );
};

export default RegisterFormProvider;