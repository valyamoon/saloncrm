var mongoose = require("mongoose");

var salonSchema = mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  location: {
    type: {
      type: String,
      default: "Point"
    },
    coordinates: [Number]
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  contact: {
    type: String
  },
  salonaddress: {
    type: String
  },
  opentime: {
    type: Date,
    default: null
  },
  closetime: {
    type: Date,
    default: null
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "users"
  },
  image: {
    type: String,
    default: null
  },
  isreviewadded: {
    type: String,
    default: false
  },
  isservicesadded: {
    type: String,
    default: false
  },
  employees: {
    type: [mongoose.Types.ObjectId],
    ref: "employees"
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  isDeclined: {
    type: Boolean,
    default: false
  }
});
var salon = (module.exports = mongoose.model("salon", salonSchema));
