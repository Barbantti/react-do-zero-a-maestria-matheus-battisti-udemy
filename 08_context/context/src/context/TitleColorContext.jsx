import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { titleColorReducer } from "./TitleColorReducerContext";

export const TitleColorContext = createContext();

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });

  console.log("Title color context", state);

  return <TitleColorContext.Provider value={{ ...state, dispatch }}>{children}</TitleColorContext.Provider>
};

TitleColorContextProvider.propTypes = {
  children: PropTypes.node.isRequired
  };
