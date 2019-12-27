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
    type: Number,
    default: null
  },
  closetime: {
    type: Number,
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
  employees:{
    type:[mongoose.Types.ObjectId],
    ref:"employees"
  }
});
var salon = (module.exports = mongoose.model("salon", salonSchema));
