var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public")); // looks for static(html) files for the views

app.listen(3000);
console.log("Server running on port 3000");
