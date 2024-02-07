import React from 'react';
import withCounter from './Helpers/withCounter';

function CounterHover({ count, incrementCount }) {
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

export default withCounter(CounterHover);
