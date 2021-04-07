"use strict";

const mongoose = require("mongoose");
const utility = require("../../../../lib/utility.js");
// const authy = require("authy")("Y23QOjmAiKdXpEU1MEVAp1g99X77QqFp");
const authy = require("authy")("YuDynfRcXThtqrHflJMDCm2Hp7nJVZGM");

const jwt = require("jsonwebtoken");
const crypto = require('crypto');

const salonCtrl = require("../../salon/controllers/salon_ctrl");

//const webUrl = "http://172.10.230.180:4001/uploads/profileImages/";
const webUrl = "http://54.71.18.74:5977/uploads/profileImages/";
const stripe = require("stripe")("sk_live_7AMm4SiOjGahMNq9AyLNirqw00cw4K9Rmg");
//const stripe = require("stripe")("sk_test_KIPp24RuZLwG2pgVc8Hsd6lS00iSpeKk3X");
const jwtKey = "saloncrm";
const mkdirp = require("mkdirp");
const multer = require("multer");
const wallets = require("../model/walletSchema");
const expiry = "1h";
const countryData = require("country-data").countries;
const constant = require("../../../../config/constant.js");
const users = mongoose.model("users");
const salons = require("../../salon/model/salonSchema");
const reviewratings = require("../../salon/model/salonreviewsratingSchema");

const appointments = require("../../salon/model/appointmentsSchema");

const roles = require("../model/rolesSchema");
const Response = require("../../../../lib/response_handler.js");
const validator = require("../../../../config/validator.js");
const Config = require("../../../../config/config").get(
  process.env.NODE_ENV || "local"
);
const commonQuery = require("../../../../lib/commonQuery.js");
const imageUrl = Config;
module.exports = {
  requestVerification: requestVerification,
  getCountryCodes: getCountryCodes,
  verifyUser: verifyUser,
  registerUser: registerUser,
  login: login,
  forgotPassword: forgotPassword,
  updateUser: updateUser,
  logoutUser: logoutUser,
  getAllUsers: getAllUsers,
  addReviewAndRatings: addReviewAndRatings,
  softDeleteUser: softDeleteUser,
  getDetailsOfUser: getDetailsOfUser,
  userPayment: userPayment,
  cancelBooking: cancelBooking,
  addWalletAmount: addWalletAmount,
  minusWalletAmount: minusWalletAmount,
  getBookingList: getBookingList,
  getWalletAmount: getWalletAmount,
  getStripeToken: getStripeToken,
  fbDataDeletionCallback: fbDataDeletionCallback,
  fbDataDeletionConfirmation: fbDataDeletionConfirmation,
  InitiateWalletAmount: InitiateWalletAmount
};

