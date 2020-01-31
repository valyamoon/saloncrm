"use strict";

const mongoose = require("mongoose");
const utility = require("../../../../lib/utility.js");
var ts = require("time-slots-generator");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const mkdirp = require("mkdirp");
//const webUrl = "http://172.10.230.180:4001/uploads/profileImages/";
const webUrl = "http://54.71.18.74:5977/uploads/profileImages/";

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
const salonweeklyslot = require("../model/salonweeklyslotSchema");
const Response = require("../../../../lib/response_handler.js");
const validator = require("../../../../config/validator.js");
const Config = require("../../../../config/config").get(
  process.env.NODE_ENV || "local"
);
const commonQuery = require("../../../../lib/commonQuery.js");
const util = require("../../../../lib/util");

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
  removeServiceToEmployee: removeServiceToEmployee,
  getCategoriesAndServicesOfSalon: getCategoriesAndServicesOfSalon,
  getRemovesalonservice: getRemovesalonservice,
  getSalonByUser: getSalonByUser,
  getSalonServiceList: getSalonServiceList,
  getEmployeeServiceList: getEmployeeServiceList,
  updateSalonServices: updateSalonServices,
  removeEmployee: removeEmployee,
  addSalonWeeklySlots: addSalonWeeklySlots,
  viewSalonDetails: viewSalonDetails,
  updateSalonDetails: updateSalonDetails,
  fetchSalonData: fetchSalonData,
  bookSlot: bookSlot,
  getSalonWeeklySlots: getSalonWeeklySlots,
  updateEmployee: updateEmployee

};

