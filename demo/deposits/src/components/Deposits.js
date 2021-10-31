import React, { useState } from "react";
import Deposit from "./Deposit";
import useForm from "./useForm";

const Deposits = ({ deposits = [], onAddDeposit, onDeleteDeposit }) => {
  const { data, handleChange, handleSubmit } = useForm({
    onSubmit: () => {
      onAddDeposit(data);
    },
  });
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Amount </label>
        <input
          id="amount"
          name="amount"
          type="number"
          onChange={handleChange("amount")}
        />
        <input value="Add" type="submit" />
      </form>
      <h2>Deposits</h2>
      {deposits.map(({ id, ...deposit }) => (
        <Deposit key={id} {...deposit} onDelete={() => onDeleteDeposit(id)} />
      ))}
    </main>
  );
};

export default Deposits;