// Facebook data deletion callback endpoint
function fbDataDeletionCallback(req, res) {
  function base64decode(data) {
    while (data.length % 4 !== 0) {
      data += '=';
    }
    data = data.replace(/-/g, '+').replace(/_/g, '/');
    return new Buffer(data, 'base64').toString('utf-8');
  }

  function parseSignedRequest(signedRequest, secret) {
    var encoded_data = signedRequest.split('.', 2);// decode the data
    var sig = encoded_data[0];

    var json = base64decode(encoded_data[1]); 
    var data = JSON.parse(json); 
    
    if (!data.algorithm || data.algorithm.toUpperCase() != 'HMAC-SHA256') {
      throw Error('Unknown algorithm: ' + data.algorithm + '. Expected HMAC-SHA256');
    } 
    var expected_sig = crypto.createHmac('sha256', secret).update(encoded_data[1]).digest('base64').replace(/\+/g, '-').replace(/\//g, '_').replace('=', ''); 
    
    if (sig !== expected_sig) {
      throw Error('Invalid signature: ' + sig + '. Expected ' + expected_sig);
    } 

    return data;
  }

  async function fbDataDeletionCallback() {
    try {
      const signedRequest = req.body.signed_request;
      const appSecret = "340485f4820d365e3b91c4806104d4b0";

      // We can use this function to actually parse facebook data 
      // parseSignedRequest(signedRequest, appSecret);

      const id = Date.now() + Math.random() * 15013456;
      return res.json({
        url: Config.baseURL + `api/fb-data-deletion-confirmation?id=${id}`,
        confirmation_code: id
      });
    } catch {
      return res.json(
        Response(constant.ERROR_CODE, constant.INTERNAL_ERROR, error)
      );
    }
  }

  fbDataDeletionCallback().then(function () { });
}

// Facebook data deletion confirmation endpoint
function fbDataDeletionConfirmation(req, res) {
  async function fbDataDeletionConfirmation() {
    res.json({deleted: true});
  }

  fbDataDeletionConfirmation().then(function () { });
}


// /* Function is use to Request Otp
//  * @access private
//  * @return json
//  * Created by Nadim Shah
//  * @smartData Enterprises (I) Ltd
//  * Created Date
//  */
function requestVerification(req, res) {
  async function requestVerification() {
    try {
      if (req.body.phone && req.body.code) {
        authy.phones().verification_start(
          req.body.phone,
          req.body.code,
          {
            via: req.body.via,
            locale: "en",
            code_length: "4"
          },
          function (err, result) {
            if (err) {
              console.log(err);
              //res.json({ message: err["message"], code: 400, data: null });
              res.json(
                Response(constant.ERROR_CODE, constant.FAILED_TO_SEND_OTP, null)
              );
            } else {
              res.json(
                Response(constant.SUCCESS_CODE, constant.OTP_SEND, {
                  user: req.body,
                  success: true
                })
              );
            }
          }
        );
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.INTERNAL_ERROR, error)
      );
    }
  }
  requestVerification().then(function (data) { });
}

// /* Function is use to Fetch country codes
//  * @access private
//  * @return json
//  * Created by Nadim Shah
//  * @smartData Enterprises (I) Ltd
//  * Created Date
//  */

function getCountryCodes(req, res) {
  async function getCountryCodes() {
    res.json(
      Response(constant.SUCCESS_CODE, constant.CODES_FETCHED, countryData.all)
    );
  }
  getCountryCodes().then(function (data) { });
}

// /* Function is use to Verify User
//  * @access private
//  * @return json
//  * Created by Nadim Shah
//  * @smartData Enterprises (I) Ltd
//  * Created Date
//  */