/**
 * Function is use to Save salon Data
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function saveSalonDetails(req, res) {
  // console.log("req.body", req.body); return;
  async function saveSalonDetails() {
    try {
      var image_path;
      if (req.body && req.body.user_id) {
        let conditon = {
          _id: req.body.user_id,
          isActive: false,
          isDeleted: false
        };

        let checkUser = await commonQuery.findoneData(users, conditon);

        if (!checkUser) {
        } else {
          var image_path;
          let coordinates = [req.body.long, req.body.lat];

          let locations = {
            type: "Point",
            coordinates: coordinates
          };
          if (req.files) {
            mkdirp(constant.PROFILEIMAGE, async function (err) {
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
                  extension = req.files.image["name"].split(".");
                  let imgOriginalName = req.files.image["name"];
                  path =
                    constant.PROFILEIMAGE + timeStamp + "_" + imgOriginalName;
                  // constant.directoryPath.SERVICEIMAGE
                  // return false;
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
                      .fileUpload(path, req.files.image["data"])
                      .then(async data => {
                        if (data.status) {
                          let salonData = new salons({
                            name: req.body.name,
                            location: locations,
                            contact: req.body.contact,
                            salonaddress: req.body.salonaddress,
                            user_id: req.body.user_id,
                            image: image_path,
                            opentime: req.body.opentime,
                            closetime: req.body.closetime,
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
                            let updateCondition = {
                              isSubmitted: true
                            };
                            let condition = {
                              _id: mongoose.Types.ObjectId(req.body.user_id)
                            };
                            let updateUser = await commonQuery.updateOneDocument(
                              users,
                              condition,
                              updateCondition
                            );
                            if (!updateUser) {
                            } else {
                              console.log(updateUser);
                            }

                            res.json(
                              Response(
                                constant.SUCCESS_CODE,
                                constant.NEW_DATA_ADDED,
                                saveSalon
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
          }
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  saveSalonDetails().then(function () { });
}
/**
 * Function is use to Fetch salon List(This is going to change as per new requirement)
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function getSalons(req, res) {
  async function getSalons() {
    try {
      var intervals;
      var endtime;
      var timeslots;
      var starttime;
      var startTiming;
      var endTiming;
      var salonListingNew = [];

      if (req.body && req.body.service_id) {
        let lat = +req.body.lat;
        let long = +req.body.long;
        let name = req.body.name;
        let service_id = mongoose.Types.ObjectId(req.body.service_id);
        let pageSize =
          +req.body.pageSize || +req.body.pageSize ? req.body.pageSize : +10;
        let page = +req.body.page || +req.body.page ? req.body.page : +1;

        let sortParam;
        if (req.body.sort === "price" && req.body.sortOrder === "asc") {
          sortParam = {
            "servicesSelected.price": 1
          };
        } else if (req.body.sort === "price" && req.body.sortOrder === "dsc") {
          sortParam = {
            "servicesSelected.price": -1
          };
        } else if (
          req.body.sort === "distance" &&
          req.body.sortOrder === "asc"
        ) {
          sortParam = {
            "dist.calculated": 1
          };
        } else if (req.body.sort === "price" && req.body.sortOrder === "dsc") {
          sortParam = {
            "dist.calculated": -1
          };
        } else {
          sortParam = {
            "servicesSelected.price": 1
          };
        }

        let salonList = await commonQuery.fetch_Salon_list_Near(
          salons,
          long,
          lat,
          service_id,
          pageSize,
          page,
          name,
          sortParam
        );
        if (!salonList) {
        } else {
          let slots = [];
          salonList.forEach(async function (c) {
            slots.push({
              salon: c.name,
              _id: c._id,
              optime: c.opentime,
              cltime: c.closetime,
              image: c.image,
              contact: c.contact,
              avgRatings: c.avgRatings,
              distance: c.distance,
              location: c.location,
              address: c.address,
              servicename: c.service["servicename"],
              services: c.service,
              duration: c.service["duration"]
            });
          });

          slots.forEach(function (v) {
            let todaysDate = new Date();

            let comingDate = req.body.date;
            todaysDate = moment(todaysDate).format("DD:MM:YYYY");
            comingDate = moment(comingDate).format("DD:MM:YYYY");

            if (todaysDate === comingDate) {
              let currentTime = new Date();
              if (currentTime === v.cltime) {
                times_ara = [];
              }
              //  console.log("CT", moment(currentTime).format("HH:mm"));
              starttime = currentTime;
            } else {
              starttime = v.optime;
            }

            var difference = v.cltime - v.optime;
            var minutes = difference * 60;
            var slots = minutes / v.duration;

            intervals = v.duration;
            endtime = v.cltime;
            timeslots = [starttime];

            startTiming = moment(starttime).format("HH:mm");
            endTiming = moment(endtime).format("HH:mm");

            function parseTime(s) {
              var c = s.split(":");
              return parseInt(c[0]) * 60 + parseInt(c[1]);
            }

            function convertHours(mins) {
              var hour = Math.floor(mins / 60);
              var mins = mins % 60;
              var converted = pad(hour, 2) + ":" + pad(mins, 2);
              return converted;
            }

            function pad(str, max) {
              str = str.toString();
              return str.length < max ? pad("0" + str, max) : str;
            }

            function calculate_time_slot(start_time, end_time, interval) {
              var i, formatted_time;
              var time_slots = new Array();
              for (var i = start_time; i <= end_time; i = i + interval) {
                formatted_time = convertHours(i);
                time_slots.push(formatted_time);
              }
              return time_slots;
            }

            let stime = startTiming.toString();
            let etime = endTiming.toString();

            var startTime = stime;

            var endTime = etime;

            var start_time = parseTime(startTime);
            var end_time = parseTime(endTime);
            var interval = parseInt(intervals);

            var times_ara = calculate_time_slot(start_time, end_time, interval);

            salonListingNew.push({
              starttime: v.optime,
              _id: v._id,
              closetime: v.cltime,
              name: v.salon,
              slots: times_ara,
              image: v.image,
              contact: v.contact,
              avgRatings: v.avgRatings,
              distance: v.distance,
              location: v.location,
              address: v.address,
              servicename: v.servicename,
              service: v.services
            });
          });

          return res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              //salonList
              salonListingNew
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

  getSalons().then(function () { });
}

/**
 * Function is use to Fetch salon Details
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function getSalonDetails(req, res) {
  async function getSalonDetails() {
    try {
      if (req.body && req.body.salon_id) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body.salon_id),
          isActive: true,
          isDeleted: false
        };

        let salonDetails = await commonQuery.getSalonDetailsQuery(
          salons,
          condition
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

    }
    catch (error) {
      res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }

  }
  getSalonDetails().then(function () { });
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
      if (req.body.salon_id && req.body) {
        let pageSize =
          +req.body.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
        let page = +req.body.page || +req.body.page ? req.body.page : 1;

        let conditon = {
          salon_id: mongoose.Types.ObjectId(req.body.salon_id)
        };

        let reviewratingsList = await commonQuery.fetch_ReviewRatings(
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

  getReviewsAndRatingsList().then(function () { });
}
/**
 * Function is use to Add services with respect to salon
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function addSalonServices(req, res) {
  async function addSalonServices() {
    try {
      let serviceName;
      let categoryName;
      if (req.body.salon_id && req.body) {
        let servCondition = {
          _id: mongoose.Types.ObjectId(req.body.service_id)
        };
        let isserviceName = await commonQuery.findoneData(
          services,
          servCondition
        );

        if (!isserviceName) {
          res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
          );
        } else {
          serviceName = isserviceName.name;
        }

        let catCondition = {
          _id: mongoose.Types.ObjectId(req.body.category_id)
        };
        let iscategorynname = await commonQuery.findoneData(
          categories,
          catCondition
        );

        if (!iscategorynname) {
          res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
          );
        } else {
          categoryName = iscategorynname.catname;
        }

        let newsalonService = new salonservices({
          price: req.body.price,
          duration: req.body.duration,
          salon_id: req.body.salon_id,
          service_id: req.body.service_id,
          category_id: req.body.category_id,
          servicename: serviceName,
          categoryname: categoryName
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
          let condition = {
            _id: req.body.salon_id
          };

          let updateCondition = {
            isservicesadded: true
          };

          let updateSalonData = await commonQuery.updateOneDocument(
            salons,
            condition,
            updateCondition
          );
          if (!updateSalonData) {
          } else {
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
    } catch (error) { }
  }

  addSalonServices().then(function () { });
}

async function getRemovesalonservice(req, res) {
  if (req.body.user_id && req.body.salonService) {
    let condition = {
      user_id: mongoose.Types.ObjectId(req.body.user_id)
    };
    let salonObj = await commonQuery.findoneData(salons, condition, "_id");

    var salonId = salonObj._id;
    condition = {
      salon_id: salonId,
      service_id: req.body.salonService.service_id,
      category_id: req.body.salonService.category_id
    };

    let removeService = await commonQuery.hard_delete(salonservices, condition);
    if (removeService) {
      res.json(
        Response(
          constant.SUCCESS_CODE,
          constant.REMOVED_ALL_DATA,
          removeService
        )
      );
    }
  } else {
    return res.json(
      Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
    );
  }
}

/**
 * Function is use to Add Promocodes or Discount
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function addPromocodes(req, res) {
  async function addPromocodes() {
    try {
      if (req.body && req.body.name) {
        let newPromoCode = new promocodes({
          name: req.body.name,
          value: req.body.value,
          description: req.body.description,
          termsAndCondition: req.body.termsAndCondition,
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
  addPromocodes().then(function () { });
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
        let conditon = {
          salon_id: mongoose.Types.ObjectId(req.body.salon_id)
        };

        let fetchPromoCodes = await commonQuery.findAll(promocodes, conditon);
        if (!fetchPromoCodes) {
          res.json(Response(constant.ERROR_CODE, constant.FAILED_TO_ADD, null));
        } else {
          // fetchPromoCodes.forEach(function(v){ delete v.salon_id; delete v.usedbyusers; ret });

          fetchPromoCodes.forEach(function (v) {
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
    } catch (error) {
      res.json(
        Response(constant.INTERNAL_ERROR, constant.REQURIED_FIELDS_NOT, null)
      );
    }
  }
  getPromoCodes().then(function () { });
}
/**
 * Function is use to Fetch salon services chosen by salon
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function getSalonServices(req, res) {
  async function getSalonServices() {
    try {
      if (req.body && req.body.salon_id) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body.salon_id)
        };
        let getsalonservice = await commonQuery.fetch_salon_services(
          salons,
          condition
        );
        if (!getsalonservice) {
          res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              getsalonservice
            )
          );
        }
      }
    } catch (error) {
      res.json(
        Response(constant.INTERNAL_ERROR, constant.REQURIED_FIELDS_NOT, null)
      );
    }
  }

  getSalonServices().then(function () { });
}

/**
 * Function is use to add employee to salon
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function addEmployeeToSalon(req, res) {
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

        if (!saveEmployee) {
          res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
          );
        } else {
          let salonUpdate = await commonQuery.addEmployeeToSalon(
            salons,
            req.body.salon_id,
            saveEmployee._id
          );

          if (!salonUpdate) {
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, error);
          } else {
          }

          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.ADDED_SUCCESS,
              saveEmployee
            )
          );
        }
      }
    } catch (error) {
      res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
      );
    }
  }
  addEmployeeToSalon().then(function () { });
}
/**
 * Function is use to Update employee
 * @access private
 * @return json
 * Created by Rashmi Ranjan
 * @smartData Enterprises (I) Ltd
 * Created on 30th Jan, 2020
 */
