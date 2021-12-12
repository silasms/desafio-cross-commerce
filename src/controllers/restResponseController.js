const requestNumbers = require("../services/request-numbers/index")

exports.responseNumbers = (req, res) => {
    res.json(requestNumbers.objNumber);
}