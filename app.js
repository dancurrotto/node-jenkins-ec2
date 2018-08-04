var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("The obligatory: Hello Dan");
});

app.listen(4000);