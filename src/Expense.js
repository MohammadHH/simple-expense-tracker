import React from "react";

const Expense = ({ date, item, amount, onDelete }) => {
  return (
    <li>
      <h2>{item}</h2>
      <div>{amount} NIS</div>
      <div>{date.toLocaleDateString("en-CA")}</div>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Expense;
