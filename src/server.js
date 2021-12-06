const express = require("express");
const app = express();
const requestNumbers = require("./services/request-numbers/index");
const path = require("path");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.json(requestNumbers.objNumber);
});

app.get("/start", (req, res) => {
  res.render("startForm");
});

app.post("/start/request", async (req, res) => {
  await requestNumbers.requestMultiple(0, req.body.iterations);
  res.redirect("/");
});

app.listen(4000, function (err) {
  if (err) {
    console.log("Ocorreu algum erro, e o servidor não foi inicializado");
  } else {
    console.log("Servidor inicializado com sucesso.");
  }
});
