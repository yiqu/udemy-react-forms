/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { regUserRef } from '../rest/fire-rest';

export const useFireCollection = () => {
  const valueRef = useRef([]);
  const [value, loading, error] = useCollection(
    regUserRef,
    {
      //snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  
  const transformed = value?.docs.map((res) => {
    return {
      ...res.data(),
      id: res.id
    };
  });
  
  if (transformed) {
    valueRef.current = transformed;
  }

  return {
    values: valueRef.current,
    isLoading: loading,
    error: error
  };
};