async function updateEmployee(req, res) {
  console.log("req.body", req.body);
  if (req.body.id) {
    let updateCond = {
      _id: req.body.id
    }

    let updateEmp = await commonQuery.updateOneDocument(employees, updateCond, { name: req.body.name });
    if (updateEmp) {
      res.json(
        Response(
          constant.SUCCESS_CODE,
          constant.SERVICE_UPDATED,
          updateEmp
        )
      );
    }
  } else {
    res.json(
      Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
    );
  }
}
/**
 * Function is use to assign services to employee
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function addServicesToEmployee(req, res) {
  async function addServicesToEmployee() {
    try {
      if (req.body.employee_id && req.body) {
        let tempSev = [];
        req.body.salonservices_id.forEach(function (v) {
          tempSev.push(mongoose.Types.ObjectId(v));
        });

        let empId = req.body.employee_id;
        var empCond = {
          _id: empId
        }
        let isEmployeExist = await commonQuery.countData(employees, empCond);
        //console.log("isEmployeExist", isEmployeExist); return;
        if (isEmployeExist == 0) {
          let addEmpService = await commonQuery.addServiceToEmployee(
            employees,
            empId,
            tempSev
          );
          if (!addEmpService) {
            res.json(
              Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
            );
          } else {
            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.ADDED_SUCCESS,
                addEmpService
              )
            );
          }
        } else {
          let updateData = {
            salonservices_id: req.body.salonservices_id
          }
          let updateService = await commonQuery.updateOne(employees, empCond, updateData);
          if (!updateService) {
            res.json(
              Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
            );
          } else {
            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.SERVICE_UPDATED,
                updateService
              )
            );
          }
        }
      }
    } catch (error) {
      res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
      );
    }

  }
  addServicesToEmployee().then(function () { })
}



/**
 * Function is use to remove service to employee
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function removeServiceToEmployee(req, res) {
  async function removeServiceToEmployee() {
    try {
      if (req.body.employee_id && req.body) {
        let empId = req.body.employee_id;

        let addEmpService = await commonQuery.removeServiceToEmp(
          employees,
          empId,
          mongoose.Types.ObjectId(req.body.salonservices_id)
        );

        if (!addEmpService) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.ADDED_SUCCESS,
              addEmpService
            )
          );
        }
      }
    } catch (error) {
      res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
      );
    }
  }

  removeServiceToEmployee().then(function () { });
}

function getCategoriesAndServicesOfSalon(req, res) {
  async function getCategoriesAndServicesOfSalon() {
    try {
      if (req.body && req.body.salon_id) {
        let condition = {
          "servvv.salon_id": mongoose.Types.ObjectId(req.body.salon_id)
        };
        let catgoriesList = await commonQuery.fetchCategories(
          categories,
          condition
        );
        if (!catgoriesList) {
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              catgoriesList
            )
          );
        }
      }
    } catch (error) { }
  }
  getCategoriesAndServicesOfSalon().then(function () { });
}

/**
 * Function is use to Save salon Weekly Slots w.r.t salon and user
 * @access private
 * @return json
 * Created by Rashmi Ranjan
 * @smartData Enterprises (I) Ltd
 * On dated 03-01-2020
 */
