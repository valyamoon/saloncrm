const app =                  require("express")();
const express =              require("express");
const cors =                 require("cors");
const bodyParser =           require("body-parser");
const logger =               require("morgan");
const swaggerJSDoc =         require("swagger-jsdoc");
const swaggerUI =            require("swagger-ui-express");
const swaggerDefinition =    require("./router/swagger");
const passport =             require("passport");

const options = {
  swaggerDefinition,
  apis: ["./api/router/*.js"]
};

//process.env.NODE_ENV = process.env.NODE_ENV || "local"; //local server
process.env.NODE_ENV = process.env.NODE_ENV || "staging"; //staging server

const config = require("./config/config").get(process.env.NODE_ENV);

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

var port = process.env.PORT || config.port;

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
