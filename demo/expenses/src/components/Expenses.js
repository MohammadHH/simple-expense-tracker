import React from "react";
import Expense from "./Expense";
import useForm from "./useForm";

const Expenses = ({
  expenses = [],
  totalDeposits,
  onAddExpense,
  onDeleteExpense,
}) => {
  const { data, handleChange, handleSubmit } = useForm({
    onSubmit: () => onAddExpense(data),
  });
  const totalExpenses = expenses.reduce(
    (curr, { amount }) => curr + +amount,
    0
  );
  const x = (id) => {
    console.log("triggered");
    console.log(typeof onDeleteExpense(id));
  };
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Item </label>
        <input
          id="item"
          name="item"
          type="text"
          onChange={handleChange("item")}
        />{" "}
        <label htmlFor="name">Amount </label>
        <input
          id="amount"
          name="amount"
          type="number"
          onChange={handleChange("amount")}
        />
        <input value="Add" type="submit" />
      </form>
      <h2>Expenses</h2>
      {expenses.map(({ id, ...expense }) => {
        return <Expense key={id} {...expense} onDelete={() => x(id)} />;
      })}
      <h2>Total Expenses: {totalExpenses} NIS</h2>
      <h2>Remaining: {totalDeposits - totalExpenses} NIS</h2>
    </main>
  );
};

export default Expenses;
