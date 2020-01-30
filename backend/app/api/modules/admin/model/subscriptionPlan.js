var mongoose = require("mongoose");

var subsciptionPlanSchema = mongoose.Schema({
  id: {
    type: String,
    default: null
  },
  amount: {
    type: Number,
    default: null
  },
  isActive: {
    type: Boolean,
    default: true
  },
  interval: {
    type: String,
    default: null
  },
  currency: {
    type: String,
    default: null
  },
  trial_period_days: {
    type: String,
    default: null
  },
  plan_id: {
    type: String,
    default: null
  }
});
var subscriptionplans = (module.exports = mongoose.model(
  "subscriptionplans",
  subsciptionPlanSchema
));
