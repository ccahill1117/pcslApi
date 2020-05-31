const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require('morgan');
const models = require("./bin/models");

const app = express();

app.use(logger('dev'));

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

const db = require("./bin/models");
db.sequelize.sync()

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Portland City Squash League test" });
});

app.get("/test", function(req, res) {
  models.User.findAll().then(function(users) {
    res.json(users);
  });
});



// set port, listen for requests
const PORT = process.env.PORT || 8080;

require("./bin/routes/user.routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
