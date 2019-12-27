var mongoose = require("mongoose");

var serviceSchema = mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  category_id: {
    type: mongoose.Types.ObjectId,
    ref: "categories"
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  logo: {
    type: String,
    default: null
  },
  description: {
    type: String
  }
});
var service = (module.exports = mongoose.model("service", serviceSchema));
