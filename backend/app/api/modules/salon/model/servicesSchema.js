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
    type: Number,
    default: false
  },
  duration: {
    type: Number
  },
  salon_id: {
    type: mongoose.Types.ObjectId,
    ref: "salons"
  },
  category_id:{
    type: mongoose.Types.ObjectId,
    ref: "categories"
  },
  logo: {
    type: String,
    default: null
  },
  description:{
    type:String
  }
});
var service = (module.exports = mongoose.model("service", serviceSchema));
