import React, { useEffect, useState } from "react";
import Deposits from "./components/Deposits";

import { depositsSubject, onAddDeposit, onDeleteDeposit } from "@rrps/api";

export default function Root(props) {
  const [deposits, setDeposits] = useState([]);
  useEffect(() => {
    const depositsSub = depositsSubject.subscribe((deposits) => {
      setDeposits(deposits);
    });
    return () => {
      if (depositsSub) {
        depositsSub.unsubscribe();
      }
    };
  }, []);
  return (
    <Deposits
      deposits={deposits}
      onAddDeposit={onAddDeposit}
      onDeleteDeposit={onDeleteDeposit}
    />
  );
}
