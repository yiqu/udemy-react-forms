import React, { useMemo } from 'react';

const DateDisplay = (prop) => {
  
  const transformed = useMemo(() => {
    return prop.date ? new Date(prop.date).toLocaleString() : 'N/A';
  }, [prop.date]);

  return (
    <>
      { transformed }
    </>
  );
};

export default React.memo(DateDisplay);