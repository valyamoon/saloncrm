var mongoose = require("mongoose");

var appointmentsSchema = mongoose.Schema(
  {
    salon_id: {
        type: mongoose.Types.ObjectId,
        ref: "salons"
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "users"
    },
    totalamount: {
      type: String
    },
    services: {
      type: [mongoose.Types.ObjectId],
      ref: "services"
    },
    duration:{
        type:String,
        default:null
    },
    starttime:{
        type:Number
    },
    endtime:{
        type:Number
    },
    date:{
        type:Number
    }
  },
  { timestamps: true }
);
var appointments = (module.exports = mongoose.model(
  "appointments",
  appointmentsSchema
));
