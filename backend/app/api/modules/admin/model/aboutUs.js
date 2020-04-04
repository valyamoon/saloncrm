var mongoose = require("mongoose");

var aboutUsSchema = mongoose.Schema({
  about: {
    type: String,
    default: null
  }
});
var aboutUs = (module.exports = mongoose.model("aboutus", aboutUsSchema));
