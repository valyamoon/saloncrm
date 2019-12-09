"use strict";

const mongoose = require("mongoose");
const utility = require("../../../../lib/utility.js");
const authy = require("authy")("7xYu5sI2Pwp1evOR8pwoWtj5pIcU11rp");
const jwt = require("jsonwebtoken");

//const webUrl = "http://172.10.230.180:3001/uploads/profileImages/";
const webUrl = "http://54.71.18.74:5977/uploads/profileImages/";



const jwtKey = "saloncrm";
const mkdirp = require("mkdirp");
const multer = require("multer");
const uploads = multer({ dest: "uploads/" }).single("profilepic");
const expiry = "1h";
const countryData = require("country-data").countries;
const constant = require("../../../../config/constant.js");
const users = mongoose.model("users");
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
  logoutUser: logoutUser
};

// /* Function is use to Request Otp
//  * @access private
//  * @return json
//  * Created by Nadim Shah
//  * @smartData Enterprises (I) Ltd
//  * Created Date
//  */

 

function requestVerification(req, res) {
  console.log(req.body);
  async function requestVerification() {
    try {
      if (req.body.phone && req.body.code) {
        console.log(req.body.phone, req.body.code);
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
  console.log("isithere");
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
  console.log("verifyOTP", req.body);
  async function verifyUser() {
    try {
      if (req.body.email || req.body.phone) {
        let condition = {};
        if (req.body.email) {
          condition = { email: req.body.email };
        } else if (req.body.phone) {
          condition = { phone: req.body.phone };
        } else {
          condition = { email: req.body.email, phone: req.body.phone };
        }
        console.log("YAHA AATA");
        let token;

        let findUser = await commonQuery.findoneData(users, condition);
        console.log("FindUser", findUser);

        if (!findUser) {
          console.log("here");
          authy
            .phones()
            .verification_check(
              req.body.phone,
              req.body.code,
              req.body.token,
              function(err, result) {
                if (err) {
                  return res.json(
                    Response(constant.SUCCESS_CODE, constant.DATA_NOT_FOUND, {
                      isalreadyexist: false,
                      isVerified: true
                    })
                  );
                } else {
                  res.json(
                    Response(constant.SUCCESS_CODE, constant.USER_VERIFIED, {
                      user: req.body,
                      isalreadyexist: false,
                      isVerified: true
                    })
                  );
                }
              }
            );
        } else {
          //console.log("formdataispresent", findUser.data);

          let params = {
            _id: findUser._id
          };

          let deviceTokenToUpdate = { deviceToken: req.body.deviceToken };

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
            // console.log("updatedDeviceToken",updateDeviceTokenData);
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
      } else {
        res.json(
          Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
        );
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
  console.log("comingData", req.body);

  async function registerUser() {
    let roleid;

    try {
      if (req.body && req.body.email) {
        console.log("istrue");
        let rolesCheckCondition = { name: req.body.role };
        let role = await commonQuery.findoneData(roles, rolesCheckCondition);
        console.log("ROLE", role);
        if (!role) {
          return res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
          );
        } else {
          roleid = role._id;
          console.log("ROLEID", roleid);
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
          console.log("email and password", req.body.email, req.body.phone);

          console.log("Inhere", condition);

          let checkUser = await commonQuery.findoneData(users, condition);

          console.log("haikya", checkUser);

          if (!checkUser) {
            console.log(checkUser);

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
              isActive: req.body.isActive
            });
            console.log(newUser);
            try {
              let saveUser = await commonQuery.InsertIntoCollection(
                users,
                newUser
              );
              console.log("saveUser", saveUser);

              if (!saveUser) {
                res.json(
                  Response(
                    constant.ERROR_CODE,
                    constant.REQURIED_FIELDS_NOT,
                    null
                  )
                );
              } else {
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
  console.log("inLogin", req.body);
  async function login() {
    try {
      if (req.body.email && req.body.password) {
        console.log("In here");
        let conditionToCheck = { email: req.body.email };
        let findUser = await commonQuery.findoneData(users, conditionToCheck);
        console.log("FIND USER", findUser);
        if (!findUser) {
          res.json(
            Response(constant.ERROR_CODE, constant.INVALID_LOGIN_DETAILS, null)
          );
        } else {
          console.log("Inelse");
          console.log("InselsePass", req.body.password);
          findUser.comparePassword(req.body.password, async function(
            err,
            isMatch
          ) {
            if (err) {
              console.log("Inerror", err);
              return res.json(
                Response(
                  constant.ERROR_CODE,
                  constant.INVALID_LOGIN_DETAILS,
                  null
                )
              );
            } else if (isMatch) {
              console.log("InMatch");

              let params = {
                _id: findUser._id
              };
              let token = jwt.sign(params, "saloncrm", { expiresIn: "1h" });

              delete findUser["password"];
              console.log("here", findUser);

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
              console.log("InFinalElse");
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
      console.log(error);
      return res.json(
        Response(constant.ERROR_CODE, constant.INVALID_LOGIN_DETAILS, error)
      );
    }
  }
  login().then(function(data) {});
}

function updateUser(req, res) {

 // console.log("InUpdate USer",req);
  console.log("InUpdate USer CHeck",req.files);

  async function updateUser() {
    var image_path;
    try {
      let updatedUserData={}
      if (req.body && req.body._id) {
        let condition = { _id: req.body._id, isDeleted: false, isActive: true };

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
              path = constant.PROFILEIMAGE + timeStamp + "_" + imgOriginalName;
              db_path = webUrl + timeStamp + "_" + imgOriginalName;

            }
            if (db_path) {
              //image_path= db_path;
              image_path = db_path;
              console.log("CHHHHHHHHHHHHHH",updatedUserData)
            }
            if (path != '') {
              let extensionArray = ["jpg", "jpeg", "png", "jfif"];
              let format = extension[extension.length - 1];
              if (extensionArray.includes(format)) {
                  let result = await commonQuery.fileUpload(path, (req.files.profilepic.data)).then( async data=>{
                   console.log('dtatatatatat 464',data)
                    if(data.status){
                       updatedUserData = {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        address: req.body.address,
                        profilepic:image_path
                        
                      };
                      console.log("updatedUserDataImage",updatedUserData);
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
                        console.log("updatedUser", userUpdated);
                        //delete userUpdated.password;
                        res.json(
                          Response(constant.SUCCESS_CODE, constant.USER_UPDATED, userUpdated)
                        );
                      }
                    }else{
                      console.log("updatedUser nottttttttttttttttt", );

                    }
                  });
                  console.log("ImageKaResult",result);
              }
              else {
                  return res.json(Response(constant.ERROR_CODE, constant.FILE_UNSUPPORTED));
              }
          } 


          }
        });


     
      } else {
        res.json(
          Response(constant.SUCCESS_CODE, constant.REQURIED_FIELDS_NOT, null)
        );
      }
    } catch (error) {}
  }
  updateUser().then(function() {});
}

function forgotPassword() {
  async function forgotPassword() {}
  forgotPassword().then(function(data) {});
}

function logoutUser(req, res) {
  console.log(req.body);
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
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.USER_LOGGED_OUT,
              updateDeviceTokenData
            )
          );
        }
      }
    } catch (error) {}
  }
  logoutUser().then(function(data) {});
}
