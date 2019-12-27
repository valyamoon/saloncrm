var mongoose = require("mongoose");

var categorySchema = mongoose.Schema({
  catname: {
    type: String,
    required: false
  },
  services: {
    type: [mongoose.Types.ObjectId],
    ref: "services"
  }
});
var categories = (module.exports = mongoose.model(
  "categories",
  categorySchema
));
