const express = require("express");

const app = express();

app.get("/value", (req, res) => {
  res.send("Hi from the backend!");
});

app.listen(5000, err => {
  console.log("Listening on port 5000");
});
