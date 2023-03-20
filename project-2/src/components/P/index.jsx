// eslint-disable-next-line
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/AppContext';
// eslint-disable-next-line
export const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body },
    setState,
  } = theContext;
  return (
    <p onClick={() => setState((s) => ({ ...s, counter: s.counter + 1 }))}>
      {body}
    </p>
  );
};
