const express = require("express");

let app = express();

app.get("/header/:title", (req, res) => {
    res.send("<h1>" + req.params.title + "</h1>");
});

app.get("/add/:num1/:num2", (req, res) => {
    let result = (parseInt(req.params.num1) + parseInt(req.params.num2));
    res.send(result.toString());
})

app.get("/shorten/:text", (req, res) => {
    let text = req.params.text;
    if (text.length < 10) {
        res.send(text);
    } else {
        res.send(text.slice(0, 9) + "...");
    }
})

module.exports = app;