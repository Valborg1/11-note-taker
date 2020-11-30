const path = require("path");

// const express = require("express");
// const app = express();

// app.use(express.static(__dirname + "../public"));

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {


  // app.get('/style.css', function(req, res) {
  //   res.sendFile(__dirname + "style.css");
  // });

    // If no matching route is found default to home
    app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
  
};
