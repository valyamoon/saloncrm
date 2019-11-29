"use strict";

/* DB */
const mongoose = require("mongoose");
require("../api/model/users");

const Config = require("./config.js").get(process.env.NODE_ENV || "local");
console.log("INDB CONFIG", Config);
const options = {
  user: Config.db.username,
  pass: Config.db.password,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
};
mongoose.connect(Config.db.host + Config.db.dbname, options);

const db = mongoose.connection;
// console.dir(db, {depth: null});
// console.log(db);

db.on("error", console.error.bind(console, "connection failed"));
db.once("open", function() {
  console.log(
    "Database conencted successfully and project Started!",
    Config.db.host + Config.db.dbname
  );
});
mongoose.set("debug", false);
/* end DB */
