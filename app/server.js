var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var htmlRoutes = require('./routes/htmlRoutes');
var apiRoutes = require('./routes/apiRoutes.js');
app.use('/', htmlRoutes);
app.use('/', apiRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});