import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// creating the initial state
const initialState = {
  transactions: [
    { id: 1, text: "T-shirt", amount: -20 },
    { id: 2, text: "Salary", amount: 400 },
    { id: 3, text: "Football", amount: -10 },
    { id: 4, text: "Book", amount: -20 },
    { id: 5, text: "Eat out", amount: -40 },
  ],
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

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
      }}
    >
      {/* this allows to access the transactions in the initialState*/}
      {children}
    </GlobalContext.Provider>
  );
};
