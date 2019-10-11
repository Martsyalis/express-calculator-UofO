const express = require("express");

var app = express();

app.get("/:operation/:val1/:val2", function(req, res) {
  let { operation, val1, val2 } = req.params;
  val1 = parseInt(val1);
  val2 = parseInt(val2);
  switch (operation) {
    case "add":
      res.json(val1 + val2);
  }
});

app.listen(3000);
