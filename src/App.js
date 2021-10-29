import React from "react";
import { useCallback, useContext, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {
  addDeposit,
  addExpense,
  deleteDeposit,
  deleteExpense,
  getDeposits,
  getExpenses,
} from "./api";
import AuthContext from "./AuthContext";
import Navbar from "./Navbar";
import Expenses from "./Expenses";
import PageNotFound from "./PageNotFound";
import Signin from "./Signin";
import Signup from "./Signup";
import Deposits from "./Deposits";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [deposits, setDeposits] = useState([]);
  const authContext = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = authContext.isLoggedIn && user ? user.id : 0;

  const updateExpenses = useCallback(
    () => getExpenses(userId).then(setExpenses).catch(console.log),
    [userId]
  );

  const updateDeposits = useCallback(
    () => getDeposits(userId).then(setDeposits).catch(console.log),
    [userId]
  );

  useEffect(() => {
    updateExpenses();
    updateDeposits();
  }, [updateExpenses, updateDeposits]);

  const addExpenseHandler = async (expense) => {
    await addExpense(userId, expense.item, expense.amount);
    updateExpenses();
  };

  const deleteExpenseHandler = (id) => async (e) => {
    await deleteExpense(id);
    updateExpenses();
  };

  const addDepositHandler = async (deposit) => {
    await addDeposit(userId, deposit.amount);
    updateDeposits();
  };

  const deleteDepositHandler = (id) => async (e) => {
    await deleteDeposit(id);
    updateDeposits();
  };

  let content = (
    <BrowserRouter>
      <Navbar onLogout={authContext.logout} />
      <Switch>
        <Route path="/register">
          <Signup />
        </Route>
        <Route path="/login">
          <Signin />
        </Route>
        <Route path="/expenses">
          <Expenses
            expenses={expenses}
            totalDeposits={deposits.reduce(
              (curr, { amount }) => curr + +amount,
              0
            )}
            onAddExpense={addExpenseHandler}
            onDeleteExpense={deleteExpenseHandler}
          />
        </Route>
        <Route path="/deposits">
          <Deposits
            deposits={deposits}
            onAddDeposit={addDepositHandler}
            onDeleteDeposit={deleteDepositHandler}
          />
        </Route>
        <Route path="/" exact>
          <Redirect to="/deposits" />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
  if (!authContext.isLoggedIn)
    content = (
      <BrowserRouter>
        <Switch>
          <Route path="/register">
            <Signup />
          </Route>
          <Route path="/login">
            <Signin />
          </Route>
          <Route path="*">
            <Signin />
          </Route>
        </Switch>
      </BrowserRouter>
    );

  return content;
}

export default App;
