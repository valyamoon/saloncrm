"use strict";

const mongoose = require("mongoose");
const utility = require("../../../../lib/utility.js");

const jwt = require("jsonwebtoken");

const constant = require("../../../../config/constant.js");

const users = mongoose.model("users");
const roles = require("../../user/model/rolesSchema");
const salons = require("../model/salonSchema");
const promocodes = require("../model/promocodeSchema");
const employees = require("../model/employeeSchema");
const categories = require("../../admin/model/categoriesSchema");
const salonservices = require("../model/salonservicesSchema");
const reviewratings = require("../model/salonreviewsratingSchema");
const services = require("../../admin/model/servicesSchema");
const Response = require("../../../../lib/response_handler.js");
const validator = require("../../../../config/validator.js");
const Config = require("../../../../config/config").get(
  process.env.NODE_ENV || "local"
);
const commonQuery = require("../../../../lib/commonQuery.js");

module.exports = {
  saveSalonDetails: saveSalonDetails,
  getSalons: getSalons,
  addSalonServices: addSalonServices,
  getSalonDetails: getSalonDetails,
  getReviewsAndRatingsList: getReviewsAndRatingsList,
  addPromocodes: addPromocodes,
  getPromoCodes: getPromoCodes,
  getSalonServices: getSalonServices,
  addEmployeeToSalon: addEmployeeToSalon,
  addServicesToEmployee: addServicesToEmployee,
  removeServiceToEmployee: removeServiceToEmployee
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
            image: req.body.image,
            opentime: +req.body.opentime,
            closetime: +req.body.closetime,
            isActive: false,
            isDeleted: false,
            isreviewadded: false,
            isservicesadded: false
          });

          let saveSalon = await commonQuery.InsertIntoCollection(
            salons,
            salonData
          );

          if (!saveSalon) {
          } else {
            // saveSalon.forEach(function(v) {
            //   v.isActive = undefined;
            //   v.saveSalon = undefined;
            //   v.isservicesadded = undefined;
            //   v.isreviewadded = undefined;
            // });

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
// function getSalons(req, res) {
//   console.log("hddjdjd",req.body)
//   async function getSalons() {
//     try {
//       if (req.body && req.body.category_id) {
//         let lat = +req.body.lat;
//         let long = +req.body.long;
//         let name = req.body.name;
//         let pageSize = +req.body.pageSize || +req.body.pageSize ? req.body.pageSize : +10;
//         let page = +req.body.page || +req.body.page ? req.body.page : +1;
//         let distanceToCover = req.body.distance;
//         let condition = {
//           category_id: mongoose.Types.ObjectId(req.body.category_id)
//         };

//         console.log(lat,long,name,pageSize,page,condition);

//         let salonList = await commonQuery.fetch_all_salons(
//           services,
//           condition,
//           pageSize,
//           page,
//           lat,
//           long,
//           "salons",
//           "salon_id",
//           "_id",
//           "reviewratings",
//           "salon_id",
//           "salon_id",
//           distanceToCover,
//           name
//         );

//         if (!salonList) {
//           res.json(
//             Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
//           );
//         } else {
//           res.json(
//             Response(
//               constant.SUCCESS_CODE,
//               constant.FETCHED_ALL_DATA,
//               salonList
//             )
//           );
//         }
//       }
//     } catch (error) {
//       return res.json(
//         Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
//       );
//     }
//   }
//   getSalons().then(function() {});
// }

function getSalons(req, res) {
  console.log(req.body);

  async function getSalons() {
    try {
      console.log("HIiiii");
      if (req.body && req.body.services_id) {
        let lat = +req.body.lat;
        let long = +req.body.long;
        let name = req.body.name;
        let pageSize =
          +req.body.pageSize || +req.body.pageSize ? req.body.pageSize : +10;
        let page = +req.body.page || +req.body.page ? req.body.page : +1;
        let distanceToCover = req.body.distance;
        let dynamicQuery = req.body.services_id;
        console.log("sssssss",dynamicQuery);
        console.log("sssxxx",lat,long,name)
  

        let salonList = await commonQuery.fetch_near_salons(salons,pageSize,page,dynamicQuery,distanceToCover,lat,long);
        if (!salonList) {
        } else {
          console.log(salonList);
          res.json({data:salonList})
        }
      }
    } catch (error) {}
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
        //console.log("cpm", condition);
        let salonDetails = await commonQuery.salonDetailsFetch(
          salons,
          "reviewratings",
          "_id",
          "salon_id",
          condition,
          "reviewratings",
          "services",
          "categories"
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
  console.log(req.body);
  async function getReviewsAndRatingsList() {
    try {
      if (req.body.salon_id) {
        let pageSize =
          +req.body.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
        let page = +req.body.page || +req.body.page ? req.body.page : 1;

        let conditon = {
          salon_id: req.body.salon_id
        };

        let reviewratingsList = await commonQuery.fetch_ReviewRatings(
          reviewratings,
          conditon,
          pageSize,
          page
        );

        console.log(reviewratingsList);

        if (!reviewratingsList) {
          res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
          );
        } else {
          console.log(reviewratingsList);

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
function addSalonServices(req, res) {
  console.log(req.body);

  async function addSalonServices() {
    try {
      if (req.body.salon_id && req.body) {
        let newsalonService = new salonservices({
          price: req.body.price,
          duration: req.body.duration,
          salon_id: req.body.salon_id,
          service_id: req.body.service_id
        });

        let saveServiceToSalon = await commonQuery.InsertIntoCollection(
          salonservices,
          newsalonService
        );

        if (!saveServiceToSalon) {
          res.json(
            Response(constant.ERROR_CODE, constant.DATA_NOT_FOUND, null)
          );
        } else {
          let condition = { _id: req.body.salon_id };

          let updateCondition = { isservicesadded: true };

          let updateSalonData = await commonQuery.updateOneDocument(
            salons,
            condition,
            updateCondition
          );
          if (!updateSalonData) {
          } else {
            console.log("salondataupdated");
          }

          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.ADDED_SUCCESS,
              saveServiceToSalon
            )
          );
        }
      }
    } catch (error) {}
  }

  addSalonServices().then(function() {});
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

function getSalonServices(req, res) {
  console.log(req.body);
  async function getSalonServices() {
    try {
      if (req.body && req.body.salon_id) {
        let condition = { _id: mongoose.Types.ObjectId(req.body.salon_id) };
        let getsalonservice = await commonQuery.fetch_salon_services(
          salons,
          condition
        );
        if (!getsalonservice) {
        } else {
          console.log(getsalonservice);
          res.json({ data: getsalonservice });
        }
      }
    } catch (error) {}
  }

  getSalonServices().then(function() {});
}

function addEmployeeToSalon(req, res) {
  console.log(req.body);
  async function addEmployeeToSalon() {
    try {
      if (req.body.salon_id && req.body) {
        let newEmployee = new employees({
          name: req.body.name,
          salon_id: req.body.salon_id
        });

        let saveEmployee = await commonQuery.InsertIntoCollection(
          employees,
          newEmployee
        );
        console.log("saveEMployee", saveEmployee);
        if (!saveEmployee) {
          res.json({ error: "ERROR" });
        } else {
          let salonUpdate = await commonQuery.addEmployeeToSalon(
            salons,
            req.body.salon_id,
            saveEmployee._id
          );

          if (!salonUpdate) {
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error);
          } else {
          }

          res.json({ data: saveEmployee });
        }

        console.log(newEmployee);
      }
    } catch (error) {}
  }
  addEmployeeToSalon().then(function() {});
}

function addServicesToEmployee(req, res) {
  console.log(req.body);
  async function addServicesToEmployee() {
    try {
      if (req.body.employee_id && req.body) {
        let tempSev = [];
        req.body.salonservices_id.forEach(function(v) {
          tempSev.push(mongoose.Types.ObjectId(v));
        });

        let empId = req.body.employee_id;

        let addEmpService = await commonQuery.addServiceToEmployee(
          employees,
          empId,
          tempSev
        );

        if (!addEmpService) {
        } else {
          res.json({ data: addEmpService });
          console.log(addEmpService);
        }
      }
    } catch (error) {}
  }

  addServicesToEmployee().then(function() {});
}

function removeServiceToEmployee(req, res) {
  console.log(req.body);
  async function removeServiceToEmployee() {
    try {
      if (req.body.employee_id && req.body) {
        // let tempSev = [];
        // req.body.salonservices_id.forEach(function(v) {
        //   tempSev.push(mongoose.Types.ObjectId(v));
        // });

        let empId = req.body.employee_id;

        let addEmpService = await commonQuery.removeServiceToEmp(
          employees,
          empId,
          mongoose.Types.ObjectId(req.body.salonservices_id)
        );

        if (!addEmpService) {
        } else {
          res.json({ data: addEmpService });
          console.log(addEmpService);
        }
      }
    } catch (error) {}
  }

  removeServiceToEmployee().then(function() {});
}
