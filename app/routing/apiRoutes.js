// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.

// ===============================================================================

var friendsData = require("../data/friends");
//var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // app.get("/api/waitlist", function(req, res) {
  //   res.json(waitListData);
  // });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    
    friendsData.push(req.body);
    res.json(true);
    var sumasMinor = 50;

    var friendIndex = 0;

    for( i = 0; i < friendsData.length - 1; i++){
      var sumas = 0;
      for ( q = 0; q < 9; q++){
          var diff = Math.abs(parseInt(friendsData[i].scores[q]) - parseInt(friendsData[friendsData.length - 1].scores[q]));
          sumas = sumas + diff;
      }
      if(sumas < sumasMinor) {
        sumasMinor = sumas;
        friendIndex = i;
      }
    }

    //$("#results-modal").modal();
    // $(").modal("toggle");
    // $("#match-name").html(friendsData[friendIndex].name);
    // $("#match-img").url(friendsData[friendIndex].photo);
    

    //console.log ("hola control1");
    console.log("match: " + friendsData[friendIndex].name);
    console.log("index: " + friendIndex);


    // if (friendsData.length < 5) {
    //   friendsData.push(req.body);
    //   res.json(true);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendsData = [];
    //waitListData = [];

    //console.log(tableData);
  });
};
