import { registerApplication, start } from "single-spa";
import * as isActive from "./utilities";

registerApplication(
  "@rrps/nav",
  () => System.import("@rrps/nav"),
  isActive.nav,
  {
    domElement: document.getElementById("nav"),
  }
);

registerApplication(
  "@rrps/deposits",
  () => System.import("@rrps/deposits"),
  isActive.deposits,
  {
    domElement: document.getElementById("deposits"),
  }
);

registerApplication(
  "@rrps/expenses",
  () => System.import("@rrps/expenses"),
  isActive.expenses,
  {
    domElement: document.getElementById("expenses"),
  }
);

start();
