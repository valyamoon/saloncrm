var mongoose = require("mongoose");

var transactionsSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: false,
      ref:'users'
    },
    salon_id: {
      type: Number,
      ref:'salons'
    },
    charge_id: {
      type: String,
   
    },
    amount:{

        type:Number,
        default:null
    },
    transaction_id: {
     type:String,

    },
    isCaptured:{
        type:Boolean,
        default:false
    },
    seller_message:{
        type:String
    },
    isPaid:{
        type:Boolean,
        default:false
    },
    payment_method:{
        type:String
    },
    card_info:{
        type:String
    },
    source_id:{
        type:String
    },
    status:{
       type:String 
    }
  },
  { timestamps: true }
);
var transactions = (module.exports = mongoose.model(
  "transactions",
  transactionsSchema
));
