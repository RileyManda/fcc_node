var express = require('express');
var app = express();
express.static('/assets')

console.log("Hello World");
// app.get('/', function(req, res){
//     res.send("Hello Express");
//  });

 app.get('/', function(req, res){
    //  res.send("Hello Express");
     res.sendFile(__dirname + '/views/index.html');
  });
  app.use("/public", express.static(__dirname + "/public"));
  
