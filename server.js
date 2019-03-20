require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
// var Airtable = require('airtable');
// Airtable.configure({
//     endpointUrl: 'https://api.airtable.com',
//     apiKey: 'keyXdjNsLcCtpNcVT'
// });
// var base = Airtable.base('app11pd9foOq6otfl');
//var passport = require('passport')
//var session = require('express-session')


//var db = require("./models");

var app = express();
var PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));




// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


//require('./config/passport/passport.js')(passport, db.user);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });

module.exports = app;
