import React, { useRef, useState } from "react";
import Deposits from "./components/Deposits";

const App = () => {
  const [deposits, setDeposits] = useState([]);
  const id = useRef(2);
  const onAddDeposit = ({ amount }) => {
    setDeposits((prev) => [
      ...prev,
      { id: id.current++, uid: 6, date: new Date(), amount },
    ]);
  };
  const onDeleteDeposit = (id) => {
    setDeposits((prev) => prev.filter((deposit) => deposit.id !== id));
  };
  return (
    <Deposits
      deposits={deposits}
      onAddDeposit={onAddDeposit}
      onDeleteDeposit={onDeleteDeposit}
    />
  );
};

export default App;
