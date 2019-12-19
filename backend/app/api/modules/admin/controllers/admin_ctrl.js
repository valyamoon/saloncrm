"use strict";

const mongoose = require("mongoose");
const utility = require("../../../../lib/utility.js");
const messageTemplates = require("../../../../lib/messagetemplates");

const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const mailer = require("../../../../lib/mailer");

const constant = require("../../../../config/constant.js");
const users = mongoose.model("users");
const roles = require("../../user/model/rolesSchema");
const salons = require("../../salon/model/salonSchema");
const categories = require("../../admin/model/categoriesSchema");
const reviewratings = require("../../salon/model/salonreviewsratingSchema");
const services = require("../../salon/model/servicesSchema");
const Response = require("../../../../lib/response_handler.js");
const validator = require("../../../../config/validator.js");
const Config = require("../../../../config/config").get(
  process.env.NODE_ENV || "local"
);
const commonQuery = require("../../../../lib/commonQuery.js");

module.exports = {
  addCategories: addCategories,
  getSalonsRequestList: getSalonsRequestList,
  acceptSalonRequest: acceptSalonRequest,
  suspendSalon: suspendSalon,
  getCategories: getCategories
};

/**
 * Function is use to Add categories
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function addCategories(req, res) {
  async function addCategories() {
    try {
      if (req.body.catname) {
        let newCategory = new categories({
          catname: req.body.catname
        });

        let addCategory = await commonQuery.InsertIntoCollection(
          categories,
          newCategory
        );

        if (!addCategory) {
          return res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_ADD, error)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.CATEGORIES_ADDED,
              addCategory
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
  addCategories().then(function() {});
}
/**
 * Function is use to get salon list which need to be approved by Admin
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function getSalonsRequestList(req, res) {
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  async function getSalonsRequestList() {
    try {
      if (req.body) {
        let condition = { isActive: false, isDeleted: false };

        let listOfSalons = await commonQuery.fetch_all_paginated(
          salons,
          condition,
          pageSize,
          currentPage
        );
        if (!listOfSalons) {
          res.json({ msg: "error" });
        } else {
          res.json({ data: listOfSalons });
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  getSalonsRequestList().then(function() {});
}

/**
 * Function is use to Accept salon request
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function acceptSalonRequest(req, res) {
  async function acceptSalonRequest() {
    try {
      if (req.body.salonid) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body.salonid),
          isActive: false
        };
        let activeCondition = {
          isActive: true
        };

        let acceptSalonRequest = await commonQuery.updateOneDocument(
          salons,
          condition,
          activeCondition
        );

        if (!acceptSalonRequest) {
          res.json(
            Response(constant.ERROR_CODE, constant.USER_NOT_FOUND, null)
          );
        } else {
          let user_id = acceptSalonRequest.user_id;

          let activeCondition = {
            isActive: true
          };
          let condition = { _id: mongoose.Types.ObjectId(user_id) };
          let activeSalonLogin = await commonQuery.updateOneDocument(
            users,
            condition,
            activeCondition
          );
          if (!activeSalonLogin) {
            res.json(
              Response(constant.ERROR_CODE, constant.USER_NOT_FOUND, null)
            );
          } else {
            let messagetTemplate = {
              subject: messageTemplates.acceptSalonRequest["subject"],
              message: messageTemplates.acceptSalonRequest["message"]
            };

            let sendEmailConfirmation = await mailer.sendMail(
              activeSalonLogin.email,
              messagetTemplate
            );

            if (!sendEmailConfirmation) {
            } else {
            }
            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.SALON_REQUEST_ACCEPTED,
                acceptSalonRequest
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

  acceptSalonRequest().then(function() {});
}
/**
 * Function is use to suspend Salon on subsription expiry
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function suspendSalon(req, res) {
  async function suspendSalon() {
    try {
      if (req.body.salonid) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body.salonid),
          isActive: true
        };
        let activeCondition = {
          isActive: false
        };

        let suspendedSalon = await commonQuery.updateOneDocument(
          salons,
          condition,
          activeCondition
        );

        if (!suspendedSalon) {
          res.json(
            Response(constant.ERROR_CODE, constant.USER_NOT_FOUND, null)
          );
        } else {
          let user_id = suspendedSalon.user_id;

          let activeCondition = {
            isActive: false
          };
          let condition = { _id: mongoose.Types.ObjectId(user_id) };
          let deactivateLogin = await commonQuery.updateOneDocument(
            users,
            condition,
            activeCondition
          );

          if (!deactivateLogin) {
            res.json(
              Response(constant.ERROR_CODE, constant.USER_NOT_FOUND, null)
            );
          } else {
            let messagetTemplate = {
              subject: messageTemplates.accountSuspended["subject"],
              message: messageTemplates.accountSuspended["message"]
            };

            let sendEmailConfirmation = await mailer.sendMail(
              deactivateLogin.email,
              messagetTemplate
            );

            if (!sendEmailConfirmation) {
            } else {
            }

            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.SALON_SUSPENDED,
                suspendedSalon
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

  suspendSalon().then(function() {});
}

/**
 * Function is use to Fetch list of categories
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function getCategories(req, res) {
  async function getCategories() {
    try {
      if (req.body.type === "categories") {
        let categoriesList = await commonQuery.fetch_all(categories);
        if (!categoriesList) {
          res.json(
            Response(
              constant.ERROR_CODE,
              constant.DATA_NOT_FOUND,
              categoriesList
            )
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              categoriesList
            )
          );
        }
      }
    } catch (error) {}
  }
  getCategories().then(function() {});
}
