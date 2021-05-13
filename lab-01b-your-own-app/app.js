const express = require("express");

let app = express();

app.get("/", (req, res) => {
    res.send("She sells seashells by the seashore")
});

app.get("/date", (req, res) => {
    res.send(new Date() + "");
});

module.exports = app;