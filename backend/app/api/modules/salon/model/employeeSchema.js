var mongoose = require("mongoose");

var employeeSchema = mongoose.Schema({
  name: {
    type: String
  },
  salonservices_id :{
    type:[mongoose.Types.ObjectId],
    ref:'salonservices'
  },
  salon_id: {
    type: mongoose.Types.ObjectId,
    ref: "salons",
    unique:false
  }
});
var employees = (module.exports = mongoose.model("employees", employeeSchema));
