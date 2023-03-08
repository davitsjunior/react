import { useState, useEffect } from 'react';
import './App.css';

const eventFn = () => {
  console.log('JavaScript Puro');
};

//"COMPONENTE STATLENT (SEM ESTADO)"
function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  /* //componentDidUpdate - executa toda vez que o component atualiza
  useEffect(() => {
    console.log('ComponentDidUpdate');
  });

  //componentDidMount - executa um vez
  useEffect(() => {
    console.log('ComponentDidMount');
  }, []); */

  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    //componenteWillUmount - Limpa Listener
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  //Com dependência - executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('Counter1:', counter, 'Counter2:', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <h1>
        C1: {counter} C2: {counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+2</button>
    </div>
  );
}
export default App;
