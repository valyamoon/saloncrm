"use strict";

const mongoose = require("mongoose");
const utility = require("../../../../lib/utility.js");

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
  addSalonWeeklySlots: addSalonWeeklySlots,
  viewSalonDetails: viewSalonDetails
};

/**
 * Function is use to Save salon Data
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function saveSalonDetails(req, res) {
  console.log("IMAGE", req.files);

  console.log("ASSSSSSSSSS", req.body);
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
        console.log(checkUser);

        if (!checkUser) {
        } else {
          var image_path;
          let coordinates = [req.body.lat, req.body.long];

          let locations = {
            type: "Point",
            coordinates: coordinates
          };
          if (req.files) {
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
                  extension = req.files.image["name"].split(".");
                  let imgOriginalName = req.files.image["name"];
                  path =
                    constant.PROFILEIMAGE + timeStamp + "_" + imgOriginalName;
                  // constant.directoryPath.SERVICEIMAGE
                  // return false;
                  db_path = webUrl + timeStamp + "_" + imgOriginalName;
                  console.log("DB PATH", db_path);
                  console.log("PATH IS", path);
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
                            let updateCondition = { isSubmitted: true };
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
  saveSalonDetails().then(function() {});
}
/**
 * Function is use to Fetch salon List(This is going to change as per new requirement)
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function getSalons(req, res) {
  console.log("CHECK SALON REQUEST", req.body);

  async function getSalons() {
    try {
      if (req.body && req.body.services) {
        let lat = +req.body.lat;
        let long = +req.body.long;
        let name = req.body.name;
        let pageSize =
          +req.body.pageSize || +req.body.pageSize ? req.body.pageSize : +10;
        let page = +req.body.page || +req.body.page ? req.body.page : +1;

        let dynamicQuery = req.body.services;
        console.log(dynamicQuery, lat, long, name, pageSize, page);

        let salonList = await commonQuery.fetch_near_salons(
          salons,
          pageSize,
          page,
          dynamicQuery,
          lat,
          long
        );
        if (!salonList) {
        } else {
          return res.json(
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
  console.log(req.body);
  async function getSalonDetails() {
    try {
      if (req.body && req.body.salon_id) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body.salon_id),
          isActive: true,
          isDeleted: false
        };
        // let condition = {
        //   "servvv.salon_id": mongoose.Types.ObjectId(req.body.salon_id)
        // };

        // let salonDetails = await commonQuery.salonDetailsFetch(
        //   salons,
        //   "reviewratings",
        //   "_id",
        //   "salon_id",
        //   condition,
        //   "reviewratings",
        //   "services",
        //   "categories"
        // );
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

      getSalonDetails().then(function() {});
    } catch (error) {}
  }
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
// function addSalonServices(req, res) {
//     console.log(req.body);
//     return;;
//     async function addSalonServices() {
//         try {
//             let serviceName;
//             let categoryName;
//             if (req.body.salon_id && req.body) {
//                 let servCondition = {
//                     _id: mongoose.Types.ObjectId(req.body.service_id)
//                 };
//                 let isserviceName = await commonQuery.findoneData(
//                     services,
//                     servCondition
//                 );
//                 console.log("serviceName", serviceName);
//                 if (!isserviceName) {
//                     res.json(
//                         Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
//                     );
//                 } else {
//                     serviceName = isserviceName.name;
//                 }

//                 let catCondition = {
//                     _id: mongoose.Types.ObjectId(req.body.category_id)
//                 };
//                 let iscategorynname = await commonQuery.findoneData(
//                     categories,
//                     catCondition
//                 );
//                 console.log("serviceName", iscategorynname);
//                 if (!iscategorynname) {
//                     res.json(
//                         Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
//                     );
//                 } else {
//                     categoryName = iscategorynname.catname;
//                 }

//                 let newsalonService = new salonservices({
//                     price: req.body.price,
//                     duration: req.body.duration,
//                     salon_id: req.body.salon_id,
//                     service_id: req.body.service_id,
//                     category_id: req.body.category_id,
//                     servicename: serviceName,
//                     categoryname: categoryName
//                 });

//                 let saveServiceToSalon = await commonQuery.InsertIntoCollection(
//                     salonservices,
//                     newsalonService
//                 );

//                 if (!saveServiceToSalon) {
//                     res.json(
//                         Response(constant.ERROR_CODE, constant.DATA_NOT_FOUND, null)
//                     );
//                 } else {
//                     let condition = { _id: req.body.salon_id };

//                     let updateCondition = { isservicesadded: true };

//                     let updateSalonData = await commonQuery.updateOneDocument(
//                         salons,
//                         condition,
//                         updateCondition
//                     );
//                     if (!updateSalonData) {} else {}

//                     res.json(
//                         Response(
//                             constant.SUCCESS_CODE,
//                             constant.ADDED_SUCCESS,
//                             saveServiceToSalon
//                         )
//                     );
//                 }
//             }
//         } catch (error) {}
//     }

//     addSalonServices().then(function() {});
// }

async function addSalonServices(req, res) {
  if (req.body.user_id && req.body.salonService) {
    var salonService = [];

    var salonId = await util.getSalonId(req.body.user_id);
    // console.log("salonId", salonId);
    async.each(
      req.body.salonService,
      async function(serviceData, firstCB) {
        let serviceName = await util.getServcieName(
          services,
          serviceData.service_id
        );
        var categoryName = await util.getCategoryName(
          categories,
          serviceData.category_id
        );

        var countCond = {
          salon_id: salonId,
          service_id: serviceData.service_id,
          category_id: serviceData.category_id
        };
        // console.log("countCond", countCond);
        let countRecord = await commonQuery.countData(salonservices, countCond);
        // console.log("countRecord", countRecord);
        // return;
        if (countRecord == 0) {
          let newsalonService = new salonservices({
            price: serviceData.price,
            duration: serviceData.duration,
            salon_id: salonId,
            service_id: serviceData.service_id,
            category_id: serviceData.category_id,
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
            salonService.push(saveServiceToSalon);
            let condition = { _id: salonId };

            let updateCondition = { isservicesadded: true };

            let updateSalonData = await commonQuery.updateOneDocument(
              salons,
              condition,
              updateCondition
            );
            if (!updateSalonData) {
            } else {
              console.log("saveServiceToSalon===========>", saveServiceToSalon);
            }
          }
        } else {
          let updateData = {
            price: serviceData.price,
            duration: serviceData.duration,
            salon_id: salonId,
            service_id: serviceData.service_id,
            category_id: serviceData.category_id,
            servicename: serviceName,
            categoryname: categoryName
          };
          let updateServiceToSalon = await commonQuery.updateOne(
            salonservices,
            countCond,
            updateData
          );
          salonService.push(updateData);
        }

        // firstCB();
      },
      function(err, data) {
        if (err) {
          console.log("Error @427", err);
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.ADDED_SUCCESS,
              salonService
            )
          );
        }
      }
    );
  } else {
    return res.json(
      Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
    );
  }
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
    // console.log("req.body.salonService", req.body.salonService);
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
    } catch (error) {
      res.json(
        Response(constant.INTERNAL_ERROR, constant.REQURIED_FIELDS_NOT, null)
      );
    }
  }
  getPromoCodes().then(function() {});
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
        let condition = { _id: mongoose.Types.ObjectId(req.body.salon_id) };
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

  getSalonServices().then(function() {});
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
  addEmployeeToSalon().then(function() {});
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

  addServicesToEmployee().then(function() {});
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

  removeServiceToEmployee().then(function() {});
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
    } catch (error) {}
  }
  getCategoriesAndServicesOfSalon().then(function() {});
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
  if (req.body.salon_id && req.body.user_id) {
    var finalDataArr = [];
    var finalUpdateDataArr = [];
    try {
      async.each(
        req.body.daysData,
        async function(record) {
          let slotData = {
            user_id: req.body.user_id,
            salon_id: req.body.salon_id,
            days: record.days,
            starttime: record.fromTime,
            endtime: record.toTime,
            status: record.status
          };
          let countCond = {
            user_id: req.body.user_id,
            salon_id: req.body.salon_id,
            days: record.days
          };
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
              starttime: record.fromTime,
              endtime: record.toTime,
              status: record.status
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
        function(err) {
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
        let condition = { _id: mongoose.Types.ObjectId(req.body.salon_id) };
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
            console.log("finds", findSalonEmail);
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
  viewSalonDetails().then(function() {});
}
