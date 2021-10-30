import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Deposits from "./components/Deposits";

const isolatedAppRoot = document.getElementById("deposit-root");

// Mount function to start up the app
const mount = (el, { deposits, onAddDeposit, onDeleteDeposit }) => {
  ReactDOM.render(
    <Deposits
      deposits={deposits}
      onAddDeposit={onAddDeposit}
      onDeleteDeposit={onDeleteDeposit}
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
