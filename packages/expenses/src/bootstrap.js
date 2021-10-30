import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Expenses from "./components/Expenses";

const isolatedAppRoot = document.getElementById("expenses-root");

// Mount function to start up the app
const mount = (
  el,
  { expenses, totalDeposits, onAddExpense, onDeleteExpense }
) => {
  ReactDOM.render(
    <Expenses
      expenses={expenses}
      totalDeposits={totalDeposits}
      onAddExpense={onAddExpense}
      onDeleteExpense={onDeleteExpense}
    />,
    el
  );
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  if (isolatedAppRoot) {
    ReactDOM.render(<App />, isolatedAppRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
