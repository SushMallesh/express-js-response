const express = require("express");

const app = express();

const instance = app.get("/", (request, response) => {
  response.send("Express JS");
});

// app.listen(1000);
module.exports = instance;
