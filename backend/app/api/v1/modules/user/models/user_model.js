var mongoose = require("mongoose");
var SALT_WORK_FACTOR = 10;
var bcrypt = require("bcrypt");

var userSchema = mongoose.Schema(
  {
    code: {
      type: String,
      required: false
    },
    phone: {
      type: String,
      required: false
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
      required: true,
      unique: true
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
      ref: "roles"
    },
    gender: {
      type: String,
      enum: ["male", "female"]
    },
    password: {
      type: String,
      default: "salon"
    }
  },
  { timestamps: true }
);

userSchema.pre("save", function(next) {
  var users = this;
  if (!users.isModified("password")) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(users.password, salt, function(err, hash) {
      if (err) return next(err);
      users.password = hash;
      next();
    });
  });
});

var users = (module.exports = mongoose.model("users", userSchema));
