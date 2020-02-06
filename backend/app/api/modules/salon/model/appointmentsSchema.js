var mongoose = require("mongoose");

var appointmentsSchema = mongoose.Schema(
  {
    salon_id: {
      type: mongoose.Types.ObjectId,
      ref: "salons"
    },
    employee_id: {
      type: mongoose.Types.ObjectId,
      ref: "employees"
    },
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: "users"
    },
    totalamount: {
      type: String
    },
    service: {
      type: mongoose.Types.ObjectId,
      ref: "services"
    },
    duration: {
      type: String,
      default: null
    },
    starttime: {
      type: Number
    },
    endtime: {
      type: Number
    },
    date: {
      type: Number
    },
    isActive: {
      type: Boolean,
      default: true
    },
    isCancelled: {
      type: Boolean,
      default: false
    },
    connected_account_id: {
      type: String,
      default: null
    },
    isCompleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);
var appointments = (module.exports = mongoose.model(
  "appointments",
  appointmentsSchema
));
