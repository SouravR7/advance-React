import React from 'react';
import useCounter from './Helpers/useCounter';

function CounterHoverCustom() {
  const [count, incrementCount] = useCounter(0);
  return (
    <>
      <span>{count}</span>
      <button
        style={{
          marginLeft: '10px',
        }}
        onMouseOver={() => incrementCount()}
      >
        Click on hover
      </button>
    </>
  );
}

export default CounterHoverCustom;
