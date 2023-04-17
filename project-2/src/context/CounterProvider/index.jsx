import P from 'prop-types';
import { useReducer } from 'react';
import { reducer } from './reducer';
import { CounterContext } from './context';
import { data } from './data';
//eslint-disable-next-line
export const CounterProvider = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(reducer, data);
  return (
    <CounterContext.Provider value={{ counterState, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

CounterProvider.prototype = {
  children: P.node.isRequired,
};
