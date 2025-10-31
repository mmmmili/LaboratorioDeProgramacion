const express = require("express");

const app = express();
const port = 4001;

app.get("/", (req, res) => {
  res.send({clave: "jeremito"});
});

app.listen(port, () => {
  console.log("Ejemplo aaa");
});