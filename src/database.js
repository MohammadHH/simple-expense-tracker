import Dexie from "dexie";

const db = new Dexie("expense-tracker-db");

db.version(2).stores({
  users: `++id, name, password`,
  deposits: `++id, uid, date, amount`,
  expenses: `++id, uid, date, amount, item`,
});

export default db;
