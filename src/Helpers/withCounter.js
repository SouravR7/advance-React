import React from 'react';

function withCounter(WrapperComponent, incrementNumber) {
  const NewComponent = (props) => {
    const [count, setCount] = React.useState(0);
    const incrementCount = () => {
      setCount(count + 1);
    };
    return (
      <WrapperComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };
  return NewComponent;
}

export default withCounter;
