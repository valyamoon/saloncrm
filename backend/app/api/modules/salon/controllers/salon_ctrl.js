"use strict";

const mongoose = require("mongoose");
const utility = require("../../../../lib/utility.js");

const jwt = require("jsonwebtoken");

const constant = require("../../../../config/constant.js");
const users = mongoose.model("users");
const roles = require("../../user/model/rolesSchema");
const salon = require("../model/salonSchema");
const Response = require("../../../../lib/response_handler.js");
const validator = require("../../../../config/validator.js");
const Config = require("../../../../config/config").get(
  process.env.NODE_ENV || "local"
);
const commonQuery = require("../../../../lib/commonQuery.js");

module.exports = {
  saveSalonDetails: saveSalonDetails,
  getSalons: getSalons
};

function saveSalonDetails(req, res) {
  console.log(req.body);

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
          console.log(long);
          let lat = req.body.lat;
          console.log(lat);
          locations = [long, lat];
         
          let salonData = new salon({
            name: req.body.name,
            location: locations,
            contact: req.body.contact,
            address: req.body.address,
            user_id: req.body.user_id,
            image: req.body.image
          });
          

          let saveSalon = await commonQuery.InsertIntoCollection(
            salon,
            salonData
          );
          console.log("saveSalon", saveSalon);

          if (!saveSalon) {
            console.log("NAHI AAYA");
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
  //console.log("InREQUEST", req.query);
  let pageSize = +req.query.pageSize || +req.body.pageSize;
  let currentPage = +req.query.page || req.body.page;
  
  console.log(req.body);
  async function getSalons() {
  

    try {
      if (req.body && req.body.lat && req.body.long) {


        


      //  { $or:[ {'_id':objId}, {'name':param}, {'nickname':param} ]}
        let conditon = {
          location: {
            $geoWithin: {
              $centerSphere: [[req.body.long, req.body.lat], 500 / 3963.2]
            }
          },
          name:new RegExp(req.body.name, 'gi')
        }
        let salonLists = await commonQuery.fetch_all_paginated(
          salon,
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
       
        let conditon = { name: req.body.name };
        let salonList = await commonQuery.fetch_all_paginated(
          salon,
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
      } else {
        let conditon = {};
        let salonLists = await commonQuery.fetch_all_paginated(
          salon,
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
