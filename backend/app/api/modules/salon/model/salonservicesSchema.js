var mongoose = require("mongoose");

var salonServicesSchema = mongoose.Schema({
  salon_id: {
    type: mongoose.Types.ObjectId,
    ref: "salons"
  },
  service_id: {
    type: mongoose.Types.ObjectId,
    ref: "services"
  },
  category_id:{
    type: mongoose.Types.ObjectId,
    ref: "categories"
  },
  price: {
    type: String
  },
  duration: {
    type: String
  }
  ,servicename:{
    type:String
  },
  categoryname:{
    type:String
  }
});
var salonservices = (module.exports = mongoose.model(
  "salonservices",
  salonServicesSchema
));
