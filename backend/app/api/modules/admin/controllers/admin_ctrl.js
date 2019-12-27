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
const services = require("../model/servicesSchema");
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
  getCategories: getCategories,
  addServices: addServices,
  removeServices: removeServices
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
        let condition = {
          isActive: false,
          isDeleted: false
        };

        let listOfSalons = await commonQuery.fetch_all_paginated(
          salons,
          condition,
          pageSize,
          currentPage
        );
        if (!listOfSalons) {
          return res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, error)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              listOfSalons
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
          let condition = {
            _id: mongoose.Types.ObjectId(user_id)
          };
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
          let condition = {
            _id: mongoose.Types.ObjectId(user_id)
          };
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
  console.log("--", req.body);
  async function getCategories() {
    try {
      if (req.body.type === "categories") {
        let categoriesList = await commonQuery.fetch_categories(
          categories,
          "services",
          "services",
          "_id"
        );
        if (!categoriesList) {
          res.json(
            Response(constant.ERROR_CODE, constant.DATA_NOT_FOUND, null)
          );
        } else {
          categoriesList.forEach(function(v) {
            v.services.forEach(function(v) {
              delete v.isActive;
              delete v.isDeleted;
            });
          });

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
  getCategories().then(function() {
    return res.json(
      Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
    );
  });
}

/**
 * Function is use to Add services in categories
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function addServices(req, res) {
  async function addServices() {
    try {
      if (req.body && req.body.category_id) {
        let newService = new services({
          name: req.body.name,
          category_id: req.body.category_id,
          logo: req.body.logo,
          description: req.body.description
        });

        let saveService = await commonQuery.InsertIntoCollection(
          services,
          newService
        );
        if (!saveService) {
        } else {
          let categoryUpdate = await commonQuery.addServicesInCategories(
            categories,
            req.body.category_id,
            saveService._id
          );

          if (!categoryUpdate) {
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error);
          } else {
          }

          res.json(
            Response(constant.SUCCESS_CODE, constant.ADDED_SUCCESS, saveService)
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  addServices().then(function() {});
}

/**
 * Function is use to Remove services in categories and soft delete
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function removeServices(req, res) {
  async function removeServices() {
    try {
      if (req.body && req.body.service_id) {
        let condition = { _id: req.body.service_id };

        let removeCondition = { isActive: false, isDeleted: true };

        let removeService = await commonQuery.updateOneDocument(
          services,
          condition,
          removeCondition
        );

        if (!removeService) {
          Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error);
        } else {
          let categoryUpdate = await commonQuery.removeServicesInCategories(
            categories,
            removeService.category_id,
            req.body.service_id
          );

          if (!categoryUpdate) {
          } else {
            console.log(categoryUpdate);
          }

          res.json(
            Response(
              constant.ERROR_CODE,
              constant.DELETED_SUCCESS,
              removeService
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

  removeServices().then(function() {});
}