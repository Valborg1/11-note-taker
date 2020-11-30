// var noteData = require("../data/db.json");
var fs = require("fs");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    data = fs.readFileSync("data/db.json", "utf-8");
    data = JSON.parse(data);
    
    console.log("data", data)

    data = data.sort(function (a, b) {
      return b.noteID.localeCompare(a.noteID);
  });
  
    res.json(data);
  });

  // app.get("/api/notes/:noteData", function(req, res) {
  //   var chosen = req.params.noteData;
  
  //   console.log("chosen", chosen);
  
  //   for (var i = 0; i < noteData.length; i++) {
  //     if (chosen === noteData[i].noteID) {
  //       return res.json(noteData[i]);
  //     }
  //   }
  
  //   return res.json(false);
  // });

  app.post("/api/notes", function(req, res) {
      data = fs.readFileSync("data/db.json", "utf-8")
      // console.log("post test", data);
      console.log("req body from api", req.body)

      data = JSON.parse(data);

      data.push(req.body);
      data = JSON.stringify(data);

      fs.writeFile("data/db.json", data, function(err, res){
        if (err) throw err;
      });
      res.json(JSON.parse(data));
  });


  app.patch("/api/notes/:id", function(req, res) {
    console.log("req params", req.params.id)

    data = fs.readFileSync("data/db.json", "utf-8");
    data = JSON.parse(data);

    data = data.filter(function(note){
      return note.noteID != req.params.id;
    });

    data.push(req.body);
    data = JSON.stringify(data);

    fs.writeFile("data/db.json", data, function(err, res){
      if (err) throw err;
    });
    res.json(JSON.parse(data));
});

  app.delete("/api/notes/:id", function(req, res) {
    console.log("req params", req.params.id)

    data = fs.readFileSync("data/db.json", "utf-8");
    data = JSON.parse(data);

    data = data.filter(function(note){
      return note.noteID != req.params.id;
    });

    data = JSON.stringify(data);

    fs.writeFile("data/db.json", data, function(err, res){
      if (err) throw err;
    });
    res.json(JSON.parse(data));
  });


};