function addSalonWeeklySlots(req, res) {
  // console.log("req.body", req.body); return;
  if (req.body.salon_id && req.body.user_id) {
    var finalDataArr = [];
    var finalUpdateDataArr = [];
    try {
      async.each(
        req.body.daysData,
        async function (record) {
          let slotData = {
            user_id: req.body.user_id,
            salon_id: req.body.salon_id,
            days: record.days,
            starttime: record.opentime,
            endtime: record.closetime,
            status: record.status,
            order_sort: record.order_sort
          };
          //console.log("req.body", req.body); return;
          let countCond = {
            user_id: req.body.user_id,
            salon_id: req.body.salon_id,
            days: record.days
          };
          //  console.log("countCond", countCond); return;
          let salonWeeklySlotCount = await commonQuery.countData(
            salonweeklyslot,
            countCond
          );

          if (salonWeeklySlotCount == 0) {
            let saveSalonWeeklySlot = await commonQuery.InsertIntoCollection(
              salonweeklyslot,
              slotData
            );
            if (saveSalonWeeklySlot) {
              finalDataArr.push(slotData);
            }
          } else {
            let fetchCond = {
              user_id: req.body.user_id,
              salon_id: req.body.salon_id,
              days: record.days
            };
            let fetchData = {
              user_id: req.body.user_id,
              salon_id: req.body.salon_id,
              days: record.days
            };
            let fetchOne = await commonQuery.fetch_one(
              salonweeklyslot,
              fetchCond,
              fetchData
            );
            let updateCond = {
              _id: fetchOne._id,
              user_id: fetchOne.user_id,
              salon_id: fetchOne.salon_id,
              days: fetchOne.days
            };
            let updateSlotData = {
              starttime: record.opentime,
              endtime: record.closetime,
              status: record.status,
              order_sort: record.order_sort
            };
            let updateSalonWeeklySlot = commonQuery.updateOne(
              salonweeklyslot,
              updateCond,
              updateSlotData
            );
            if (updateSalonWeeklySlot) {
              finalUpdateDataArr.push(slotData);
            }
          }
        },
        function (err) {
          if (err) {
            console.log("Error @ 179", err);
          } else {
            if (finalDataArr.length != 0) {
              res.json(
                Response(
                  constant.SUCCESS_CODE,
                  constant.NEW_DATA_ADDED,
                  finalDataArr
                )
              );
            } else if (finalUpdateDataArr.length != 0) {
              res.json(
                Response(
                  constant.SUCCESS_CODE,
                  constant.DATA_UPDATED,
                  finalUpdateDataArr
                )
              );
            }
          }
        }
      );
    } catch (err) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, err)
      );
    }
  } else {
    return res.json(
      Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
    );
  }
}

