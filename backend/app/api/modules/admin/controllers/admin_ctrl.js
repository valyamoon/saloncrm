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
  addCategories: addCategories
};

function addAdmin() {}

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
