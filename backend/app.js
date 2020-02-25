"use strict";

var express = require("express");
var bodyParser = require("body-parser");

const fileUpload = require("express-fileupload");
const stripe = require("stripe")("sk_test_NKkb8atD9EpUwsWTE38S64Yr00DT0y0RDh");
var path = require("path");
var http = require("http");
var https = require("https");
var url = require("url");
var fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./app/swagger/swagger.json");
var cors = require("cors");

global.__rootRequire = function(relpath) {
  return require(path.join(__dirname, relpath));
};

global.__debug = function() {
  if (
    !process.env.NODE_ENV ||
    process.env.NODE_ENV === "local" ||
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "aws"
  ) {
  }
};

var app = express();
app.use(cors());
app.use(fileUpload());

app.use("/apiDocs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//process.env.NODE_ENV = process.env.NODE_ENV || "local"; //local server
process.env.NODE_ENV = process.env.NODE_ENV || "staging"; //staging server
// process.env.NODE_ENV = process.env.NODE_ENV || 'dev';    //dev server (dev.mdout.com)
// process.env.NODE_ENV = process.env.NODE_ENV || "prod"; //prod server (mdout.com)

const config = require("./app/config/config.js").get(process.env.NODE_ENV);
require("./app/config/db");

app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ extended: true, limit: "50mb" }));

// routes
app.use("/uploads", express.static(path.join(__dirname, "./app/uploads")));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/modules/dashboard")));
app.use(express.static(path.join(__dirname, "frontend")));
// All api requests
app.use(function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  // Set custom headers for CORS
  res.header(
    "Access-Control-Allow-Headers",
    "Content-type,Accept,X-Access-Token,X-Key,If-Modified-Since,Authorization,multipart/form-data"
  );

  if (req.method == "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

app.use("/api", require("./app/api/routes")(express));

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "frontend", "index.html"));
//   //res.sendFile("./frontend/index.html");
// });

app.use("/", function(req, res) {
  // res.sendFile(path.join(__dirname, './dist/frontend', 'index.html'));
  res.sendfile("./frontend/index.html");
});

// start server
var port = process.env.PORT || config.port;
//app.listen(port).timeout = 1800000; //30 min

const httpsOptions = {
  key: fs.readFileSync(
    "/home/gitlab-runner/SSL_Free_24Jan2019/meanstack_stagingsdei_com.key",
    "utf8"
  ),
  cert: fs.readFileSync(
    "/home/gitlab-runner/SSL_Free_24Jan2019/meanstack_stagingsdei_com.crt",
    "utf8"
  )
};
var server = https.createServer(httpsOptions, app).listen(port, () => {
  console.log("server running at " + port);
});

console.log("Available on:", config.backendBaseUrl);
module.exports.urlInUser = {
  url: config.backendBaseUrl
};

//logger.info("Listening on " + config.backendBaseUrl);
