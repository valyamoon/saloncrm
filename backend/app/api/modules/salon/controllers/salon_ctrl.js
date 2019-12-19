"use strict";

const mongoose = require("mongoose");
const utility = require("../../../../lib/utility.js");

const jwt = require("jsonwebtoken");

const constant = require("../../../../config/constant.js");
const users = mongoose.model("users");
const roles = require("../../user/model/rolesSchema");
const salons = require("../model/salonSchema");
const promocodes = require("../model/promocodeSchema");
const categories = require("../../admin/model/categoriesSchema");
const reviewratings = require("../model/salonreviewsratingSchema");
const services = require("../model/servicesSchema");
const Response = require("../../../../lib/response_handler.js");
const validator = require("../../../../config/validator.js");
const Config = require("../../../../config/config").get(
  process.env.NODE_ENV || "local"
);
const commonQuery = require("../../../../lib/commonQuery.js");

module.exports = {
  saveSalonDetails: saveSalonDetails,
  getSalons: getSalons,
  addServices: addServices,
  getSalonDetails: getSalonDetails,
  getReviewsAndRatingsList: getReviewsAndRatingsList,
  addPromocodes: addPromocodes,
  getPromoCodes: getPromoCodes
};

/**
 * Function is use to Save salon Data
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function saveSalonDetails(req, res) {
  async function saveSalonDetails() {
    try {
      if (req.body && req.body.user_id) {
        let conditon = {
          _id: req.body.user_id,
          isActive: false,
          isDeleted: false
        };

        let checkUser = await commonQuery.findoneData(users, conditon);

        if (!checkUser) {
        } else {
          let coordinates = [req.body.lat, req.body.long];

          let locations = {
            type: "Point",
            coordinates: coordinates
          };

          let salonData = new salons({
            name: req.body.name,
            location: locations,
            contact: req.body.contact,
            salonaddress: req.body.salonaddress,
            user_id: req.body.user_id,
            image: req.body.image
          });

          let saveSalon = await commonQuery.InsertIntoCollection(
            salons,
            salonData
          );

          if (!saveSalon) {
          } else {
            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.NEW_DATA_ADDED,
                saveSalon
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

  saveSalonDetails().then(function(data) {});
}
/**
 * Function is use to Fetch salon Data
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function getSalons(req, res) {
  async function getSalons() {
    try {
      if (req.body && req.body.categoryid) {
        let lat = +req.body.lat;
        let long = +req.body.long;
        let name = req.body.name;
        let pageSize = +req.body.pageSize;
        let page = +req.body.page;
        let distanceToCover = req.body.distance;
        let condition = {
          category_id: mongoose.Types.ObjectId(req.body.categoryid)
        };

        let salonList = await commonQuery.fetch_all_salons(
          services,
          condition,
          pageSize,
          page,
          lat,
          long,
          "salons",
          "salon_id",
          "_id",
          "reviewratings",
          "_id",
          "salon_id",
          distanceToCover,
          name
        );

        if (!salonList) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              salonList
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
  getSalons().then(function() {});
}
/**
 * Function is use to Fetch salon Details
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function getSalonDetails(req, res) {
  console.log("sssss", req.body);
  async function getSalonDetails() {
    try {
      if (req.body && req.body.salon_id) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body.salon_id),
          isActive: true,
          isDeleted: false
        };
        console.log("cpm", condition);
        let salonDetails = await commonQuery.salonDetailsFetch(
          salons,
          "reviewratings",
          "_id",
          "salon_id",
          condition
        );
        console.log(salonDetails);
        if (!salonDetails) {
          res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              salonDetails
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

  getSalonDetails().then(function() {});
}
/**
 * Function is use to Fetch Reviews and ratings of salon
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function getReviewsAndRatingsList(req, res) {
  async function getReviewsAndRatingsList() {
    try {
      if (req.body.salon_id) {
        let pageSize = +req.body.pageSize;
        let page = +req.body.page;

        let conditon = {
          salon_id: mongoose.Types.ObjectId(req.body.salon_id),
          isActive: true,
          isDeleted: false
        };

        let reviewratingsList = await commonQuery.findAll(
          reviewratings,
          conditon,
          pageSize,
          page
        );

        if (!reviewratingsList) {
          res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              reviewratingsList
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

  getReviewsAndRatingsList().then(function() {});
}
/**
 * Function is use to Add services with respect to salon
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function addServices(req, res) {
  console.log(req.body);

  async function addServices() {
    try {
      if (req.body && req.body.categoryid) {
        let newService = new services({
          name: req.body.name,
          price: req.body.price,
          duration: req.body.duration,
          category_id: req.body.categoryid,
          salon_id: req.body.salonid,
          logo: req.body.logo
        });

        let addService = await commonQuery.InsertIntoCollection(
          services,
          newService
        );

        if (!addService) {
          res.json(Response(constant.ERROR_CODE, constant.FAILED_TO_ADD, null));
        } else {
          res.json(
            Response(constant.SUCCESS_CODE, constant.ADDED_SUCCESS, addService)
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
 * Function is use to Add Promocodes or Discount
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function addPromocodes(req, res) {
  console.log("inpromo", req.body);
  async function addPromocodes() {
    try {
      if (req.body && req.body.name) {
        let newPromoCode = new promocodes({
          name: req.body.name,
          value: req.body.value,
          description: req.body.description,
          salon_id: req.body.salon_id
        });
        let addPromo = await commonQuery.InsertIntoCollection(
          promocodes,
          newPromoCode
        );
        if (!addPromo) {
          res.json(Response(constant.ERROR_CODE, constant.FAILED_TO_ADD, null));
        } else {
          res.json(
            Response(constant.SUCCESS_CODE, constant.ADDED_SUCCESS, addPromo)
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  addPromocodes().then(function() {});
}
/**
 * Function is use to Fetch promocode with respect to salon
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function getPromoCodes(req, res) {
  async function getPromoCodes() {
    try {
      if (req.body && req.body.salon_id) {
        let conditon = { salon_id: mongoose.Types.ObjectId(req.body.salon_id) };

        let fetchPromoCodes = await commonQuery.findAll(promocodes, conditon);
        if (!fetchPromoCodes) {
          res.json(Response(constant.ERROR_CODE, constant.FAILED_TO_ADD, null));
        } else {
          // fetchPromoCodes.forEach(function(v){ delete v.salon_id; delete v.usedbyusers; ret });

          fetchPromoCodes.forEach(function(v) {
            console.log("v", v);
            v.salon_id = undefined;
            v.usedbyusers = undefined;
          });

          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              fetchPromoCodes
            )
          );
        }
      }
    } catch (error) {}
  }
  getPromoCodes().then(function() {});
}
