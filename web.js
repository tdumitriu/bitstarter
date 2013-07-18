var fs = require('fs');
var express = require('express');

var fileName = "index.html";
var buffer = new Buffer(fs.readFileSync(fileName));

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