function viewSalonDetails(req, res) {
  let userData;
  async function viewSalonDetails() {
    try {
      if (req.body && req.body.salon_id) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body.salon_id)
        };
        let viewSalon = await commonQuery.fetch_one(salons, condition);
        if (!viewSalon) {
          return res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          let findCondition = {
            _id: mongoose.Types.ObjectId(viewSalon.user_id)
          };

          let findSalonEmail = await commonQuery.findoneData(
            users,
            findCondition
          );
          if (!findSalonEmail) {
          } else {
            userData = findSalonEmail["email"];
          }
          let dataToPass = {
            salondetail: viewSalon,
            email: userData
          };

          return res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              dataToPass
            )
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, err)
      );
    }
  }
  viewSalonDetails().then(function () { });
}

function updateSalonDetails(req, res) {
  var image_path;

  async function updateSalonDetails() {
    try {
      if (req.body && req.body.salon_id) {
        if (req.files) {
          mkdirp(constant.PROFILEIMAGE, async function (err) {
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
                extension = req.files.image["name"].split(".");
                let imgOriginalName = req.files.image["name"];
                path =
                  constant.PROFILEIMAGE + timeStamp + "_" + imgOriginalName;
                // constant.directoryPath.SERVICEIMAGE
                // return false;
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
                    .fileUpload(path, req.files.image["data"])
                    .then(async data => {
                      if (data.status) {
                        let condition = {
                          _id: mongoose.Types.ObjectId(req.body.salon_id)
                        };
                        let updateCondition = {
                          name: req.body.name,
                          address: req.body.address,
                          contact: req.body.contact,
                          opentime: req.body.opentime,
                          closetime: req.body.closetime,
                          image: image_path
                        };

                        let updateSalon = await commonQuery.updateOneDocument(
                          salons,
                          condition,
                          updateCondition
                        );

                        if (!updateSalon) {
                        } else {
                          res.json(
                            Response(
                              constant.SUCCESS_CODE,
                              constant.NEW_DATA_ADDED,
                              updateSalon
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
          let condition = {
            _id: mongoose.Types.ObjectId(req.body.salon_id)
          };
          let updateCondition = {
            name: req.body.name,
            address: req.body.address,
            contact: req.body.contact,
            opentime: req.body.opentime,
            closetime: req.body.closetime
          };

          let updateSalon = await commonQuery.updateOneDocument(
            salons,
            condition,
            updateCondition
          );

          if (!updateSalon) {
          } else {
            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.NEW_DATA_ADDED,
                updateSalon
              )
            );
          }
        }
      } else {
        return res.json(
          Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
        );
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  updateSalonDetails().then(function () { });
}

function fetchSalonData(req, res) {
  async function fetchSalonData() {
    try {
      if (req.body && req.body.user_id) {
        let condition = {
          user_id: mongoose.Types.ObjectId(req.body.user_id)
        };

        let getSalonData = await commonQuery.findoneData(salons, condition);

        if (!getSalonData) {
          return res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          return res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              getSalonData
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

  fetchSalonData().then(function () { });
}

function bookSlot(req, res) {
  console.log(req.body);
  async function bookSlot() {
    try {
      if (req.body && req.body.starttime) {
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  bookSlot().then(function () { });
}
/**
 * Function is use to get Salon Details from user ID
 * @access private
 * @return json
 * Created by Rashmi Ranjan
 * @smartData Enterprises (I) Ltd
 * Created On 16/01/2020
 */
async function getSalonByUser(req, res) {
  // console.log("call here"); return;
  if (req.body.user_id) {
    let userId = req.body.user_id;
    let cond = {
      "user_id": userId
    }
    let salonDetails = await commonQuery.fetch_one(salons, cond);
    if (salonDetails) {
      res.json(
        Response(
          constant.SUCCESS_CODE,
          constant.FETCHED_ALL_DATA,
          salonDetails
        )
      );
    }
  } else {
    res.json(
      Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
    );
  }
  //console.log("req.body", req.body); return;

}

/**
 * Function is use to get list service provided by admin
 * @access private
 * @return json
 * Created by Rashmi Ranjan
 * @smartData Enterprises (I) Ltd
 * Created On 21/01/2020
 */
async function getSalonServiceList(req, res) {
  //console.log("req.body", req.body); return;
  let pageSize = +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  if (req.body.user_id) {
    var salonId = await util.getSalonId(req.body.user_id);
    let serviceCond = {
      "salon_id": salonId
    }
    let pageSize = 100;
    let page = 1;
    // let serviceList = await commonQuery.fetch_all(services, salonCond);
    let serviceList = await commonQuery.fetch_all_paginated(
      salonservices, serviceCond,
      pageSize,
      currentPage
    );
    //console.log("serviceList", serviceList); return;
    res.json(
      Response(
        constant.SUCCESS_CODE,
        constant.FETCHED_ALL_DATA,
        serviceList
      )
    );
  } else {
    return res.json(
      Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
    );
  }

}
/**
 * Function is use to get list service assign to all employee
 * @access private
 * @return json
 * Created by Rashmi Ranjan
 * @smartData Enterprises (I) Ltd
 * Created On 21/01/2020
 */
async function getEmployeeServiceList(req, res) {
  // console.log("req.body", req.body);
  let pageSize = +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  if (req.body.user_id) {
    var employeeList = [];
    var salonId = await util.getSalonId(req.body.user_id);
    let empCond = {
      "salon_id": salonId
    }
    let pageSize = 100;
    let page = 1;

    let employeeData = await commonQuery.find_all_employee_paginate(
      employees, empCond,
      pageSize,
      currentPage
    );

    // console.log("employeeList", employeeList); return;
    res.json(
      Response(
        constant.SUCCESS_CODE,
        constant.FETCHED_ALL_DATA,
        employeeData
      )
    );
  } else {
    return res.json(
      Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
    );
  }
}

async function updateSalonServices(req, res) {
  // console.log("req.body", req.body); //return;
  if (req.body) {
    let updateCond = {
      "_id": req.body.id
    }
    let updateData = {
      price: req.body.price,
      duration: req.body.duration
    }
    let updateService = await commonQuery.updateOne(salonservices, updateCond, updateData);
    // console.log("updateService", updateService);
    if (updateService) {
      res.json(
        Response(
          constant.SUCCESS_CODE,
          constant.SERVICE_UPDATED,
          updateService
        )
      );
    }
  } else {
    return res.json(
      Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
    );
  }

}

async function removeEmployee(req, res) {
  console.log("req.body", req.body);
  if (req.body._id) {
    let updateCond = {
      "_id": req.body._id
    }

    let removeEmp = await commonQuery.hard_delete(employees, updateCond);
    // console.log("updateService", updateService);
    if (removeEmp) {
      res.json(
        Response(
          constant.SUCCESS_CODE,
          constant.DELETED_SUCCESS,
          removeEmp
        )
      );
    }
  } else {
    return res.json(
      Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
    );
  }
}

async function getSalonWeeklySlots(req, res) {
  //console.log("req.body", req.body);
  if (req.body.user_id && req.body.salon_id) {
    let cond = {
      user_id: req.body.user_id,
      salon_id: req.body.salon_id
    }
    let salonSotList = await commonQuery.fetch_all_sort_by_order(salonweeklyslot, cond);
    //console.log("salonSotList", salonSotList);
    if (salonSotList) {
      res.json(
        Response(
          constant.SUCCESS_CODE,
          constant.FETCHED_ALL_DATA,
          salonSotList
        )
      );
    }
  } else {
    return res.json(
      Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
    );
  }

}


