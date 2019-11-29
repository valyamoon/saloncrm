"use strict";
const users = require("../../model/users");
var express = require("express");
var fs = require("fs");
//var authy = require("authy")("rtB8lzgc81iP0Urq2nsp1SWevc2wo6Yr");
var authy = require("authy")("FwkdkYQ3G8JRtrz45ETv6o5gsJQPUp6h");
var countryData = require("country-data").countries;
var jwt = require("jsonwebtoken");
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
  //console.log("ion Request", req.body);

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
          //res.json({ success: result["message"] });
          res.json({
            code: 200,
            message: result["message"],
            data: null,
            success: true
          });
        }
      }
    );

  // users.find(
  //   { $and: [{ phone: req.body.phone }, { code: req.body.code }] },
  //   (err, result) => {
  //     console.log("RESULT NOW", result);
  //     if (result.length > 0) {
  //       if (
  //         req.body.phone === result[0].phone &&
  //         req.body.code === result[0].code
  //       ) {
  //         res.json({ message: "Number is already registered. Please login" });
  //       }
  //     }
  //     if (result.length == 0) {
  //       authy
  //         .phones()
  //         .verification_start(
  //           req.body.phone,
  //           req.body.code,
  //           { via: req.body.via, locale: "en", code_length: "4" },
  //           function(err, result) {
  //             if (err) {
  //               res.json({ message: err["message"], code: 400, data: null });
  //             } else {
  //               //res.json({ success: result["message"] });
  //               res.json({
  //                 code: 200,
  //                 message: result["message"],
  //                 data: null,
  //                 success: true
  //               });
  //             }
  //           }
  //         );
  //     }
  //     if (err) {
  //       res.json({ code: 400, data: null, message: "Failed to fetch users" });
  //     }
  //   }
  // );
}

function verifyNumber(req, res) {
  console.log("BODY", req.body);
  var userData = req;
  if (req.body.email) {
    console.log("Seeeeeeeeeeeeeeeeeeeeeeeeee");

    users.find(
      { $or: [{ email: req.body.email }, { phone: req.body.phone }] },
      (err, result) => {
        console.log("resultresultresult ", result);

        if (result.length == 0) {
          //  console.log("=====Hi ");
          // return false;
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
          // console.log("=====Bi ");
          // return false;
          //console.log("RESULLLLLLLLLLT", result);
          // console.log("USerrrrrrrrrData", userData.body);
          // if (
          //   userData.body.email === result[0].email ||
          //   userData.body.phone === result[0].phone
          // ) {
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
          // }
        }

        // if (result.length == 0) {
        //   res.json({
        //     code: 200,
        //     isalreadyexist: false,
        //     message: "Email is verified successfully",
        //     data: result,
        //     isVerified: true
        //   });
        // }
      }
    );

    // console.log("EMAIL SE LOGIN");
    // res.json({
    //   message: "Please fill the required details",
    //   code: 200,
    //   data: [{ user: req.body }],
    //   success: true
    // });
  }
  if (req.body.phone && req.body.token) {
    console.log("In PHONE TOKEN", req.body);

    // users.find(
    //   { $and: [{ phone: req.body.phone }, { code: req.body.code }] },
    //   (err, result) => {
    //     console.log("error is", err);
    //     if (err) {
    //       res.json({ msg: "Failed to fetch contacts" });
    //     } else {
    //       res.send(contacts);
    //     }
    //   }
    // );

    users.find(
      { phone: req.body.phone, code: req.body.code },
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log("RESULT NOW", result);
        if (result.length > 0) {
          if (
            req.body.phone === result[0].phone &&
            req.body.code === result[0].code
          ) {
            let params = {
              _id: result[0]._id
            };
            let token = jwt.sign(params, "saloncrm", { expiresIn: "1h" });
            console.log(token);
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

            // res.json({
            //   data: { user: result, isalreadyexist: true, isVerified: true },
            //   message: "User is already registered",
            //   code: 200
            // });
          }
        }
        if (result.length == 0) {
          console.log("FIOR C", req.body);
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
                  //res.send(result);

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
          // res.json({
          //   code: 400,
          //   isalreadyexist: false,
          //   message: "User is not registered",
          //   data: result,
          //   isVerified: false
          // });
        }
        if (err) {
          res.json({ code: 400, data: null, message: "Failed to fetch users" });
        }
      }
    );

    // console.log("MOBILE SE LOGIN");
  }
}

function addUser(req, res) {
  // console.log(req.body);

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
    role: req.body.role,
    gender: req.body.gender
  });
  //console.log("new User", newUser);
  newUser.save((err, result) => {
    //  console.log("=== Err ", err, result);
    if (err) {
      res.json({ code: 400, data: null, message: "Failed to resgister user" });
    } else {
      // console.log("result is=>", result);
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
      // res.json({ sucess: "User registered successfully", registered: true });
      // res.json({
      //   code: 200,
      //   message: "User registered successfully",
      //   data: { isregistered: true, user: result }
      // });
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
