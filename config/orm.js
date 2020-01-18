const connection = require("../config/connection");

const orm = {
  all: cb => {
    connection.query("SELECT * FROM orders", (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  create: (name, item, cb) => {
    connection.query(
      "INSERT INTO orders(name, item) values(?,?)",
      [name, item],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  },
  update: (id, cb) => {
    connection.query(
      "UPDATE orders SET completed = true WHERE id =?",
      [id],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  },
  delete: (id, cb) => {
    connection.query("DELETE FROM orders WHERE id=?", [id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
