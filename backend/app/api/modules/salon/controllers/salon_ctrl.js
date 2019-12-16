"use strict";

const mongoose = require("mongoose");
const utility = require("../../../../lib/utility.js");

const jwt = require("jsonwebtoken");

const constant = require("../../../../config/constant.js");
const users = mongoose.model("users");
const roles = require("../../user/model/rolesSchema");
const salons = require("../model/salonSchema");
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
  getReviewsAndRatingsList: getReviewsAndRatingsList
};

function saveSalonDetails(req, res) {
  async function saveSalonDetails() {
    try {
      if (req.body && req.body.user_id) {
        let conditon = {
          _id: req.body.user_id,
          isActive: true,
          isDeleted: false
        };
        let checkUser = await commonQuery.findoneData(users, conditon);

        if (!checkUser) {
        } else {
          let locations = {};
          let long = req.body.long;

          let lat = req.body.lat;

          locations = [long, lat];

          let salonData = new salons({
            name: req.body.name,
            location: locations,
            contact: req.body.contact,
            address: req.body.address,
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
                constant.NEW_USER_SAVE_SUCCESS,
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

function getSalons(req, res) {
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  let distanceToCover;

  distanceToCover = req.body.distance ? req.body.distance : 500;

  async function getSalons() {
    try {
      if (req.body && req.body.lat && req.body.long) {
        //  { $or:[ {'_id':objId}, {'name':param}, {'nickname':param} ]}
        let conditon = {
          location: {
            $geoWithin: {
              $centerSphere: [
                [req.body.long, req.body.lat],
                distanceToCover / 3963.2
              ]
            }
          },
          name: new RegExp(req.body.name, "gi"),
          isActive:true,
          isDeleted:false
        };
        let salonLists = await commonQuery.fetch_all_paginated(
          salons,
          conditon,
          pageSize,
          currentPage
        );

        if (!salonLists) {
          res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
          );
        } else {
          res.json(
            Response(constant.SUCCESS_CODE, constant.SALONS_FOUND, salonLists)
          );
        }
      } else if (req.body.name) {
        let conditon = { name: req.body.name,isActive:true,isDeleted:false };
        let salonList = await commonQuery.fetch_all_paginated(
          salons,
          conditon,
          pageSize,
          currentPage
        );

        if (!salonList) {
          res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
          );
        } else {
          res.json(
            Response(constant.SUCCESS_CODE, constant.SALONS_FOUND, salonList)
          );
        }
      } else if (req.body.gtp && req.body.ltp) {
        let conditon = { price: { $gte: +req.body.gtp, $lt: +req.body.ltp },isActive:true,isDeleted:false };

        let priceRangeSalons = await commonQuery.fetch_all_paginated_price(
          services,
          conditon,
          pageSize,
          currentPage
        );

        if (!priceRangeSalons) {
          res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_USERS,
              priceRangeSalons
            )
          );
        }
      } else {
        let conditon = {isDeleted:false,isActive:true};
        let salonLists = await commonQuery.fetch_all_paginated(
          salons,
          conditon,
          pageSize,
          currentPage
        );

        if (salonLists) {
          res.json(
            Response(constant.SUCCESS_CODE, constant.SALONS_FOUND, salonLists)
          );
        } else {
          res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
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

function addServices(req, res) {
  async function addServices() {
    try {
      if (req.body.salon_id) {
        let newService = new services({
          name: req.body.name,
          category_id: req.body.category_id,
          salon_id: req.body.salon_id,
          price: req.body.price,
          duration: req.body.duration
        });
        let serviceAdded = await commonQuery.InsertIntoCollection(
          services,
          newService
        );
        if (!serviceAdded) {
          return res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.ADDED_SUCCESS,
              serviceAdded
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

  addServices().then(function() {});
}

function getSalonDetails(req, res) {
  async function getSalonDetails() {
    try {
      if (req.body && req.body.salon_id) {
        let conditon = { _id: mongoose.Types.ObjectId(req.body.salon_id),isActive:true,isDeleted:false };

        let salonDetails = await commonQuery.salonDetailsFetch(
          salons,
          "reviewratings",
          "_id",
          "salon_id",
          conditon
        );
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

function getReviewsAndRatingsList(req, res) {
  async function getReviewsAndRatingsList() {
    try {
      if (req.body.salon_id) {
        let pageSize = +req.body.pageSize;
        let page = +req.body.page;

        let conditon = { salon_id: mongoose.Types.ObjectId(req.body.salon_id),isActive:true,isDeleted:false };

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

