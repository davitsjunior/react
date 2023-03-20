//eslint-disable-next-line
import { createContext, useContext, useReducer, useRef } from 'react';
import P from 'prop-types';
import './App.css';

// actions.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

//data.js
//eslint-disable-next-line
export const globalState = {
  title: 'O Título que contexto',
  body: 'O body do contexto',
  counter: 0,
};

// reducer.js
//eslint-disable-next-line
export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Mudar título');
      return { ...state, title: action.payLoad };
    }
  }
  return { ...state };
};

//AppContext.jsx
export const Context = createContext();
//eslint-disable-next-line
export const AppContext = ({ children }) => {
  //eslint-disable-next-line
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payLoad) => {
    dispatch({ type: actions.CHANGE_TITLE, payLoad });
  };

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

AppContext.prototype = {
  children: P.node,
};

//H1 / indes.jsx
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  return (
    <>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>
        {context.state.title}
      </h1>
      <input type="text" ref={inputRef} />
    </>
  );
};

// App.jsx
function App() {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}

export default App;
