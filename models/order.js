const orm = require("../config/orm");

const order = {
  getAll: cb => {
    orm.all("orders", result => {
      cb(result);
    });
  },
  create: (name, item, cb) => {
    orm.create("orders", name, item, result => {
      cb(result);
    });
  },
  update: (id, cb) => {
    orm.update(id, result => {
      cb(result);
    });
  },
  delete: (id, cb) => {
    orm.delete(id, result => {
      cb(result);
    });
  }
};

module.exports = order;
