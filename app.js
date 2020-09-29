const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({encoded: true}));

app.get("/", function(res, req){
  res.send("up and running");
});


app.listen(3000, function(){
  console.log("works on 3000")
});
