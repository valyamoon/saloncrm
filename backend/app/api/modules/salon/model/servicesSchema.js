var mongoose = require("mongoose");

var serviceSchema = mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  price: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "users"
  },
  logo: {
    type: String,
    default: null
  }
});
var service = (module.exports = mongoose.model("service", serviceSchema));
