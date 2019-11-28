"use strict";
const users = require("../../model/users");
var express = require("express");
var fs = require("fs");
var authy = require("authy")("rtB8lzgc81iP0Urq2nsp1SWevc2wo6Yr");
var countryData = require("country-data").countries;
const commonQuery = require("../../../lib/commonQuery"),
  response = require("../../../lib/response"),
  Constant = require("../../../lib/constants"),
  validator = require("../../../lib/validators");
module.exports = {
  requestVerification,
  verifyNumber,
  addUser,
  getCountrycodes
};

function requestVerification(req, res) {
  console.log("ion Request", req.body);

  users.find(
    { $and: [{ phone: req.body.phone }, { code: req.body.code }] },
    (err, result) => {
      console.log("RESULT NOW", result);
      if (result.length > 0) {
        if (
          req.body.phone === result[0].phone &&
          req.body.code === result[0].code
        ) {
          res.json({ message: "Number is already registered. Please login" });
        }
      }
      if (result.length == 0) {
        authy
          .phones()
          .verification_start(
            req.body.phone,
            req.body.code,
            { via: req.body.via, locale: "en", code_length: "4" },
            function(err, result) {
              if (err) {
                res.json({ error: err["message"] });
              } else {
                //res.json({ success: result["message"] });
                res.json({
                  code: 200,
                  message: result["message"],
                  data: "",
                  success: true
                });
              }
            }
          );
      }
      if (err) {
        res.json({ msg: "Failed to fetch users" });
      }
    }
  );
}

function verifyNumber(req, res) {
  console.log("MeriBebasi", req.body);
  if (req.body.email) {
    console.log("EMAIL SE LOGIN");
    res.json({
      message: "Please fill the required details",
      isVerified: true,
      code: 200,
      data: []
    });
  }
  if (req.body.phone && req.body.token) {
    console.log("MOBILE SE LOGIN");
    authy
      .phones()
      .verification_check(
        req.body.phone,
        req.body.code,
        req.body.token,
        function(err, result) {
          if (err) {
            res.json({ error: err["message"] });
          } else {
            //res.send(result);
            res.json({
              code: 200,
              message: "Mobile number verified successfully",
              data: result
            });
          }
        }
      );
  }
}

function addUser(req, res) {
  console.log(req.body);

  var newUser = new users({
    phone: req.body.phone,
    code: req.body.code,
    loggedInVia: req.body.loggedInVia,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    address: req.body.address,
    lat: req.body.lat,
    long: req.body.long,
    isVerified: req.body.isVerified,
    dob: req.body.dob
  });
  console.log("new User", newUser);
  newUser.save((err, result) => {
    console.log("=== Err ", err, result);
    if (err) {
      res.json({ error: "Failed to resgister user" });
    } else {
      console.log("result is=>", result);
      users.find({ _id: result._id }, (err, result) => {
        if (err) {
          res.json({ error: "Failed to resgister user" });
        } else {
          result;
        }
      });

      // res.json({ sucess: "User registered successfully", registered: true });
      res.json({
        code: 200,
        message: "User registered successfully",
        data: { isregistered: true, user: result }
      });
    }
  });
}

function getCountrycodes(req, res) {
  res.json({
    code: 200,
    message: "country codes fetched successfully",
    data: countryData.all
  });
}
