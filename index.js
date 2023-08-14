const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/home", (req, res) => {
  res.send("Hello world");
});

app.get("/", (req, res) => {
  res.send("xin chao");
});
app.listen(PORT, () => {
  console.log("App is running in port " + PORT);
});
