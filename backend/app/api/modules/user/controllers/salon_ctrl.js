"use strict";

const mongoose = require("mongoose");
const utility = require("../../../../lib/utility.js");

const jwt = require("jsonwebtoken");

const constant = require("../../../../config/constant.js");
const users = mongoose.model("users");
const roles = require('../model/rolesSchema');
const salon =  require('../model/salonSchema');
const Response = require("../../../../lib/response_handler.js");
const validator = require("../../../../config/validator.js");
const Config = require("../../../../config/config").get(
  process.env.NODE_ENV || "local"
);
const commonQuery = require("../../../../lib/commonQuery.js");

module.exports = {
    saveSalonDetails:saveSalonDetails
};

function saveSalonDetails(req,res){

    


    console.log(req.body);

    async function saveSalonDetails(){

    }

    saveSalonDetails().then(function(data) {});


}