function verifyUser(req, res) {
  let token;

  async function verifyUser() {
    try {
      if (req.body.phone) {
        authy
          .phones()
          .verification_check(
            req.body.phone,
            req.body.code,
            req.body.token,
            async function (err, result) {
              if (err) {
                return res.json(
                  Response(constant.ERROR_CODE, constant.INVALID_OTP, {
                    isalreadyexist: false,
                    isVerified: true
                  })
                );
              } else {
                let condition = {
                  phone: req.body.phone
                };
                let findUser = await commonQuery.findoneData(users, condition);
                if (!findUser) {
                  res.json(
                    Response(constant.SUCCESS_CODE, constant.USER_NOT_FOUND, {
                      user: req.body,
                      isalreadyexist: false,
                      isVerified: true
                    })
                  );
                } else {
                  let params = {
                    _id: findUser._id
                  };

                  let deviceTokenToUpdate = {
                    deviceToken: req.body.deviceToken
                  };

                  let updateDeviceTokenData = await commonQuery.updateOneDocument(
                    users,
                    params,
                    deviceTokenToUpdate
                  );

                  if (!updateDeviceTokenData) {
                    res.json(
                      Response(
                        constant.ERROR_CODE,
                        constant.REQURIED_FIELDS_NOT,
                        null
                      )
                    );
                  } else {
                    var userUpdatedData = updateDeviceTokenData;
                  }

                  token = jwt.sign(params, jwtKey, {
                    expiresIn: expiry
                  });

                  res.json(
                    Response(
                      constant.SUCCESS_CODE,
                      constant.USER_ALREADY_EXIST,
                      {
                        user: userUpdatedData,
                        token: token,
                        isalreadyexist: true,
                        isVerified: true
                      }
                    )
                  );
                }
              }
            }
          );
      } else if (req.body.email || req.body.socialLoginId) {
        // let condition = {
        //     email: req.body.email,socialLoginId:req.body.socialLoginId
        // };
        let condition = {
          $or: [
            { email: req.body.email },
            { socialLoginId: req.body.socialLoginId }
          ]
        };

        let findUser = await commonQuery.findoneData(users, condition);

        if (!findUser) {
          res.json(
            Response(constant.SUCCESS_CODE, constant.USER_NOT_FOUND, {
              user: req.body,
              isalreadyexist: false,
              isVerified: true
            })
          );
        } else {
          let params = {
            _id: findUser._id
          };

          let deviceTokenToUpdate = {
            deviceToken: req.body.deviceToken
          };

          let updateDeviceTokenData = await commonQuery.updateOneDocument(
            users,
            params,
            deviceTokenToUpdate
          );

          if (!updateDeviceTokenData) {
            res.json(
              Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
            );
          } else {
            var userUpdatedData = updateDeviceTokenData;
          }

          token = jwt.sign(params, jwtKey, {
            expiresIn: expiry
          });

          res.json(
            Response(constant.SUCCESS_CODE, constant.USER_ALREADY_EXIST, {
              user: userUpdatedData,
              token: token,
              isalreadyexist: true,
              isVerified: true
            })
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  verifyUser().then(function (data) { });
}

// /* Function is use to register user
//  * @access private
//  * @return json
//  * Created by Nadim Shah
//  * @smartData Enterprises (I) Ltd
//  * Created Date
//  */

function registerUser(req, res) {
  async function registerUser() {
    let roleid;
    let isActiveStatus;

    try {
      if (req.body && req.body.email) {
        if (req.body.role === "user" || req.body.role === "admin") {
          isActiveStatus = true;
        } else {
          isActiveStatus = false;
        }

        let rolesCheckCondition = {
          name: req.body.role
        };
        let role = await commonQuery.findoneData(roles, rolesCheckCondition);

        if (!role) {
          return res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
          );
        } else {
          roleid = role._id;
        }
        try {
          let condition = {};
          if (req.body.email && req.body.phone) {
            // condition = [{ email: req.body.email }, { phone: req.body.phone }];
            condition = {
              $or: [{ email: req.body.email }, { phone: req.body.phone }]
            };
          } else if (req.body.email) {
            condition = {
              email: req.body.email
            };
          } else if (req.body.phone) {
            condition = {
              email: req.body.phone
            };
          } else {
            condition = {
              email: req.body.email,
              phone: req.body.phone,
              via: "sms"
            };
          }

          let checkUser = await commonQuery.findoneUser(users, condition);

          if (!checkUser.length) {
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
              gender: req.body.gender,
              role_id: roleid,
              password: req.body.password,
              isActive: isActiveStatus,
              socialLoginId: req.body.socialLoginId
            });

            try {
              let saveUser = await commonQuery.InsertIntoCollection(
                users,
                newUser
              );

              if (!saveUser) {
                res.json(
                  Response(
                    constant.ERROR_CODE,
                    constant.REQURIED_FIELDS_NOT,
                    null
                  )
                );
              } else {
                saveUser.password = undefined;
                let params = {
                  _id: saveUser._id
                };

                let token = jwt.sign(params, jwtKey, {
                  expiresIn: expiry
                });

                res.json(
                  Response(
                    constant.SUCCESS_CODE,
                    constant.USER_REGISTERED_SUCCESSFULLY,
                    {
                      user: saveUser,
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
              Response(constant.ALLREADY_EXIST, constant.USER_ALREADY_EXIST, {
                user: checkUser,
                isalreadyexist: true,
                isVerified: true
              })
            );
          }
        } catch (error) {
          return res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
          );
        }
      } else {
        res.json(
          Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
        );
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.DATA_NOT_FOUND, error)
      );
    }
  }
  registerUser().then(function (data) { });
}

// /* Function is use to Login
//  * @access private
//  * @return json
//  * Created by Nadim Shah
//  * @smartData Enterprises (I) Ltd
//  * Created Date
//  */

function login(req, res) {
  async function login() {
    try {
      if (req.body.email && req.body.password) {
        // let isactivecondition;
        // if(req.body.role === "salon"){
        //   isactivecondition = false;
        // }
        // else if(req.body.role === 'admin'){
        //   isactivecondition = true;
        // }
        let roleCondition = { name: req.body.role };
        let fetchRoleId = await commonQuery.findoneData(roles, roleCondition);

        let roleId = mongoose.Types.ObjectId(fetchRoleId._id);

        let conditionToCheck = {
          email: req.body.email,
          isDeleted: false,
          role_id: roleId
        };

        let findUser = await commonQuery.findoneData(users, conditionToCheck);

        if (!findUser) {
          res.json(
            Response(constant.ERROR_CODE, constant.INVALID_LOGIN_DETAILS, null)
          );
        } else {
          findUser.comparePassword(req.body.password, async function (
            err,
            isMatch
          ) {
            if (err) {
              return res.json(
                Response(
                  constant.ERROR_CODE,
                  constant.INVALID_LOGIN_DETAILS,
                  null
                )
              );
            } else if (isMatch) {
              let params = {
                _id: findUser._id
              };
              let token = jwt.sign(params, jwtKey, {
                expiresIn: "1h"
              });

              findUser.password = undefined;

              let finalObjectToBeSend = {
                token: token,
                userInfo: findUser
              };
              if (finalObjectToBeSend) {
                return res.json(
                  Response(
                    constant.SUCCESS_CODE,
                    constant.SIGNIN_SUCCESS,
                    finalObjectToBeSend
                  )
                );
              }
            } else {
              return res.json(
                Response(constant.ERROR_CODE, constant.USER_NOT_FOUND)
              );
            }
          });
        }
      } else {
        return res.json(Response(constant.ERROR_CODE, constant.USER_NOT_FOUND));
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.INVALID_LOGIN_DETAILS, error)
      );
    }
  }
  login().then(function (data) { });
}
/**
 * Function is use to Update User Data
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function updateUser(req, res) {
  async function updateUser() {
    var image_path;
    let updatedUserData = {};
    try {
      if (req.body && req.body._id) {
        let condition = {
          _id: req.body._id,
          isDeleted: false,
          isActive: true
        };

        if (req.files) {
          mkdirp(constant.PROFILEIMAGE, async function (err) {
            let timeStamp = Date.now();

            let extension;
            if (err) {
              return res.json(
                Response(constant.ERROR_CODE, constant.INTERNAL_ERROR, err)
              );
            } else {
              let db_path = "";
              let path = "";
              if (req.files) {
                extension = req.files.profilepic.name.split(".");
                let imgOriginalName = req.files.profilepic.name;
                // path =
                //   constant.PROFILEIMAGE + timeStamp + "_" + imgOriginalName;
                // db_path = webUrl + timeStamp + "_" + imgOriginalName;

                path =
                  constant.PROFILEIMAGE + timeStamp + "_" + imgOriginalName;
                // constant.directoryPath.SERVICEIMAGE
                // return false;
                db_path =
                  "uploads/profileImages/" + timeStamp + "_" + imgOriginalName;
              }
              if (db_path) {
                //image_path= db_path;
                image_path = db_path;
              }
              if (path != "") {
                let extensionArray = ["jpg", "jpeg", "png", "jfif"];
                let format = extension[extension.length - 1];
                if (extensionArray.includes(format)) {
                  let result = await commonQuery
                    .fileUpload(path, req.files.profilepic.data)
                    .then(async data => {
                      if (data.status) {
                        updatedUserData = {
                          firstName: req.body.firstName,
                          lastName: req.body.lastName,
                          address: req.body.address,
                          profilepic: image_path
                        };

                        let userUpdated = await commonQuery.updateOneDocument(
                          users,
                          condition,
                          updatedUserData
                        );

                        if (!userUpdated) {
                          res.json(
                            Response(
                              constant.ERROR_CODE,
                              constant.REQURIED_FIELDS_NOT,
                              null
                            )
                          );
                        } else {
                          delete userUpdated.password;

                          var TempUrl = imageUrl.imageBaseUrl;
                          var url = TempUrl + userUpdated.profilepic;

                          userUpdated.profilepic = url;
                          res.json(
                            Response(
                              constant.SUCCESS_CODE,
                              constant.USER_UPDATED,
                              userUpdated
                            )
                          );
                        }
                      } else {
                      }
                    });
                } else {
                  return res.json(
                    Response(constant.ERROR_CODE, constant.FILE_UNSUPPORTED)
                  );
                }
              }
            }
          });
        } else if (!req.files) {
          updatedUserData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address
          };

          let userUpdated = await commonQuery.updateOneDocument(
            users,
            condition,
            updatedUserData
          );

          if (!userUpdated) {
            res.json(
              Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
            );
          } else {
            delete userUpdated.password;
            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.USER_UPDATED,
                userUpdated
              )
            );
          }
        }
      } else {
        res.json(
          Response(constant.SUCCESS_CODE, constant.REQURIED_FIELDS_NOT, null)
        );
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  updateUser().then(function () { });
}

/**
 * Function is use to reset password
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function forgotPassword() {
  async function forgotPassword() { }
  forgotPassword().then(function (data) { });
}
/**
 * Function is use to logout user
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function logoutUser(req, res) {
  async function logoutUser() {
    try {
      if (req.body && req.body._id) {
        let condition = {
          _id: req.body._id
        };
        let checkUser = await commonQuery.findoneData(users, condition);

        if (!checkUser) {
          res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
          );
        } else {
          let params = {
            _id: checkUser._id
          };

          let deviceTokenToUpdate = {
            deviceToken: null
          };

          let updateDeviceTokenData = await commonQuery.updateOneDocument(
            users,
            params,
            deviceTokenToUpdate
          );
          delete updateDeviceTokenData.password;
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.USER_LOGGED_OUT,
              updateDeviceTokenData
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  logoutUser().then(function (data) { });
}
/**
 * Function is use to Fetch List of All Users
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function getAllUsers(req, res) {
  async function getAllUsers() {
    let pageSize =
      +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
    let currentPage = +req.query.page || req.body.page ? req.body.page : 1;

    try {
      if (req.body) {
        let rolesCheckCondition = {
          name: "user"
        };
        let role = await commonQuery.findoneData(roles, rolesCheckCondition);

        let condition = {
          isDeleted: false,
          isActive: true,
          role_id: mongoose.Types.ObjectId(role._id)
        };
        var fethedUsersNew = await commonQuery.fetch_all_paginated(
          users,
          condition,
          pageSize,
          currentPage
        );

        if (!fethedUsersNew) {
          res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
          );
        } else {
          fethedUsersNew.forEach(function (v) {
            v.password = undefined;
          });

          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_USERS,
              fethedUsersNew
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  getAllUsers().then(function () { });
}

/**
 * Function is use to Add review and ratings
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function addReviewAndRatings(req, res) {
  async function addReviewAndRatings() {
    try {
      if (req.body.salon_id && req.body) {
        let reviewRating = new reviewratings({
          comments: req.body.comments,
          ratings: req.body.ratings,
          user_id: req.body.user_id,
          salon_id: req.body.salon_id
        });

        let saveReviewAndRatings = await commonQuery.InsertIntoCollection(
          reviewratings,
          reviewRating
        );

        if (!saveReviewAndRatings) {
          res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
          );
        } else {
          let condition = {
            _id: mongoose.Types.ObjectId(req.body.salon_id)
          };

          let updateCondition = {
            isreviewadded: true
          };

          let updateSalonData = await commonQuery.updateOneDocument(
            salons,
            condition,
            updateCondition
          );

          if (!updateSalonData) {
          } else {
          }

          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.ADDED_SUCCESS,
              saveReviewAndRatings
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  addReviewAndRatings().then(function () { });
}
/**
 * Function is use to delete User
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function softDeleteUser(req, res) {
  async function softDeleteUser() {
    try {
      if (req.body.userid) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body.userid)
        };

        let fetchUser = await commonQuery.findoneData(users, condition);

        if (!fetchUser) {
          res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
          );
        } else {
          let deleteUser = {
            isDeleted: true,
            isActive: false
          };

          let deleteUserSoft = await commonQuery.updateOneDocument(
            users,
            condition,
            deleteUser
          );
          if (!deleteUserSoft) {
            res.json(
              Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
            );
          } else {
            delete deleteUserSoft.password;

            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.USER_DELETED,
                deleteUserSoft
              )
            );
          }
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  softDeleteUser().then(function () { });
}

/**
 * Function is use to Fetch Details of user
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function getDetailsOfUser(req, res) {
  async function getDetailsOfUser() {
    var TempUrl;
    var url;
    try {
      if (req.body.user_id) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body.user_id),
          isActive: true,
          isDeleted: false
        };

        let userDetails = await commonQuery.findoneData(users, condition);

        if (!userDetails) {
          return res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
          );
        } else {
          userDetails.password = undefined;
          TempUrl = imageUrl.imageBaseUrl;

          url = TempUrl + userDetails.profilepic;

          userDetails.profilepic = url;

          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              userDetails
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  getDetailsOfUser().then(function () { });
}

/**
 * Function is use to Pay to Salon Its under construction yet to complete
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function userPayment(req, res) {
  async function userPayment() {
    if (req.body.payType === "cash") {
      let dataToPass = {
        totalamount: req.body.totalAmt,
        salon_id: req.body.salon_id,
        user_id: req.body.user_id,
        date: req.body.date,
        time: req.body.time,
        service_id: req.body.service_id,
        promocode_id: req.body.promocode_id,
        deviceToken: req.body.deviceToken,
        duration: req.body.duration,
        paymentType: req.body.payType
      };

      let bookingDetails = salonCtrl.bookSlot(dataToPass);
      bookingDetails.then(result => {
        console.log("result", result);
        res.json(
          Response(constant.SUCCESS_CODE, constant.FETCHED_ALL_DATA, result)
        );
      });
    } else if (req.body.payType === "card") {
      if (req.body.isWalletUsed === true) {
        if (req.body.totalAmt <= req.body.walletAmountUsed) {
          var walletAmountToMinus =
            parseInt(req.body.walletAmountUsed) - parseInt(req.body.totalAmt);

          let dataToMinus = {
            user_id: req.body.user_id,
            amount: walletAmountToMinus
          };

          let dataToPass = {
            totalamount: req.body.totalAmt,
            salon_id: req.body.salon_id,
            stripeToken: req.body.stripeToken,
            date: req.body.date,
            time: req.body.time,
            service_id: req.body.service_id,
            user_id: req.body.user_id,
            stripeEmail: req.body.stripeEmail,
            promocode_id: req.body.promocode_id,
            deviceToken: req.body.deviceToken,
            createdon: null,
            payment_method: "wallet",
            card_last_digit: null,
            duration: req.body.duration,
            paymentType: req.body.payType
          };

          let bookingDetails = salonCtrl.bookSlot(dataToPass);

          bookingDetails.then(result => {
            res.json(
              Response(constant.SUCCESS_CODE, constant.FETCHED_ALL_DATA, result)
            );
            minusWalletAmount(dataToMinus);
          });
        } else if (req.body.totalAmt > req.body.walletAmountUsed) {
          var amount =
            parseInt(req.body.totalAmt) - parseInt(req.body.walletAmountUsed);

          let dataToMinus = {
            user_id: req.body.user_id,
            amount: req.body.walletAmountUsed
          };

          amount = amount * 100; // 500 cents means $5

          stripe.charges.create(
            {
              amount: amount,
              currency: "usd",
              source: req.body.stripeToken,
              description: "Charge for" + req.body.stripeEmail,
              shipping: {
                name: "Jenny Rosen",
                address: {
                  line1: "510 Townsend St",
                  postal_code: "98140",
                  city: "San Francisco",
                  state: "CA",
                  country: "US"
                }
              }
            },
            async function (err, charge) {
              if (err) {
              } else {
                let dataToPass = {
                  totalamount: req.body.totalAmt,
                  salon_id: req.body.salon_id,
                  stripeToken: req.body.stripeToken,
                  date: req.body.date,
                  time: req.body.time,
                  service_id: req.body.service_id,
                  user_id: req.body.user_id,
                  stripeEmail: req.body.stripeEmail,
                  promocode_id: req.body.promocode_id,
                  deviceToken: req.body.deviceToken,
                  createdon: charge.created,
                  payment_method: charge.payment_method,
                  card_last_digit:
                    charge.payment_method_details["card"]["last4"],
                  duration: req.body.duration,
                  paymentType: req.body.payType
                };

                let bookingDetails = salonCtrl.bookSlot(dataToPass);

                bookingDetails.then(result => {
                  res.json(
                    Response(
                      constant.SUCCESS_CODE,
                      constant.FETCHED_ALL_DATA,
                      result
                    )
                  );
                  minusWalletAmount(dataToMinus);
                });
              }
            }
          );
        }
      } else if (req.body.isWalletUsed === false) {
        let amount = +req.body.totalAmt * 100; // 500 cents means $5

        stripe.charges.create(
          {
            amount: amount,
            currency: "usd",
            source: req.body.stripeToken,
            description: "Charge for" + req.body.stripeEmail,
            shipping: {
              name: "Jenny Rosen",
              address: {
                line1: "510 Townsend St",
                postal_code: "98140",
                city: "San Francisco",
                state: "CA",
                country: "US"
              }
            }
          },
          async function (err, charge) {
            if (err) {
            } else {
              let dataToPass = {
                totalamount: req.body.totalAmt,
                salon_id: req.body.salon_id,
                stripeToken: req.body.stripeToken,
                date: req.body.date,
                time: req.body.time,
                service_id: req.body.service_id,
                user_id: req.body.user_id,
                stripeEmail: req.body.stripeEmail,
                promocode_id: req.body.promocode_id,
                deviceToken: req.body.deviceToken,
                createdon: charge.created,
                payment_method: charge.payment_method,
                card_last_digit: charge.payment_method_details["card"]["last4"],
                duration: req.body.duration,
                paymentType: req.body.payType
              };

              let bookingDetails = salonCtrl.bookSlot(dataToPass);

              bookingDetails.then(result => {
                res.json(
                  Response(
                    constant.SUCCESS_CODE,
                    constant.FETCHED_ALL_DATA,
                    result
                  )
                );
              });
            }
          }
        );
      }
    }
  }

  userPayment().then(function () { });
}

function cancelBooking(req, res) {
  async function cancelBooking() {
    try {
      if (req.body && req.body.booking_id) {
        let condition = { _id: mongoose.Types.ObjectId(req.body.booking_id) };
        let updateCondition = {
          isCancelled: true,
          isActive: false,
          isCompleted: false
        };
        let updateBooking = await commonQuery.updateOneDocument(
          appointments,
          condition,
          updateCondition
        );
        if (!updateBooking) {
        } else {
          let dataToPass = {
            user_id: updateBooking.user_id,
            amount: updateBooking.totalamount
          };

          addWalletAmount(dataToPass);
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              updateBooking
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  cancelBooking().then(function () { });
}

function addWalletAmount(dataToPass) {
  async function addWalletAmount() {
    try {
      var initialAmount = 0;
      if (dataToPass) {
        let condition = { user_id: dataToPass.user_id };

        let checkWalletAmount = await commonQuery.fetch_all(wallets, condition);

        if (checkWalletAmount.length > 0) {
          initialAmount =
            checkWalletAmount[0].amount + parseInt(dataToPass["amount"]);

          let condition = {
            user_id: mongoose.Types.ObjectId(dataToPass["user_id"])
          };

          let updateData = {
            amount: initialAmount
          };

          let updateAmount = await commonQuery.updateOneDocument(
            wallets,
            condition,
            updateData
          );

          if (updateAmount) {
            console.log("Success");
          } else {
            console.log("Error");
          }
        } else {
          initialAmount = initialAmount + parseInt(dataToPass["amount"]);

          let saveWalletAmount = new wallets({
            amount: initialAmount,
            user_id: dataToPass.user_id
          });

          let addWalletAmount = await commonQuery.InsertIntoCollection(
            wallets,
            saveWalletAmount
          );

          if (!addWalletAmount) {
            console.log("Error");
          } else {
            console.log("Success");
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  addWalletAmount().then(function () { });
}

function getWalletAmount(req, res) {
  async function getWalletAmount() {
    try {
      if (req.body.user_id && req.body) {
        let condition = { user_id: mongoose.Types.ObjectId(req.body.user_id) };
        let getWalletAmount = await commonQuery.fetch_all(wallets, condition);

        if (!getWalletAmount) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          console.log(getWalletAmount);

          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              getWalletAmount[0]
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  getWalletAmount().then(function () { });
}

function minusWalletAmount(data) {
  async function minusWalletAmount() {
    try {
      if (data && data.user_id) {
        let condition = { user_id: mongoose.Types.ObjectId(data.user_id) };
        let fetchWalletAmount = await commonQuery.findoneData(
          wallets,
          condition
        );

        if (fetchWalletAmount) {
          var updatedAmount;

          if (data.amount === 0) {
            updatedAmount = 0;
          } else {
            updatedAmount =
              parseInt(fetchWalletAmount.amount) - parseInt(data.amount);
          }

          let condition = { user_id: mongoose.Types.ObjectId(data.user_id) };
          let updateCondition = { amount: updatedAmount };
          let updateWallet = await commonQuery.updateOneDocument(
            wallets,
            condition,
            updateCondition
          );
          if (updateWallet) {
          }
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  minusWalletAmount().then(function () { });
}

function getBookingList(req, res) {
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  async function getBookingList() {
    try {
      let from = "salons";
      let localField = "salon_id";
      let foreignField = "_id";

      if (req.body && req.body.user_id) {
        let condition = {};
        let ascend;

        if (req.body.type === "upcoming") {
          ascend = 1;
          condition = {
            user_id: mongoose.Types.ObjectId(req.body.user_id),
            isActive: true,
            isCompleted: false
          };
        } else if (req.body.type === "completed") {
          ascend = -1;
          condition = {
            user_id: mongoose.Types.ObjectId(req.body.user_id),
            isActive: false,
            isCompleted: true
          };
        } else {
          ascend = 1;
          condition = {
            user_id: mongoose.Types.ObjectId(req.body.user_id),
            isActive: true,
            isCompleted: false
          };
        }
        let bookingList = await commonQuery.getUpcomingBookings(
          appointments,
          condition,
          from,
          localField,
          foreignField,
          pageSize,
          currentPage,
          ascend
        );
        if (!bookingList) {
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              bookingList
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  getBookingList().then(function () { });
}
function getStripeToken(req, res) {
  async function getStripeToken() {
    try {
      if (req.body.cardNum && req.body) {
        stripe.tokens.create(
          {
            card: {
              number: req.body.cardNum,
              exp_month: req.body.month,
              exp_year: req.body.year,
              cvc: req.body.cvc
            }
          },
          function (err, token) {
            if (err) {
              console.log(err);
              res.json(
                Response(constant.ERROR_CODE, constant.INVALID_CARD, err)
              );
            } else {
              console.log(token);
              res.json(
                Response(constant.SUCCESS_CODE, constant.VALID_CARD, token)
              );
            }
          }
        );
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  getStripeToken().then(function () { });
}

function InitiateWalletAmount(req, res) {
  async function InitiateWalletAmount() {
    try {
      let saveWallet = new wallets({
        user_id: mongoose.Types.ObjectId(req.body.user_id),
        amount: 0
      });

      let saveWalletInitally = await commonQuery.InsertIntoCollection(
        wallets,
        saveWallet
      );

      if (saveWalletInitally) {
        res.json(
          Response(
            constant.SUCCESS_CODE,
            constant.ADDED_SUCCESS,
            saveWalletInitally
          )
        );
      } else {
        res.json(Response(constant.ERROR_CODE, constant.FAILED_TO_ADD, null));
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  InitiateWalletAmount().then(function () { });
}
