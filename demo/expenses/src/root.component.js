import React, { useEffect, useState } from "react";
import Expenses from "./components/Expenses";
import {
  depositsSubject,
  expensesSubject,
  onAddExpense,
  onDeleteExpense,
} from "@rrps/api";

export default function Root(props) {
  const [deposits, setDeposits] = useState([]);
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    const depositsSub = depositsSubject.subscribe((dep) => {
      setDeposits(dep);
    });
    const expensesSub = expensesSubject.subscribe((exp) => {
      setExpenses(exp);
    });
    return () => {
      if (depositsSub) {
        depositsSub.unsubscribe();
      }
      if (expensesSub) {
        expensesSub.unsubscribe();
      }
    };
  }, []);
  return (
    <Expenses
      expenses={expenses}
      totalDeposits={deposits.reduce((curr, { amount }) => curr + +amount, 0)}
      onAddExpense={onAddExpense}
      onDeleteExpense={onDeleteExpense}
    />
  );
}
