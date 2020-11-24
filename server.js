const express = require("express");


// EXPRESS CONFIGURATION
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// ROUTER




// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });