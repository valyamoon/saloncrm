var mongoose = require("mongoose");


var userSchema = mongoose.Schema(
  {
    code: {
      type: String,
      required: false
    },
    phone: {
      type: String,
      required: true,
      unique: true
    },
    loggedInVia: {
      type: String
    },
    firstName: {
      type: String,
      required: false
    },
    lastName: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: false
    },
    lat: {
      type: String,
      required: false
    },
    long: {
      type: String,
      required: false
    },
    isVerified: {
      type: Boolean,
      required: false
    },
    dob: {
      type: Date,
      required: false
    },
    image: {
      type: String,
      required: false
    },
    role_id: {
      type: mongoose.Types.ObjectId,
      ref:'roles'
    },
    gender: {
      type: String,
      enum:['male','female']
    }
  },
  { timestamps: true }
);
var users = (module.exports = mongoose.model("users", userSchema));
