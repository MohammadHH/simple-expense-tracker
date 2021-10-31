// Anything exported from this file is importable by other in-browser modules.
import { BehaviorSubject } from "rxjs";
let deposits = [];
let expenses = [];
let depositId = 1;
let expenseId = 1;

let depositsSubject = new BehaviorSubject([]);
let expensesSubject = new BehaviorSubject([]);

const depositsObservable = depositsSubject.subscribe((currentDeposits) => {
  deposits = currentDeposits;
});

const expensesObservable = expensesSubject.subscribe((currentExpenses) => {
  expenses = currentExpenses;
});

const onAddDeposit = ({ amount }) => {
  depositsSubject.next([
    ...deposits,
    { id: depositId++, uid: 6, date: new Date(), amount },
  ]);
};

const onDeleteDeposit = (id) => {
  depositsSubject.next(deposits.filter((deposit) => deposit.id !== id));
};

const onAddExpense = ({ item, amount }) => {
  expensesSubject.next([
    ...expenses,
    { id: expenseId++, uid: 6, date: new Date(), item, amount },
  ]);
};

const onDeleteExpense = (id) => {
  expensesSubject.next(expenses.filter((expense) => expense.id !== id));
};

export {
  depositsSubject,
  expensesSubject,
  onAddDeposit,
  onDeleteDeposit,
  onAddExpense,
  onDeleteExpense,
};
