const express = require("express");
const app = express();
const requestNumbers = require("./services/request-numbers/index");
const path = require("path");
const bodyParser = require("body-parser").json();

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

app.post("/start/request", bodyParser, async (req, res) => {
  if (!requestNumbers.starting && req.body.iterations) {
    requestNumbers.starting = true;
    console.time("Tempo de requisição");
    await requestNumbers.requestMultiple(0, req.body.iterations);
    console.timeEnd("Tempo de requisição");
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

app.listen(4000, function (err) {
  if (err) {
    console.log("Ocorreu algum erro, e o servidor não foi inicializado");
  } else {
    console.log("Servidor inicializado com sucesso.");
  }
});
