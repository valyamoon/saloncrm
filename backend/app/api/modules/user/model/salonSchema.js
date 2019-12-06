var mongoose = require("mongoose");

var salonSchema = mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  lat:{
      type:String,
      default:null
  },
  long:{
      type:String,
      default:null
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  phone:{
      type:String,
      
  },
  address:{
    type:String
  },
  user_id:{
    type: mongoose.Types.ObjectId,
    ref: "users"
  },
  image:{
      type:String,
      default:null
  }
});
var salon = (module.exports = mongoose.model("salon", salonSchema));
