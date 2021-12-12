const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes")

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(routes)


app.listen(4000, function (err) {
  if (err) {
    console.log("Ocorreu algum erro, e o servidor não foi inicializado");
  } else {
    console.log("Servidor inicializado com sucesso.");
  }
});
