var mongoose = require("mongoose");

var adminDetailSchema = mongoose.Schema({
  admin_id: {
    type: mongoose.Types.ObjectId,
    ref: "users"
  },
  phone: {
    type: String,
    default: null
  },
  code: {
    type: String,
    default: null
  },
  about: {
    type: String,
    default: null
  }
});
var admindetails = (module.exports = mongoose.model(
  "admindetails",
  adminDetailSchema
));
