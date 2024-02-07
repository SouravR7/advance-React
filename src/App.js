import { useState } from 'react';
import './App.css';
import DemoChild from './DemoChild';
import CounterClick from './CounterClick';
import CounterHover from './CounterHover';
import CounterHoverCustom from './CounterHoverCustom';
import CounterClickCustom from './CounterClickCustom';

//Pure componet example
// function App() {
//   const [flag, setFlag] = useState(false);
//   console.log('App rendered');
//   return (
//     <div className='App'>
//       <div
//         style={{
//           fontSize: '20px',
//           padding: '10px',
//         }}
//       >
//         Hii, Good {flag ? 'Morning' : 'Afternoon'}
//       </div>
//       <button
//         style={{
//           fontSize: '16px',
//           marginTop: '10px',
//         }}
//         onClick={() => setFlag(!flag)}
//       >
//         toggle
//       </button>
//       <div>
//         <DemoChild />
//       </div>
//     </div>
//   );
// }

//HOC example
// function App() {
//   return (
//     <div
//       className='App'
//       style={{
//         fontSize: '16px',
//         padding: '10px',
//       }}
//     >
//       <div
//         style={{
//           fontSize: '16px',
//           padding: '10px',
//         }}
//       >
//         <CounterClick />
//       </div>
//       <div
//         style={{
//           fontSize: '16px',
//           padding: '10px',
//         }}
//       >
//         <CounterHover />
//       </div>
//     </div>
//   );
// }

//custom hooks example

function App() {
  return (
    <div
      className='App'
      style={{
        fontSize: '16px',
        padding: '10px',
      }}
    >
      <div
        style={{
          fontSize: '16px',
          padding: '10px',
        }}
      >
        <CounterClickCustom />
      </div>
      <div
        style={{
          fontSize: '16px',
          padding: '10px',
        }}
      >
        <CounterHoverCustom />
      </div>
    </div>
  );
}

export default App;
