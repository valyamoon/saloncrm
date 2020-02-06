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
      type: String
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
      required: false,
      default: null
    },
    long: {
      type: String,
      required: false,
      default: null
    },
    isVerified: {
      type: Boolean,
      required: false
    },
    image: {
      type: String,
      required: false
    },
    role_id: {
      type: mongoose.Types.ObjectId,
      ref: "roles",
      default: null
    },
    gender: {
      type: String,
      default: null
    },
    password: {
      type: String,
      default: "f"
    },
    isActive: {
      type: Boolean,
      default: false
    },
    isDeleted: {
      type: Boolean,
      default: false
    },
    deviceToken: {
      type: String,
      default: null
    },
    profilepic: {
      type: String,
      default: null
    },
    isApproved: {
      type: Boolean,
      default: false
    },
    isSubmitted: {
      type: Boolean,
      default: false
    },
    socialLoginId: {
      type: String,
      default: null
    },
    resetkey: {
      type: String,
      default: null
    },
    isSubscribed: {
      type: Boolean,
      default: false
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
      hashKey = hash;
      users.password = hash;
      next();
    });
  });
});
userSchema.pre("update", function(next) {
  console.log("INSIDEUPDATE");
  var users = this;
  if (!users.isModified("password")) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(users.password, salt, function(err, hash) {
      if (err) return next(err);
      hashKey = hash;
      users.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

var users = (module.exports = mongoose.model("users", userSchema));
