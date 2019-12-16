var mongoose = require("mongoose");

var categorySchema = mongoose.Schema({
  catname: {
    type: String,
    required: false
  },
  salon_id: {
    type: mongoose.Types.ObjectId,
    ref: "salons"
  }
  
});
var categories = (module.exports = mongoose.model("categories", categorySchema));
