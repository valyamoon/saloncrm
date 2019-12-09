var mongoose = require("mongoose");

var serviceSchema = mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  location: {
    type: [Number],
    default: [0, 0]
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
    type: String
  },
  salonaddress: {
    type: String
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "users"
  },
  image: {
    type: String,
    default: null
  }
});
var service = (module.exports = mongoose.model("service", serviceSchema));
