"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var metrics_1 = require("./metrics");
var express = require("express");
var app = express();
var port = process.env.PORT || '8080';
app.get('/metrics', function (req, res) {
    metrics_1.MetricsHandler.get(function (err, result) {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});
app.get('/', function (req, res) {
    res.write('Hello world');
    res.end();
});
app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log("server is listening on port " + port);
});
