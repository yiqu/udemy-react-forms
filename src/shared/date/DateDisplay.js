import React, { useMemo } from 'react';

const DateDisplay = (prop) => {
  
  const transformed = useMemo(() => {
    return prop.date ? new Date(prop.date).toString().slice(0, 34) : 'No date';
  }, [prop.date]);

  return (
    <>
      { transformed }
    </>
  );
};

export default React.memo(DateDisplay);