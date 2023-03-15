//import P from 'prop-types';
//import { useEffect, useMemo, useState, useRef } from 'react';
import React, { useContext, useState } from 'react';
import './App.css';
// eslint-disable-next-line
const globalState = {
  title: 'O título do contexto',
  body: 'O Body do contexto',
  counter: 0,
};
// eslint-disable-next-line
const GlobalContext = React.createContext();

// eslint-disable-next-line
const Div = ({ children }) => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

// eslint-disable-next-line
const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body },
    setContextState,
  } = theContext;
  return (
    <p
      onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}
    >
      {body}
    </p>
  );
};

function App() {
  const [contextState, setContextState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
