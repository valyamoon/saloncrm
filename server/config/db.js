"use strict";

/* DB */
const mongoose = require("mongoose");
require("../api/model/users");

const Config = require("./config.js").get(process.env.NODE_ENV || "local");
const options = {
  user: Config.DATABASE.username,
  pass: Config.DATABASE.password,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
};
mongoose.connect(Config.DATABASE.host, options);

const db = mongoose.connection;


db.on("error", console.error.bind(console, "connection failed"));
db.once("open", function() {
  console.log(
    "Database conencted successfully and project Started!",
    Config.DATABASE.host
  );
});
mongoose.set("debug", false);
