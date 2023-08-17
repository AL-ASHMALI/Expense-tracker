import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// creating the initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};
//create global context using createContext
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transactions");

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data, // this will get all the transactions from the database
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error, // this will get the error message
      });
    }
  }

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
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {/* this allows to access the transactions in the initialState*/}
      {children}
    </GlobalContext.Provider>
  );
};
