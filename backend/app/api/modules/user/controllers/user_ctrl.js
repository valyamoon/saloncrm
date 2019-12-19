"use strict";

const mongoose = require("mongoose");
const utility = require("../../../../lib/utility.js");
const authy = require("authy")("Y23QOjmAiKdXpEU1MEVAp1g99X77QqFp");
const jwt = require("jsonwebtoken");

//const webUrl = "http://172.10.230.180:3001/uploads/profileImages/";
const webUrl = "http://54.71.18.74:5977/uploads/profileImages/";

const jwtKey = "saloncrm";
const mkdirp = require("mkdirp");
const multer = require("multer");
const expiry = "1h";
const countryData = require("country-data").countries;
const constant = require("../../../../config/constant.js");
const users = mongoose.model("users");
const reviewratings = require("../../salon/model/salonreviewsratingSchema");

const roles = require("../model/rolesSchema");
const Response = require("../../../../lib/response_handler.js");
const validator = require("../../../../config/validator.js");
const Config = require("../../../../config/config").get(
  process.env.NODE_ENV || "local"
);
const commonQuery = require("../../../../lib/commonQuery.js");

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
  getDetailsOfUser: getDetailsOfUser
};

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
                    constant.ERROR_CODE,
                    constant.FAILED_TO_SEND_OTP,
                    null
                  )
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
  requestVerification().then(function(data) {});
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
  getCountryCodes().then(function(data) {});
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
            async function(err, result) {
              if (err) {
                return res.json(
                  Response(constant.ERROR_CODE, constant.INVALID_OTP, {
                    isalreadyexist: false,
                    isVerified: true
                  })
                );
              } else {
                let condition = { phone: req.body.phone };

                // if (req.body.phone) {
                //   condition = { phone: req.body.phone };
                // } else if (req.body.email) {
                //   condition = { email: req.body.email };
                // } else {
                //   condition = {phone: req.body.phone,email:req.body.email};
                // }

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

                  token = jwt.sign(params, jwtKey, { expiresIn: expiry });

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
      } else if (req.body.email) {
        let condition = { email: req.body.email };

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

          token = jwt.sign(params, jwtKey, { expiresIn: expiry });

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
  verifyUser().then(function(data) {});
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

        let rolesCheckCondition = { name: req.body.role };
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
          if (req.body.email) {
            condition = { email: req.body.email };
          } else if (req.body.phone) {
            condition = { email: req.body.phone };
          } else {
            condition = { email: req.body.phone, phone: req.body.phone };
          }

          let checkUser = await commonQuery.findoneData(users, condition);

          if (!checkUser) {
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
              isActive: isActiveStatus
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

                let token = jwt.sign(params, jwtKey, { expiresIn: expiry });

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
              Response(constant.SUCCESS_CODE, constant.USER_ALREADY_EXIST, {
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
  registerUser().then(function(data) {});
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
        let conditionToCheck = {
          email: req.body.email,
          isActive: true,
          isDeleted: false
        };
        let findUser = await commonQuery.findoneData(users, conditionToCheck);

        if (!findUser) {
          res.json(
            Response(constant.ERROR_CODE, constant.INVALID_LOGIN_DETAILS, null)
          );
        } else {
          findUser.comparePassword(req.body.password, async function(
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
              let token = jwt.sign(params, "saloncrm", { expiresIn: "1h" });

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
  login().then(function(data) {});
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
        let condition = { _id: req.body._id, isDeleted: false, isActive: true };

        if (req.files) {
          mkdirp(constant.PROFILEIMAGE, async function(err) {
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
                path =
                  constant.PROFILEIMAGE + timeStamp + "_" + imgOriginalName;
                db_path = webUrl + timeStamp + "_" + imgOriginalName;
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
  updateUser().then(function() {});
}

/**
 * Function is use to reset password
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function forgotPassword() {
  async function forgotPassword() {}
  forgotPassword().then(function(data) {});
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
        let condition = { _id: req.body._id };
        let checkUser = await commonQuery.findoneData(users, condition);

        if (!checkUser) {
          res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
          );
        } else {
          let params = {
            _id: checkUser._id
          };

          let deviceTokenToUpdate = { deviceToken: null };

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
  logoutUser().then(function(data) {});
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
        let rolesCheckCondition = { name: "user" };
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
          fethedUsersNew.forEach(function(v) {
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

  getAllUsers().then(function() {});
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
      if (req.body) {
        let condition = {
          _id: req.body.salon_id,
          isActive: true,
          isDeleted: false
        };
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
  addReviewAndRatings().then(function() {});
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
        let condition = { _id: mongoose.Types.ObjectId(req.body.userid) };

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
  softDeleteUser().then(function() {});
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
    try {
      if (req.body.userid) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body.userid),
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
  getDetailsOfUser().then(function() {});
}
