import database from "./database";
import sha1 from "sha1";

export const addUser = async (name, password) => {
  return await database.users.put({ name, password: sha1(password) });
};

export const login = async (name, password) => {
  const user = await database.users
    .filter(({ name: uname }) => uname === name)
    .first();
  if (user && sha1(password) === user.password) {
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
  return null;
};

export const addDeposit = async (userId, amount) => {
  return await database.deposits.put({ uid: userId, date: new Date(), amount });
};

export const getDeposits = async (userId) => {
  const deposits = await database.table("deposits").toArray();
  return deposits.filter((e) => e.uid === userId);
};

export const deleteDeposit = async (id) => {
  return await database.deposits.delete(id);
};

export const addExpense = async (userId, item, amount) => {
  return await database.expenses.put({
    uid: userId,
    date: new Date(),
    item,
    amount,
  });
};

export const getExpenses = async (userId) => {
  const expenses = await database.table("expenses").toArray();
  return expenses.filter((e) => e.uid === userId);
};

export const deleteExpense = async (id) => {
  return await database.expenses.delete(id);
};
