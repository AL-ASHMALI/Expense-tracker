import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// creating the initial state
const initialState = {
  transactions: [],
};
//create global context using createContext
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {/* this allows to access the transactions in the initialState*/}
      {children}
    </GlobalContext.Provider>
  );
};
