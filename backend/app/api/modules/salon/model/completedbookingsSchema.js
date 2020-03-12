var mongoose = require("mongoose");

var completedBookingSchema = mongoose.Schema({
  salon_id: {
    type: mongoose.Types.ObjectId,
    ref: "salons",
    unique: false
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "users"
  },
  connected_account_id: {
    type: String,
    default: null
  },
  onDate: {
    type: Date,
    default: null
  },
  transferDate: {
    type: Date,
    default: null
  },
  booking_id: {
    type: mongoose.Types.ObjectId,
    ref: "appointments"
  },
  total_amount: {
    type: String,
    default: null
  },
  isTransferred: {
    type: Boolean,
    default: false
  }
});
var completedbookings = (module.exports = mongoose.model(
  "completedbookings",
  completedBookingSchema
));
