var mongoose = require("mongoose");

var walletSchema = mongoose.Schema({
  amount: {
    type: Number
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "users"
  }
});
var wallets = (module.exports = mongoose.model("wallets", walletSchema));
