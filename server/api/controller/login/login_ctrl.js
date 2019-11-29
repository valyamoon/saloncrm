"use strict";
const users =              require("../../model/users");
var express =              require("express");
var fs =                   require("fs");
var authy =                require("authy")("FwkdkYQ3G8JRtrz45ETv6o5gsJQPUp6h");
var countryData =          require("country-data").countries;
var jwt =                  require("jsonwebtoken");

const commonQuery =        require("../../../lib/commonQuery"),
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
authy
    .phones()
    .verification_start(
      req.body.phone,
      req.body.code,
      { via: req.body.via, locale: "en", code_length: "4" },
      function(err, result) {
        if (err) {
          res.json({ message: err["message"], code: 400, data: null });
        } else {
          res.json({
            code: 200,
            message: result["message"],
            data: null,
            success: true
          });
        }
      }
    );
}

function verifyNumber(req, res) {
  var userData = req;
  if (req.body.email) {
    users.find(
      { $or: [{ email: req.body.email }, { phone: req.body.phone }] },
      (err, result) => {
        if (result.length == 0) {
            res.json({
            code: 200,
            message: "User is not registered",
            data: {
              user: userData.body,
              isalreadyexist: false,
              isVerified: true
            }
          });
        }
        if (result.length > 0) {
          let params = {
            _id: result[0]._id
          };
          let token = jwt.sign(params, "saloncrm", { expiresIn: "1h" });
          if (token) {
            res.json({
              code: 200,
              data: {
                user: result,
                isalreadyexist: true,
                isVerified: true,
                token: token
              },
              message: "User is already registered"
            });
          }
        }
      }
    );
  }
  if (req.body.phone && req.body.token) {
    users.find(
      { phone: req.body.phone, code: req.body.code },
      (err, result) => {
        if (err) {
          
        }
       
        if (result.length > 0) {
          if (
            req.body.phone === result[0].phone &&
            req.body.code === result[0].code
          ) {
            let params = {
              _id: result[0]._id
            };
            let token = jwt.sign(params, "saloncrm", { expiresIn: "1h" });
            if (token) {
              res.json({
                code: 200,
                data: {
                  user: result,
                  isalreadyexist: true,
                  isVerified: true,
                  token: token
                },
                message: "User is already registered"
              });
            }
          }
        }
        if (result.length == 0) {
            authy
            .phones()
            .verification_check(
              req.body.phone,
              req.body.code,
              req.body.token,
              function(err, result) {
                if (err) {
                  res.json({ code: 400, data: null, message: err["message"] });
                } else {
                    res.json({
                    code: 200,
                    message: "Mobile number verified successfully",
                    data: {
                      user: req.body,
                      isalreadyexist: false,
                      isVerified: true
                    }
                  });
                }
              }
            );
        } else {
        }
        if (err) {
          res.json({ code: 400, data: null, message: "Failed to fetch users" });
        }
      }
    );
  }
}

function addUser(req, res) {
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
     dob: req.body.dob,
     role_id: "5ddf6a4c8d9df1071d86a17e",
     gender: req.body.gender
  });
   newUser.save((err, result) => {
    if (err) {
      res.json({ code: 400, data: null, message: "Failed to resgister user" });
    } else {
         users.find({ _id: result._id }, (err, result) => {
        if (err) {
          res.json({
            code: 400,
            data: null,
            message: "Failed to resgister user"
          });
        } else {
          result;
        }
      });
      let params = {
        _id: result._id
      };
      let token = jwt.sign(params, "saloncrm", { expiresIn: "1h" });
      if (token) {
        res.json({
          code: 200,
          data: {
            user: result,
            isalreadyexist: true,
            isVerified: true,
            token: token
          },
          message: "User registered successfully"
        });
      }
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
