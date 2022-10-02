/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";


export const AddressContext = React.createContext({
  streetName: '',
  updateStreetName: () => {}
});



const AddressProvider = (props) => {

  const [address, setAddress] = useState({
    streetName: ''
  });


  const updateStreetNameHandler = (streetName) => {
    setAddress((prev) => {
      return {
        ...prev,
        streetName: streetName
      };
    });
  };


  const contextValue = {
    streetName: address.streetName,
    updateStreetName: updateStreetNameHandler
  };

  useEffect(() => {
    setAddress((prev) => {
      return {
        ...prev,
        streetName: 'Friendly St.'
      };
    });
  }, []);


  return (
    <>
      <AddressContext.Provider value={ {
        streetName: address.streetName,
        updateStreetName: updateStreetNameHandler
      } }>

        { props.children }

      </AddressContext.Provider>
    </>
   
  );
};

export default AddressProvider;