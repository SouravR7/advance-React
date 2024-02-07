import React from 'react';
import useCounter from './Helpers/useCounter';

function CounterClickCustom() {
  const [count, incrementCount] = useCounter(0);

  return (
    <>
      <span>{count}</span>
      <button
        style={{
          marginLeft: '10px',
        }}
        onClick={() => incrementCount()}
      >
        Click
      </button>
    </>
  );
}

export default CounterClickCustom;
