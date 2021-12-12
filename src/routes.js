const express = require("express")
const route = express.Router()
const {start, formRequest} = require("./controllers/formController")
const {responseNumbers} = require("./controllers/restResponseController")
const bodyParser = require("body-parser").json();

route.get("/", responseNumbers)

route.get("/start", start)
route.post("/start/request", bodyParser, formRequest)

module.exports = route