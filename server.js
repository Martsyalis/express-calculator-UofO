const express = require("express");

var app = express();

app.get("/:operation/:val1/:val2", function(req, res) {
  let { operation, val1, val2 } = req.params;
  val1 = parseInt(val1);
  val2 = parseInt(val2);
  switch (operation) {
    case "add":
      res.json(val1 + val2);
    case "subtract":
      res.json(val1 - val2);
    case "multiply":
      res.json(val1 * val2);
    case "divide":
      res.json(val1 / val2);
    default:
      res.json("Please use one of the 4 simple operations");
  }
});

app.listen(3000);
