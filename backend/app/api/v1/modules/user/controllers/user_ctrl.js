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

module.exports = {
  requestVerification: requestVerification,
  getCountryCodes: getCountryCodes,
  verifyUser: verifyUser,
  registerUser: registerUser,
  login: login
};

function requestVerification(req, res) {
  async function requestVerification() {
    try {
      if (req.body.phone && req.body.code) {
        authy
          .phones()
          .verification_start(
            req.body.phone,
            req.body.code,
            { via: req.body.via, locale: "en", code_length: "4" },
            function(err, result) {
              if (err) {
                //res.json({ message: err["message"], code: 400, data: null });
                res.json(
                  Response(
                    constant.statusCode.validation,
                    constant.messages.failedtosendotp,
                    null
                  )
                );
              } else {
                res.json(
                  Response(
                    constant.statusCode.ok,
                    constant.messages.otpsendsuccessfully,
                    { user: req.body, success: true }
                  )
                );
              }
            }
          );
      }
    } catch (error) {
      return res.json(
        Response(
          constant.statusCode.internalservererror,
          constant.validateMsg.internalError,
          error
        )
      );
    }
  }
  requestVerification().then(function(data) {});
}

function getCountryCodes(req, res) {
  async function getCountryCodes() {
    res.json(
      Response(
        constant.statusCode.ok,
        constant.messages.fetchedcountrycodes,
        countryData.all
      )
    );
  }
  getCountryCodes().then(function(data) {});
}

function verifyUser(req, res) {
  async function verifyUser() {
    try {
      if (req.body.email || req.body.phone) {
        let token;
        let condition = {
          $or: [{ email: req.body.email }, { phone: req.body.phone }]
        };
        let findUser = await query.findoneData(user, condition);
        console.log("FindUser", findUser);

        if (!findUser.data) {
          authy
            .phones()
            .verification_check(
              req.body.phone,
              req.body.code,
              req.body.token,
              function(err, result) {
                if (err) {
                  return res.json(
                    Response(
                      constant.statusCode.ok,
                      constant.messages.userNotFound,
                      {
                        isalreadyexist: false,
                        isVerified: true
                      }
                    )
                  );
                } else {
                  res.json(
                    Response(
                      constant.statusCode.ok,
                      constant.messages.userIsVerified,
                      {
                        user: req.body,
                        isalreadyexist: false,
                        isVerified: true,
                        message: result
                      }
                    )
                  );
                }
              }
            );
        } else {
          //console.log("formdataispresent", findUser.data);

          let params = {
            _id: findUser.data._id
          };

          token = jwt.sign(params, "saloncrm", { expiresIn: "1h" });

          res.json(
            Response(
              constant.statusCode.ok,
              constant.messages.userAlreadyExist,
              {
                user: findUser.data,
                token: token,
                isalreadyexist: true,
                isVerified: true
              }
            )
          );
        }
      } else {
        res.json(
          Response(
            constant.statusCode.validation,
            constant.validateMsg.requiredFieldsMissing,
            null
          )
        );
      }
    } catch (error) {
      return res.json(
        Response(
          constant.statusCode.internalservererror,
          constant.validateMsg.internalError,
          error
        )
      );
    }
  }
  verifyUser().then(function(data) {});
}

function registerUser(req, res) {
  async function registerUser() {
    let roleid;
    let userPassword;
    try {
      if (req.body.password) {
        try {
          let saltPassword = await query.saltThePassword(req.body.password);
          if (saltPassword) {
            userPassword = saltPassword.value;
          } else {
            userPassword = "";
          }
        } catch (error) {
          res.json(
            Response(
              constant.statusCode.validation,
              constant.messages.requiredFieldsMissing,
              null
            )
          );
        }
      }

      if (req.body && req.body.email) {
        let rolesCheckCondition = { name: req.body.role };
        let role = await query.findoneData(roles, rolesCheckCondition);
        if (!role.data) {
          return res.json(
            Response(
              constant.statusCode.validation,
              constant.messages.requiredFieldsMissing,
              null
            )
          );
        } else {
          roleid = role.data._id;
        }
        try {
          let condition = {
            $or: [{ email: req.body.email }, { phone: req.body.phone }]
          };

          let findUser = await query.findoneData(user, condition);

          if (!findUser.data) {
            var newUser = new user({
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
              gender: req.body.gender,
              role_id: roleid,
              password: userPassword
            });
            try {
              newUser.save((error, result) => {
                if (error) {
                  res.json(
                    Response(
                      constant.statusCode.validation,
                      constant.messages.failedToAddUser,
                      null
                    )
                  );
                } else {
                  let params = {
                    _id: result._id
                  };
                  let token = jwt.sign(params, "saloncrm", { expiresIn: "1h" });

                  res.json(
                    Response(
                      constant.statusCode.ok,
                      constant.messages.userAddedSuccessfully,
                      {
                        user: result,
                        isalreadyexist: true,
                        isVerified: true,
                        token: token
                      }
                    )
                  );
                }
              });
            } catch (error) {
              return res.json(
                Response(
                  constant.statusCode.internalservererror,
                  constant.validateMsg.internalError,
                  error
                )
              );
            }
          } else {
            let params = {
              _id: findUser.data._id
            };
            let token = jwt.sign(params, "saloncrm", { expiresIn: "1h" });
            res.json(
              Response(
                constant.statusCode.ok,
                constant.messages.userAlreadyExist,
                {
                  user: findUser.data,
                  isalreadyexist: true,
                  isVerified: true,
                  token: token
                }
              )
            );
          }
        } catch (error) {
          return res.json(
            Response(
              constant.statusCode.internalservererror,
              constant.validateMsg.internalError,
              error
            )
          );
        }
      } else {
        res.json(
          Response(
            constant.statusCode.validation,
            constant.messages.requiredFieldsMissing,
            null
          )
        );
      }
    } catch (error) {
      return res.json(
        Response(
          constant.statusCode.internalservererror,
          constant.validateMsg.internalError,
          error
        )
      );
    }
  }
  registerUser().then(function(data) {});
}

function login(req, res) {
  async function login() {
    try {
      if (req.body.email && req.body.password) {
        let conditionToCheck = { email: req.body.email };
        let findUser = await query.findoneData(user, conditionToCheck);
        if (!findUser.data) {
          res.json(
            Response(
              constant.statusCode.validation,
              constant.messages.requiredFieldsMissing,
              null
            )
          );
        } else {
        }
      }
    } catch (error) {}
  }
  login().then(function(data) {});
}
