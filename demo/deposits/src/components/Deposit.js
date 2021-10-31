import React from "react";

const Deposit = ({ date, amount, onDelete }) => {
  return (
    <li>
      <h2>{amount} NIS</h2>
      <div>{date.toLocaleDateString("en-CA")}</div>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Deposit;
