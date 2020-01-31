var mongoose = require("mongoose");

var SalonSubscriptionsSchema = mongoose.Schema(
  {
    salon_id: {
      type: mongoose.Types.ObjectId,
      ref: "salons"
    },
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: "users"
    },
    subscription_id: {
      type: String,
      default: null
    },
    created_on: {
      type: Number,
      default: null
    },
    customer_id: {
      type: String,
      default: null
    },
    plan_id: {
      type: String,
      default: null
    },
    expiry_date: {
      type: Number,
      default: null
    },
    product_id: {
      type: String,
      default: null
    },
    isActive: {
      type: String,
      default: null
    }
  },
  { timestamps: true }
);
var salonsubscriptions = (module.exports = mongoose.model(
  "salonsubscriptions",
  SalonSubscriptionsSchema
));
