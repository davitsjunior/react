//eslint-disable-next-line
import { useEffect, useRef, useState } from 'react';
import './App.css';
//eslint-disable-next-line
const useMyHook = (cb, delay = 1000) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);
  useEffect(() => {
    //eslint-disable-next-line
    const interval = setInterval(() => {
      savedCb.current();
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);
};

// App.jsx
function App() {
  //eslint-disable-next-line
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useMyHook(() => setCounter((c) => c + 1), delay);

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <h1>Delay: {delay}</h1>
      <button
        onClick={() => {
          setDelay((d) => d + incrementor);
        }}
      >
        +{incrementor}
      </button>
      <button
        onClick={() => {
          setDelay((d) => d - incrementor);
        }}
      >
        -{incrementor}
      </button>
      <input
        type="number"
        value={incrementor}
        onChange={(e) => setIncrementor(Number(e.target.value))}
        name=""
        id=""
      />
    </div>
  );
}

export default App;
