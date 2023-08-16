const express = require("express");
const app = express();

const PORT = process.env.PORT || 8081;

app.get("/home", (req, res) => {
  res.send("Hello world 789");
});

app.get("/", (req, res) => {
  res.send("xin chao");
});

app.get("/index", (req, res) => {
  res.send("index");
});
app.listen(PORT, () => {
  console.log("App is running in port " + PORT);
});
