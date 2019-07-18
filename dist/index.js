"use strict";
express = require('express');
app = express();
path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
metrics = require('./metrics.js');
app.set('port', 1337);
app.set('views', __dirname + "/view");
app.set('view engine', 'ejs');
app.listen(app.get('port'), function () { return console.log("server listening on " + app.get('port')); });
app.get('/', function (req, res) {
    // GET
});
app.post('/', function (req, res) {
    // POST
});
app
    .put('/', function (req, res) {
    // PUT
})
    .delete('/', function (req, res) {
    // DELETE
});
app.get('/hello/:name', function (req, res) { return res.render('hello.ejs', { name: req.params.name }); });
app.get('/metrics.json', function (req, res) {
    metrics.get(function (err, data) {
        if (err)
            throw err;
        res.status(200).json(data);
    });
});
