
const express = require("express");
const app = express()

app.get("/", function(req, res){
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req,res) {
  res.send("Contact me at: enzomercury.com");
});

app.get("/about", function(req,res) {
  res.send("It's me Enzo. Where the hoes at?!");
});

app.get("/hobbies", function(req,res) {
  res.send("<ul>Coffee</ul><ul>Tea</ul>");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
