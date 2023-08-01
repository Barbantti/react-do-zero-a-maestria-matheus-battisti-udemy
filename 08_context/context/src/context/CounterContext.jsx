// 1 - create context
import { createContext, useState } from "react";
import PropTypes from "prop-types";


export const CounterContext = createContext();

// 2 - create provider
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

CounterContextProvider.propTypes = {
  children: PropTypes.node.isRequired
  };