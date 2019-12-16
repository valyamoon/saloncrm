var mongoose = require("mongoose");

var salonSchema = mongoose.Schema({
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
    type: String,
    default:null
  },
  closetime: {
    type: String,
    default:null
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
var salon = (module.exports = mongoose.model("salon", salonSchema));
