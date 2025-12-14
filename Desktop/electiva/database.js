const sqlite3 = require('sqlite3').verbose();

const isTest = process.env.NODE_ENV === 'test';

const db = new sqlite3.Database(
  isTest ? ':memory:' : './tasks.db',
  (err) => {
    if (err) {
      console.error(err.message);
    }
  }
);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    )
  `);
});

module.exports = db;
