import P from 'prop-types';
import React, { useCallback, useMemo, useState } from 'react';
import './App.css';

const Button = ({ incrementButton }) => {
  console.log('Filho renderizou');
  return <button onClick={() => incrementButton(100)}>+</button>;
};

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Pai redenrizou');

  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter} />;
  }, [incrementCounter]);

  return (
    <div className="App">
      <p>Teste 03</p>
      <h1>C1: {counter}</h1>
      {btn}
    </div>
  );
}
export default App;
