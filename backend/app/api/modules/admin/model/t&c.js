var mongoose = require("mongoose");

var tcSchema = mongoose.Schema({
  tc: {
    type: String,
    default: null
  }
});
var tcScheme = (module.exports = mongoose.model("tcs", tcSchema));
