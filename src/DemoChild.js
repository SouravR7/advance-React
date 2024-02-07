import React from 'react';

function DemoChild() {
  console.log('DemoChild rendered');
  return (
    <div
      style={{
        fontSize: '20px',
        padding: '10px',
      }}
    >
      Demo Child
    </div>
  );
}

export default React.memo(DemoChild);
