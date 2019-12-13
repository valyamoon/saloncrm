var mongoose = require("mongoose");

var reviewratingsSchema = mongoose.Schema({
  comments: {
    type: String,
    required: false
  },
  ratings: {
    type: Number,
    default: null
  },
  salon_id: {
    type: mongoose.Types.ObjectId,
    ref: "salons"
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "users"
  },
  
}, { timestamps: true });
var reviewratings = (module.exports = mongoose.model("reviewratings", reviewratingsSchema));
