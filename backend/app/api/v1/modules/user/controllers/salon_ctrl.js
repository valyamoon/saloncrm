"use strict";

var express = require("express");
var fs = require("fs");
var bcrypt = require("bcrypt");
var authy = require("authy")("7xYu5sI2Pwp1evOR8pwoWtj5pIcU11rp");
var countryData = require("country-data").countries;
var jwt = require("jsonwebtoken");
var SALT_WORK_FACTOR = 10;
var express = require("express");
const mongoose = require("mongoose");
var jwt = require("jsonwebtoken");
var db = require("../../../../../../app/config/db");
var Response = require("../../../../../lib/response");
var constant = require("../../../../../lib/constants");
var query = require("../../../../../lib/common_query");
const user = require("../models/user_model"); //mongoose.model('user'),
var roles = require("../models/roles_model");
const config = require("../../../../../config/config").get(
  process.env.NODE_ENV
);

module.exports = {};
