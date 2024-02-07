import React, { useState } from 'react';

function useCounter(intialvalue = 0) {
  const [count, setCount] = useState(intialvalue);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return [count, incrementCount];
}

export default useCounter;
