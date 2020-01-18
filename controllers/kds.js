const express = require("express");
const router = express.Router();
const order = require("../models/order");

router.get("/", (req, res) => {
  order.getAll(result => {
    console.log(result);
    res.render("index", result);
  });
});

router.post("/api/orders", (req, res) => {
  order.create(req.body.name, req.body.item, result => {
    res.json({ id: result.id });
  });
});

router.put("/api/orders/:id", (req, res) => {
  order.update(req.params.id, result => {
    res.status(200).end();
  });
});

router.delete("/api/orders/:id", (req, res) => {
  order.delete(req.params.id, result => {
    res.status(200).end();
  });
});

module.exports = router;
