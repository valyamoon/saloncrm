var mongoose = require("mongoose");

var salonweeklyslotSchema = mongoose.Schema({
    salon_id: {
        type: mongoose.Types.ObjectId,
        ref: "salons"
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "users"
    },
    days: {
        type: String
    },
    starttime: {
        type: String
    },
    endtime: {
        type: String
    },
    order_sort: {
        type: Number
    },
    status: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });
var salonweeklyslot = (module.exports = mongoose.model(
    "salonweeklyslot",
    salonweeklyslotSchema
));