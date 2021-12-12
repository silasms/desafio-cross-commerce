const requestNumbers = require("../services/request-numbers/index")

exports.start = (req, res) => {
    res.render("startForm");
}

exports.formRequest = async (req, res) => {
    if (!requestNumbers.starting && req.body.iterations) {
        requestNumbers.starting = true;
        console.time("Tempo de requisição");
        await requestNumbers.requestMultiple(0, req.body.iterations);
        console.timeEnd("Tempo de requisição");
        res.redirect("/");
    } else {
        res.redirect("/");
    }
}