var mongoose = require("mongoose");

var categorySchema = mongoose.Schema({
  catname: {
    type: String,
    required: false
  }
  

});
var categories = (module.exports = mongoose.model("categories", categorySchema));
