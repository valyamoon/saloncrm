const app = require("express")();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
config = require("./config/config");
const swaggerDefinition = require("./router/swagger");
const passport = require("passport");

// process.env.NODE_ENV = process.env.NODE_ENV || "local"; //local server
process.env.NODE_ENV = process.env.NODE_ENV || "staging"; //staging server
// process.env.NODE_ENV = process.env.NODE_ENV || 'live'; //live server (www.mdate.app)
//dist
const config = require("./app/config/config.js").get(process.env.NODE_ENV);
const API_PORT = 5977;
// const API_PORT = process.env.API_PORT || 3000;

//5976
const options = {
  swaggerDefinition,
  apis: ["./api/router/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/swagger.json", function(req, res) {
  res.setHeader("Content-Type", "applicaton/json");
  res.send(swaggerSpec);
});

require("./config/db");
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(passport.initialize());
require("./api/router")(app);
app.use(express.static("./dist"));

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));

module.exports = app;
