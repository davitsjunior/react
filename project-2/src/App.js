import { useReducer } from 'react';
import './App.css';
//eslint-disable-next-line
const globalState = {
  title: 'O Título que contexto',
  body: 'O body do contexto',
  counter: 0,
};
//eslint-disable-next-line
const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('Chamou Muda com', action.payload);
      return { ...state, title: 'Mudou' };
    }
    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  return { ...state };
};

function App() {
  //eslint-disable-next-line
  const [state, dispatch] = useReducer(reducer, globalState);
  //eslint-disable-next-line
  const { counter, title, body } = state;

  return (
    <div>
      <h1>
        {title}, {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleDateString('pt-br'),
          })
        }
      >
        Muda
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Inverte</button>
    </div>
  );
}

export default App;
