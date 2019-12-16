"use strict";

const mongoose = require("mongoose");
const utility = require("../../../../lib/utility.js");

const jwt = require("jsonwebtoken");

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
  suspendSalon: suspendSalon
};

function addCategories(req, res) {
  async function addCategories() {
    try {
      if (req.body.salon_id) {
        let newCategory = new categories({
          catname: req.body.catname,
          salon_id: req.body.salon_id
        });

        let addCategory = await commonQuery.InsertIntoCollection(
          categories,
          newCategory
        );

        if (!addCategory) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
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
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.SALON_REQUEST_ACCEPTED,
              acceptSalonRequest
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

  acceptSalonRequest().then(function() {});
}

function suspendSalon(req, res) {
  console.log("sssssssssssssss",req.body);
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
        console.log("-=------",suspendedSalon);

        if (!suspendedSalon) {
          res.json(
            Response(constant.ERROR_CODE, constant.USER_NOT_FOUND, null)
          );
        } else {
          let user_id = suspendedSalon.user_id;
          console.log("----------",user_id);
          let activeCondition = {
            isActive: false
          };
          let condition = { _id: mongoose.Types.ObjectId(user_id) };
          let deactivateLogin = await commonQuery.updateOneDocument(
            users,
            condition,
            activeCondition
          );

          console.log("------------------",deactivateLogin);

          if (!deactivateLogin) {
            res.json(
              Response(constant.ERROR_CODE, constant.USER_NOT_FOUND, null)
            );
          } else {
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
