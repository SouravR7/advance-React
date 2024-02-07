import React from 'react';
import withCounter from './Helpers/withCounter';

function CounterClick({ count, incrementCount }) {
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

export default withCounter(CounterClick);
