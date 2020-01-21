var mongoose = require("mongoose");

var promocodeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false
    },
    value: {
      type: Number,
      default: null
    },
    salon_id: {
      type: mongoose.Types.ObjectId,
      ref: "salons"
    },
    usedbyusers: {
      type: [mongoose.Types.ObjectId],
      default: null,
      ref: "users"
    },
    description: {
      type: String,
      default: null
    },
    termsAndCondition: {
      type: String,
      default: null
    }
  },
  { timestamps: true }
);
var promocodes = (module.exports = mongoose.model(
  "promocodes",
  promocodeSchema
));
