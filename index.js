var express = require('express');
var app = express();
var port = process.env.PORT || 3000;





app.get('/', function(req, res) {
res.sendFile(__dirname +  '/views/index.html');
});

app.use("/", express.static(__dirname + "/public"));


app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});