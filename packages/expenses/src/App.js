import React, { useRef, useState } from "react";
import Expenses from "./components/Expenses";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const id = useRef(2);

  const onAddExpense = ({ item, amount }) => {
    setExpenses((prev) => [
      ...prev,
      { id: id.current++, uid: 6, date: new Date(), item, amount },
    ]);
  };

  const onDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  return (
    <Expenses
      expenses={expenses}
      totalDeposits={0}
      onAddExpense={onAddExpense}
      onDeleteExpense={onDeleteExpense}
    />
  );
};

export default App;
