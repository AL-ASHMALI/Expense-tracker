import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);

  // Filter out non-numeric values
  const numericAmounts = amount.filter((item) => typeof item === "number");

  // Calculate total if there are numeric values
  const total = numericAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>£{total}</h1>
    </>
  );
};

export default Balance;
