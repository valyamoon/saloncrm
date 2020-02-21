"use strict";

const mongoose = require("mongoose");
const utility = require("../../../../lib/utility.js");
// const fcm = require("fcm-notification");
// const privateKey = require("./privatekey");
// const FCM = new fcm(privateKey);
const async = require("async");

var FCM = require("fcm-node");
var serverKey =
  "AAAAP9-1hEk:APA91bGeTlqXHIGH3ttGdruGj0icePvUSqWQ2H64s_zoP9bt8EhsOcqMKKszpGY8bMAGPxs_nq4ySmYUuBCacmLeplDsq5pNodO4GFXGsTNgXaAGTdu6hreogdM4rRbU8OP3s-QZ2rK7";
var fcm = new FCM(serverKey);
var ts = require("time-slots-generator");
const moment = require("moment-timezone");

const jwt = require("jsonwebtoken");
const stripe = require("stripe")("sk_test_NKkb8atD9EpUwsWTE38S64Yr00DT0y0RDh");
//const stripe = require("stripe")("sk_test_KIPp24RuZLwG2pgVc8Hsd6lS00iSpeKk3X");

const mkdirp = require("mkdirp");
//const webUrl = "http://172.10.230.180:4001/uploads/profileImages/";
const webUrl = "http://54.71.18.74:5977/uploads/profileImages/";

const constant = require("../../../../config/constant.js");
const wallets = require("../../user/model/walletSchema");
const userCtrl = require("../../user/controllers/user_ctrl");
const users = mongoose.model("users");

const appointments = require("../model/appointmentsSchema");
const salonSubscriptions = require("../model/salonSubscriptions");
const roles = require("../../user/model/rolesSchema");
const salons = require("../model/salonSchema");
const promocodes = require("../model/promocodeSchema");
const employees = require("../model/employeeSchema");
const categories = require("../../admin/model/categoriesSchema");
const salonservices = require("../model/salonservicesSchema");
const reviewratings = require("../model/salonreviewsratingSchema");
const services = require("../../admin/model/servicesSchema");
const salonweeklyslots = require("../model/salonweeklyslotSchema");
const Response = require("../../../../lib/response_handler.js");
const validator = require("../../../../config/validator.js");
const Config = require("../../../../config/config").get(
  process.env.NODE_ENV || "local"
);
const imageUrl = Config;
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
  updateEmployee: updateEmployee,
  deletePromocode: deletePromocode,
  subscribedSalonDetails: subscribedSalonDetails,
  createCardToken: createCardToken,
  connectStripeAccount: connectStripeAccount,
  appointmentCompleted: appointmentCompleted,
  getUpcomingbookings: getUpcomingbookings,
  getSalonWeeklyDetails: getSalonWeeklyDetails,
  validatePromocode: validatePromocode,
  getChangeInBookingsData: getChangeInBookingsData
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
      var image_path;
      var customer_id_value;

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
                  db_path =
                    "uploads/profileImages/" +
                    timeStamp +
                    "_" +
                    imgOriginalName;
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
                          stripe.customers.create(
                            {
                              email: req.body.email,
                              description: req.body.name,
                              name: req.body.name,
                              phone: req.body.phone,
                              code: req.body.code,
                              address: {
                                line1: req.body.salonaddress,
                                postal_code: "98140",
                                city: "San Francisco",
                                state: "CA",
                                country: "US"
                              }
                            },
                            async function(err, customer) {
                              if (err) {
                                console.log(err);
                              } else {
                                customer_id_value = customer["id"];

                                let salonData = new salons({
                                  name: req.body.name,
                                  location: locations,
                                  contact: req.body.contact,
                                  code: req.body.code,
                                  timezonestring: req.body.timezonestring,
                                  salonaddress: req.body.salonaddress,
                                  user_id: req.body.user_id,
                                  image: image_path,
                                  opentime: req.body.opentime,
                                  closetime: req.body.closetime,
                                  isActive: false,
                                  isDeleted: false,
                                  isreviewadded: false,
                                  isservicesadded: false,
                                  customer_id: customer_id_value
                                });

                                let saveSalon = await commonQuery.InsertIntoCollection(
                                  salons,
                                  salonData
                                );

                                if (!saveSalon) {
                                } else {
                                  var TempUrl = imageUrl.imageBaseUrl;
                                  var url = TempUrl + saveSalon.image;
                                  saveSalon.image = url;
                                  let updateCondition = {
                                    isSubmitted: true
                                  };
                                  let condition = {
                                    _id: mongoose.Types.ObjectId(
                                      req.body.user_id
                                    )
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
                              }
                            }
                          );
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

// function getSalons(req, res) {
//   async function getSalons() {
//     try {
//       var intervals;
//       var endtime;
//       var timeslots;
//       var starttime;
//       var startTiming;
//       var endTiming;
//       var salonListingNew = [];

//       if (req.body && req.body.service_id) {
//         let lat = +req.body.lat;
//         let long = +req.body.long;
//         let name = req.body.name;
//         let service_id = mongoose.Types.ObjectId(req.body.service_id);
//         let pageSize =
//           +req.body.pageSize || +req.body.pageSize ? req.body.pageSize : +10;
//         let page = +req.body.page || +req.body.page ? req.body.page : +1;

//         let sortParam;
//         if (req.body.sort === "price" && req.body.sortOrder === "asc") {
//           sortParam = {
//             "servicesSelected.price": 1
//           };
//         } else if (req.body.sort === "price" && req.body.sortOrder === "dsc") {
//           sortParam = {
//             "servicesSelected.price": -1
//           };
//         } else if (
//           req.body.sort === "distance" &&
//           req.body.sortOrder === "asc"
//         ) {
//           sortParam = {
//             "dist.calculated": 1
//           };
//         } else if (req.body.sort === "price" && req.body.sortOrder === "dsc") {
//           sortParam = {
//             "dist.calculated": -1
//           };
//         } else {
//           sortParam = {
//             "servicesSelected.price": 1
//           };
//         }

//         let salonList = await commonQuery.fetch_Salon_list_Near(
//           salons,
//           long,
//           lat,
//           service_id,
//           pageSize,
//           page,
//           name,
//           sortParam
//         );
//         if (!salonList) {
//         } else {
//           let slots = [];
//           salonList.forEach(async function(c) {
//             console.log("ee", c);
//             slots.push({
//               salon: c.name,
//               _id: c._id,
//               optime: c.opentime,
//               cltime: c.closetime,
//               image: c.image,
//               contact: c.contact,
//               avgRatings: c.avgRatings,
//               distance: c.distance,
//               location: c.location,
//               address: c.address,
//               servicename: c.service["servicename"],
//               services: c.service,
//               duration: c.service["duration"]
//             });
//           });

//           console.log("SLOTS", slots);

//           slots.forEach(function(v) {
//             let todaysDate = new Date();

//             let comingDate = req.body.date;
//             todaysDate = moment(todaysDate).format("DD:MM:YYYY");
//             comingDate = moment(comingDate).format("DD:MM:YYYY");

//             if (todaysDate === comingDate) {
//               let currentTime = new Date();
//               if (currentTime === v.cltime) {
//                 times_ara = [];
//               }
//               //  console.log("CT", moment(currentTime).format("HH:mm"));
//               starttime = currentTime;
//             } else {
//               starttime = v.optime;
//               console.log("STARTTIME", starttime);
//             }

//             var difference = v.cltime - v.optime;
//             var minutes = difference * 60;
//             var slots = minutes / v.duration;

//             intervals = v.duration;
//             endtime = v.cltime;
//             timeslots = [starttime];
//             console.log("TIMESLOTS", timeslots);

//             startTiming = moment(v.optime).format("HH:mm");

//             console.log("STARTTIMING", startTiming);

//             endTiming = moment(v.cltime).format("HH:mm");

//             console.log("ENDTIMING", endTiming);

//             function parseTime(s) {
//               var c = s.split(":");
//               return parseInt(c[0]) * 60 + parseInt(c[1]);
//             }

//             function convertHours(mins) {
//               var hour = Math.floor(mins / 60);
//               var mins = mins % 60;
//               var converted = pad(hour, 2) + ":" + pad(mins, 2);
//               return converted;
//             }

//             function pad(str, max) {
//               str = str.toString();
//               return str.length < max ? pad("0" + str, max) : str;
//             }

//             function calculate_time_slot(start_time, end_time, interval) {
//               var i, formatted_time;
//               var time_slots = new Array();
//               for (var i = start_time; i <= end_time; i = i + interval) {
//                 formatted_time = convertHours(i);
//                 time_slots.push(formatted_time);
//               }
//               return time_slots;
//             }

//             let stime = startTiming.toString();
//             let etime = endTiming.toString();
//             console.log("stime", stime);
//             console.log("etime", etime);

//             var startTime = stime;

//             var endTime = etime;

//             var start_time = parseTime(startTime);
//             var end_time = parseTime(endTime);
//             console.log("SETIME", start_time, end_time);
//             var interval = parseInt(intervals);
//             console.log("INTERVAL", interval);
//             var times_ara = calculate_time_slot(start_time, end_time, interval);

//             let timeArray = [];

//             times_ara.forEach(function(jj) {
//               timeArray.push({ time: jj, status: false });
//             });

//             // /console.log("TIMEARRAY", timeArray);

//             salonListingNew.push({
//               starttime: v.optime,
//               _id: v._id,
//               closetime: v.cltime,
//               name: v.salon,
//               slots: timeArray,
//               image: v.image,
//               contact: v.contact,
//               avgRatings: v.avgRatings,
//               distance: v.distance,
//               location: v.location,
//               address: v.address,
//               servicename: v.servicename,
//               service: v.services
//             });
//           });
//           salonListingNew.forEach(async function(c) {
//             var TempUrl = imageUrl.imageBaseUrl;
//             var url = TempUrl + c.image;
//             c.image = url;
//           });
//           console.log(salonListingNew);
//           return res.json(
//             Response(
//               constant.SUCCESS_CODE,
//               constant.FETCHED_ALL_DATA,
//               //salonList
//               salonListingNew
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
          //console.log(salonList);
          let slots = [];
          salonList.forEach(async function(c) {
            let ootime = new Date(c.opentime).toLocaleString({
              timeZone: c.timezonestring
            });
            let cctime = new Date(c.closetime).toLocaleString({
              timeZone: c.timezonestring
            });

            console.log("opentime", ootime);
            console.log("closetime", cctime);

            slots.push({
              salon: c.name,
              timezonestring: c.timezonestring,
              _id: c._id,
              optime: moment(c.opentime, ["h:mm A"])
                .tz(c.timezonestring)
                .format(),
              cltime: moment(c.closetime, ["h:mm A"])
                .tz(c.timezonestring)
                .format(),
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

          console.log("SLOTSSSS", slots);

          slots.forEach(function(v) {
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

            startTiming = moment(starttime)
              .tz(v.timezonestring)
              .format("HH:mm");
            console.log(startTiming);
            endTiming = moment(endtime)
              .tz(v.timezonestring)
              .format("HH:mm");
            console.log(endTiming);

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

            let timeArray = [];
            times_ara.forEach(function(jj) {
              timeArray.push({ time: jj, status: false });
            });

            salonListingNew.push({
              starttime: v.optime,
              _id: v._id,
              closetime: v.cltime,
              name: v.salon,
              slots: timeArray,
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

          salonListingNew.forEach(async function(c) {
            var TempUrl = imageUrl.imageBaseUrl;
            var url = TempUrl + c.image;
            c.image = url;
          });
          console.log(salonListingNew);

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
          var TempUrl = imageUrl.imageBaseUrl;
          var url = TempUrl + salonDetails[0].image;
          salonDetails[0].image = url;
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              salonDetails[0]
            )
          );
        }
      }
    } catch (error) {
      res.json(
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

  getReviewsAndRatingsList().then(function() {});
}
/**
 * Function is use to Add services with respect to salon
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
async function addSalonServices(req, res) {
  if (req.body.category_id && req.body.salon_id && req.body.services) {
    var salonService = [];
    var categoryId = req.body.category_id;
    var salonId = req.body.salon_id;
    async.each(
      req.body.services,
      async function(serviceData, firstCB) {
        let serviceName = await util.getServcieName(
          services,
          serviceData.service_id
        );
        var categoryName = await util.getCategoryName(categories, categoryId);
        // console.log("serviceName+++categoryName", serviceName + "***" + categoryName); return;
        var countCond = {
          salon_id: salonId,
          service_id: serviceData.service_id,
          category_id: categoryId
        };
        let countRecord = await commonQuery.countData(salonservices, countCond);

        if (countRecord == 0) {
          let newsalonService = new salonservices({
            price: serviceData.price,
            duration: serviceData.duration,
            salon_id: salonId,
            service_id: serviceData.service_id,
            category_id: categoryId,
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
            }
          }
        } else {
          let updateData = {
            price: serviceData.price,
            duration: serviceData.duration,
            salon_id: salonId,
            service_id: serviceData.service_id,
            category_id: categoryId,
            servicename: serviceName,
            categoryname: categoryName
          };
          let updateServiceToSalon = await commonQuery.updateOne(
            salonservices,
            countCond,
            updateData
          );
          salonService.push(updateServiceToSalon);
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
  if (req.body.salonService) {
    // let condition = {
    //   _id: req.body.salonService.salonId
    // };
    // let salonObj = await commonQuery.findoneData(salons, condition, "_id");

    // var salonId = salonObj.salon_id;
    let condition = {
      salon_id: req.body.salonService.salon_id,
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
  //console.log(req.body.user_id);
  async function getPromoCodes() {
    try {
      if (req.body && req.body.salon_id) {
        let conditon = {
          salon_id: mongoose.Types.ObjectId(req.body.salon_id),
          isActive: true,
          isDeleted: false
        };

        let fetchPromoCodes = await commonQuery.findAll(promocodes, conditon);
        //{ usedbyusers: { $nin: [ ObjectId("5e43e6ceafc9ca277790242f") ] } }
        // console.log("PROMOCODE", fetchPromoCodes);

        if (!fetchPromoCodes) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
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
 * Function is use to Update employee
 * @access private
 * @return json
 * Created by Rashmi Ranjan
 * @smartData Enterprises (I) Ltd
 * Created on 30th Jan, 2020
 */
async function updateEmployee(req, res) {
  if (req.body.id) {
    let updateCond = {
      _id: req.body.id
    };

    let updateEmp = await commonQuery.updateOneDocument(employees, updateCond, {
      name: req.body.name
    });
    if (updateEmp) {
      res.json(
        Response(constant.SUCCESS_CODE, constant.SERVICE_UPDATED, updateEmp)
      );
    }
  } else {
    res.json(Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null));
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
    // console.log("req.body.employee_id", req.body.employee_id); //return;
    try {
      if (req.body.employee_id && req.body) {
        // console.log("call here in if condition");
        let tempSev = [];
        req.body.salonservices_id.forEach(function(v) {
          tempSev.push(mongoose.Types.ObjectId(v));
        });

        let empId = req.body.employee_id;
        var empCond = {
          _id: empId
        };
        let isEmployeExist = await commonQuery.countData(employees, empCond);

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
          };
          let updateService = await commonQuery.updateOne(
            employees,
            empCond,
            updateData
          );
          // console.log("updateService", updateService); return;
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
      // console.log("req.body =============>", req.body); return;
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
          "inventory_docs.salon_id": mongoose.Types.ObjectId(req.body.salon_id)
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
  // console.log("req.body", req.body); return;
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
            salonweeklyslots,
            countCond
          );

          if (salonWeeklySlotCount == 0) {
            let saveSalonWeeklySlot = await commonQuery.InsertIntoCollection(
              salonweeklyslots,
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
              salonweeklyslots,
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
              salonweeklyslots,
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
  viewSalonDetails().then(function() {});
}

function updateSalonDetails(req, res) {
  var image_path;
  //console.log(req.body);
  async function updateSalonDetails() {
    try {
      if (req.body && req.body.salon_id) {
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
                db_path =
                  "uploads/profileImages/" + timeStamp + "_" + imgOriginalName;
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
                          salonaddress: req.body.salonaddress,
                          contact: req.body.contact,
                          code: req.body.code,
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
            salonaddress: req.body.salonaddress,
            contact: req.body.contact,
            code: req.body.code,
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
  updateSalonDetails().then(function() {});
}

function fetchSalonData(req, res) {
  // console.log("HERE", req.body);

  async function fetchSalonData() {
    try {
      if (req.body && req.body.user_id) {
        let condition = {
          user_id: mongoose.Types.ObjectId(req.body.user_id)
        };

        let getSalonData = await commonQuery.findoneData(salons, condition);
        //  console.log(getSalonData);

        if (!getSalonData) {
          return res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          //   console.log(getSalonData);
          var TempUrl = imageUrl.imageBaseUrl;
          var url = TempUrl + getSalonData.image;
          getSalonData.image = url;
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

  fetchSalonData().then(function() {});
}

async function bookSlot(data) {
  console.log("AYADATA", data);
  let bookedAppointmentData;
  var orderId = Math.random(1234567910)
    .toString(25)
    .replace(/[^a-z-^0-1000-z-aA-Z]+/g, "")
    .substr(0, 100);
  if (data.paymentType === "cash") {
    var starttime = data.time;

    //  console.log("ST", starttime);
    var duration = data.duration;
    var hour = starttime.split(":");
    var hourInt = hour[0] * 60;
    var minInt = hour[1];
    var curDate = data.date;
    curDate = new Date(curDate);
    curDate = new Date(curDate.getTime() + curDate.getTimezoneOffset() * 60000);
    var starttimedate = new Date(
      curDate.getFullYear() +
        "-" +
        (curDate.getMonth() + 1) +
        "-" +
        curDate.getDate() +
        "-" +
        starttime
    );
    var totaltime = parseInt(hourInt) + parseInt(minInt);
    var endtime = totaltime + parseInt(duration);
    var endTimeCalculated;

    time_convert(endtime);
    function time_convert(num) {
      const hours = Math.floor(num / 60);
      const minutes = num % 60;
      endTimeCalculated = `${hours}:${minutes}`;
    }
    var endtimedate = new Date(
      curDate.getFullYear() +
        "-" +
        (curDate.getMonth() + 1) +
        "-" +
        curDate.getDate() +
        "-" +
        endTimeCalculated
    );

    // console.log("endTimeCalculated", endTimeCalculated);
    let findEmp = await commonQuery.filterEmployee(
      employees,
      mongoose.Types.ObjectId(data.salon_id),
      mongoose.Types.ObjectId(data.service_id)
    );

    // console.log(findEmp);

    if (!findEmp) {
    } else {
      var empId = findEmp[0]._id;

      //  console.log("FINDEMP", findEmp);

      console.log(empId);

      let saveAppointment = new appointments({
        salon_id: data.salon_id,
        user_id: data.user_id,
        totalamount: data.totalamount,
        service: data.service_id,
        duration: data.duration,
        starttime: starttime,
        user_id: data.user_id,
        endtime: endTimeCalculated,
        date: data.date,
        employee_id: empId,
        paymentType: data.paymentType,
        orderId: orderId,
        endtimedate: endtimedate.toISOString(),
        starttimedate: starttimedate.toISOString()
      });

      // console.log("saveAppointment", saveAppointment);

      let bookAppointment = await commonQuery.InsertIntoCollection(
        appointments,
        saveAppointment
      );
      if (!bookAppointment) {
        reject("ERROR");
      } else {
        if (data.promocode_id) {
          let _id = mongoose.Types.ObjectId(data.promocode_id);
          let dataToPass = mongoose.Types.ObjectId(data.user_id);
          let addInPromocode = await commonQuery.addUserIdToPromocode(
            promocodes,
            _id,
            dataToPass
          );
          console.log(addInPromocode);
        }

        var message = {
          to: data.deviceToken,
          collapse_key: "your_collapse_key",

          notification: {
            title: "HI AMrut",
            body: "Body of your push notification"
          },

          data: {
            my_key: "AMRUT",
            my_another_key: "NADIM"
          }
        };

        fcm.send(message, async function(err, response) {
          if (err) {
            // console.log("Something has gone wrong!", err);
          } else {
            // console.log("Successfully sent with response: ", response);
          }
        });
        //   console.log("BOOKAAINCASH", bookAppointment);
        bookedAppointmentData = bookAppointment;
        // return bookAppointment;
      }
    }
  } else if (data.paymentType === "card") {
    var starttime = data.time;
    var duration = data.duration;
    var hour = starttime.split(":");
    var hourInt = hour[0] * 60;
    var minInt = hour[1];
    var totaltime = parseInt(hourInt) + parseInt(minInt);
    var endtime = totaltime + parseInt(duration);
    var curDate = data.date;
    curDate = new Date(curDate);
    curDate = new Date(curDate.getTime() + curDate.getTimezoneOffset() * 60000);
    var starttimedate = new Date(
      curDate.getFullYear() +
        "-" +
        (curDate.getMonth() + 1) +
        "-" +
        curDate.getDate() +
        "-" +
        starttime
    );
    var endTimeCalculated;
    time_convert(endtime);
    function time_convert(num) {
      const hours = Math.floor(num / 60);
      const minutes = num % 60;
      endTimeCalculated = `${hours}:${minutes}`;
    }
    var endtimedate = new Date(
      curDate.getFullYear() +
        "-" +
        (curDate.getMonth() + 1) +
        "-" +
        curDate.getDate() +
        "-" +
        endTimeCalculated
    );
    // console.log("endTimeCalculated", endTimeCalculated);
    let findEmp = await commonQuery.filterEmployee(
      employees,
      mongoose.Types.ObjectId(data.salon_id),
      mongoose.Types.ObjectId(data.service_id)
    );

    // if (data.promocode_id) {
    //   let _id = mongoose.Types.ObjectId(data.promocode_id);
    //   let dataToPass = mongoose.Types.ObjectId(data.user_id);
    //   let addInPromocode = await commonQuery.addUserIdToPromocode(
    //     promocodes,
    //     _id,
    //     dataToPass
    //   );
    //   // console.log("INA", addInPromocode);
    // }

    //console.log("FINDEMP", findEmp);

    if (!findEmp) {
    } else {
      var empId = findEmp[0]._id;

      // console.log(empId);

      let salon_connected_id;
      let condition = { _id: mongoose.Types.ObjectId(data.salon_id) };
      let connectedAccountId = await commonQuery.findoneData(salons, condition);
      // console.log("CONNECTEDID", connectedAccountId);
      if (connectedAccountId) {
        salon_connected_id = connectedAccountId.connected_account_id;
        // console.log("connected_account_id", salon_connected_id);
      }

      let saveAppointment = new appointments({
        salon_id: data.salon_id,
        user_id: data.user_id,
        totalamount: data.totalamount,
        service: data.service_id,
        duration: data.duration,
        starttime: starttime,
        user_id: data.user_id,
        endtime: endTimeCalculated,
        date: data.date,
        connected_account_id: salon_connected_id,
        employee_id: empId,
        paymentType: data.paymentType,
        orderId: orderId,
        starttimedate: starttimedate,
        endtimedate: endtimedate
      });

      // console.log("saveAppointment", saveAppointment);

      let bookAppointment = await commonQuery.InsertIntoCollection(
        appointments,
        saveAppointment
      );
      if (!bookAppointment) {
        reject("ERROR");
      } else {
        if (data.promocode_id) {
          let _id = mongoose.Types.ObjectId(data.promocode_id);
          let dataToPass = mongoose.Types.ObjectId(data.user_id);
          let addInPromocode = await commonQuery.addUserIdToPromocode(
            promocodes,
            _id,
            dataToPass
          );
          console.log(addInPromocode);
        }

        var message = {
          to: data.deviceToken,
          collapse_key: "your_collapse_key",

          notification: {
            title: "HI AMrut",
            body: "Body of your push notification"
          },

          data: {
            my_key: "AMRUT",
            my_another_key: "NADIM"
          }
        };

        fcm.send(message, async function(err, response) {
          if (err) {
            console.log("Something has gone wrong!", err);
          } else {
            console.log("Successfully sent with response: ", response);
          }
        });
        // console.log("BOOKAAIN CARD", bookAppointment);
        bookedAppointmentData = bookAppointment;
        // return bookAppointment;
      }
    }
  }
  //console.log("BOOKEDAPPOINTMENTDATA", bookedAppointmentData);
  return bookedAppointmentData;
}

/****************************************** */

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
      user_id: userId
    };
    let salonDetails = await commonQuery.fetch_one(salons, cond);
    if (salonDetails) {
      res.json(
        Response(constant.SUCCESS_CODE, constant.FETCHED_ALL_DATA, salonDetails)
      );
    }
  } else {
    res.json(Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null));
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
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  if (req.body.user_id) {
    var salonId = await util.getSalonId(req.body.user_id);
    let serviceCond = {
      salon_id: salonId
    };
    // let pageSize = 100;
    // let page = 1;
    // let serviceList = await commonQuery.fetch_all(services, salonCond);
    let serviceList = await commonQuery.fetch_all_paginated(
      salonservices,
      serviceCond,
      pageSize,
      currentPage
    );
    let serviceCount = await commonQuery.findCount(salonservices, serviceCond);
    let serviceDetails = {
      serviceList: serviceList,
      serviceCount: serviceCount
    };
    //console.log("serviceList", serviceList); return;
    res.json(
      Response(constant.SUCCESS_CODE, constant.FETCHED_ALL_DATA, serviceDetails)
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
  //console.log("req.body", req.body); //return;
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  if (req.body.user_id) {
    // var employeeList = [];
    var salonId = await util.getSalonId(req.body.user_id);
    let empCond = {
      salon_id: salonId
    };
    // console.log("pageSize", pageSize);
    //let pageSize = 100;
    //let page = 1;

    let employeeData = await commonQuery.find_all_employee_paginate(
      employees,
      empCond,
      pageSize,
      currentPage
    );
    let employeeCount = await commonQuery.findCount(employees, empCond);
    let employeeDetails = {
      employeeData: employeeData,
      employeeCount: employeeCount
    };
    // console.log("employeeList", employeeList); return;
    res.json(
      Response(
        constant.SUCCESS_CODE,
        constant.FETCHED_ALL_DATA,
        employeeDetails
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
      _id: req.body.id
    };
    let updateData = {
      price: req.body.price,
      duration: req.body.duration
    };
    let updateService = await commonQuery.updateOne(
      salonservices,
      updateCond,
      updateData
    );
    // console.log("updateService", updateService);
    if (updateService) {
      res.json(
        Response(constant.SUCCESS_CODE, constant.SERVICE_UPDATED, updateService)
      );
    }
  } else {
    return res.json(
      Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
    );
  }
}

async function removeEmployee(req, res) {
  // console.log("req.body", req.body); return;
  if (req.body._id) {
    let updateCond = {
      _id: req.body._id
    };

    let removeEmp = await commonQuery.hard_delete(employees, updateCond);
    // console.log("updateService", updateService);
    if (removeEmp) {
      let salonUpdate = await commonQuery.removeEmployeeFromSalon(
        salons,
        req.body.salon_id,
        req.body._id
      );

      if (!salonUpdate) {
        Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, error);
      } else {
      }
      res.json(
        Response(constant.SUCCESS_CODE, constant.DELETED_SUCCESS, removeEmp)
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
    };
    let salonSotList = await commonQuery.fetch_all_sort_by_order(
      salonweeklyslots,
      cond
    );
    //console.log("salonSotList", salonSotList);
    if (salonSotList) {
      res.json(
        Response(constant.SUCCESS_CODE, constant.FETCHED_ALL_DATA, salonSotList)
      );
    }
  } else {
    return res.json(
      Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
    );
  }
}

function createCardToken(req, res) {
  // console.log(req.body);
  var card_id;
  var token_id;
  async function createCardToken() {
    try {
      if (req.body && req.body.number) {
        stripe.tokens.create(
          {
            card: {
              number: req.body.number,
              exp_month: req.body.exp_month,
              exp_year: req.body.exp_year,
              cvc: req.body.cvc
            }
          },
          async function(err, token) {
            if (err) {
              // console.log("ERROR", err);
              return res.json(
                Response(
                  constant.ERROR_CODE,
                  constant.CARD_DATA_INVALID,
                  err.Error
                )
              );
            } else {
              // console.log(token);
              token_id = token["id"];
              card_id = token["card"]["id"];
              stripe.customers.createSource(
                req.body.customer_id,
                { source: token_id },
                async function(err, card) {
                  if (err) {
                    console.log(err);
                  } else {
                    //  console.log(card);
                    stripe.subscriptions.create(
                      {
                        customer: req.body.customer_id,
                        items: [{ plan: req.body.plan_id }]
                      },
                      async function(err, subscription) {
                        if (err) {
                          return res.json(
                            Response(
                              constant.ERROR_CODE,
                              constant.FAILED_TO_SUBSCRIBE,
                              err.Error
                            )
                          );
                        } else {
                          let condition = {
                            _id: mongoose.Types.ObjectId(req.body.salon_id)
                          };
                          let updateCondition = { isSubscribed: true };
                          let updateSalonDetails = await commonQuery.updateOneDocument(
                            salons,
                            condition,
                            updateCondition
                          );
                          //console.log("SSS", updateSalonDetails);
                          if (updateSalonDetails) {
                            let updateUserCondition = {
                              _id: mongoose.Types.ObjectId(
                                updateSalonDetails["user_id"]
                              )
                            };
                            let updateCondition = { isSubscribed: true };
                            let updateUserTableDetails = await commonQuery.updateOneDocument(
                              users,
                              updateUserCondition,
                              updateCondition
                            );
                            //  console.log(updateUserTableDetails);
                            if (updateUserTableDetails) {
                              let saveSalonSubscription = new salonSubscriptions(
                                {
                                  salon_id: req.body.salon_id,
                                  user_id: updateSalonDetails["user_id"],
                                  expiry_date:
                                    subscription["current_period_end"],
                                  created_on:
                                    subscription["current_period_start"],
                                  customer_id: subscription["customer"],
                                  plan_id: subscription["plan"]["id"],
                                  subscription_id: subscription["id"],
                                  product_id: subscription["plan"]["product"],
                                  isActive: subscription["status"]
                                }
                              );

                              let addSalonSubscription = await commonQuery.InsertIntoCollection(
                                salonSubscriptions,
                                saveSalonSubscription
                              );
                              if (addSalonSubscription) {
                                res.json(
                                  Response(
                                    constant.SUCCESS_CODE,
                                    constant.SUBSCRIPTION_CREATED,
                                    addSalonSubscription
                                  )
                                );
                              } else {
                                return res.json(
                                  Response(
                                    constant.ERROR_CODE,
                                    constant.FAILED_TO_SUBSCRIBE,
                                    null
                                  )
                                );
                              }
                            }
                          }
                        }
                      }
                    );
                  }
                }
              );
            }
          }
        );
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  createCardToken().then(function() {});
}

function subscribedSalonDetails(req, res) {
  // console.log("hello", req.body);
  async function subscribedSalonDetails() {
    try {
      if (req.body && req.body.salon_id) {
        let condition = {
          salon_id: mongoose.Types.ObjectId(req.body.salon_id)
        };
        let salonSubscriptionDetails = await commonQuery.getSalonSubscriptionDetails(
          salonSubscriptions,
          condition
        );
        //  console.log(salonSubscriptionDetails);
        if (!salonSubscriptionDetails) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              salonSubscriptionDetails
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
  subscribedSalonDetails().then(function() {});
}

function deletePromocode(req, res) {
  async function deletePromocode() {
    try {
      if (req.body && req.body.promocode_id) {
        let condition = { _id: mongoose.Types.ObjectId(req.body.promocode_id) };
        let updateCondition = { isActive: false, isDeleted: true };

        let deletePromocodes = await commonQuery.updateOneDocument(
          promocodes,
          condition,
          updateCondition
        );

        if (!deletePromocodes) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.DELETED_SUCCESS,
              deletePromocodes
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
  deletePromocode().then(function() {});
}

function connectStripeAccount(req, res) {
  async function connectStripeAccount() {
    try {
      if (req.body && req.body.salon_id) {
        stripe.oauth
          .token({
            grant_type: "authorization_code",
            code: req.body.code
          })
          .then(async function(response) {
            // asynchronously called
            var connected_account_ID = response.stripe_user_id;
            // console.log(connected_account_ID);
            let condition = { _id: mongoose.Types.ObjectId(req.body.salon_id) };
            let updateCondition = {
              connected_account_id: connected_account_ID,
              isStripeCreated: true
            };
            let updateAccountConnectId = await commonQuery.updateOneDocument(
              salons,
              condition,
              updateCondition
            );

            if (!updateAccountConnectId) {
              res.json(
                Response(constant.ERROR_CODE, constant.FAILED_TO_CONNECT, null)
              );
            } else {
              res.json(
                Response(
                  constant.SUCCESS_CODE,
                  constant.ACCOUNT_CONNECTED,
                  updateAccountConnectId
                )
              );
            }
          });
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  connectStripeAccount().then(function() {});
}

function appointmentCompleted(req, res) {
  async function appointmentCompleted() {
    try {
      if (req.body && req.body.booking_id) {
        let condition = { _id: mongoose.Types.ObjectId(req.body.booking_id) };
        let updateCondition = { isActive: false, isCompleted: true };
        let findBooking = await commonQuery.updateOneDocument(
          appointments,
          condition,
          updateCondition
        );
        if (!findBooking) {
        } else {
          //   console.log("Booking", findBooking);

          let condition = {
            _id: mongoose.Types.ObjectId(findBooking["salon_id"])
          };
          let findConnectedId = await commonQuery.findoneData(
            salons,
            condition
          );

          // console.log(findConnectedId.connected_account_id);
          if (findConnectedId) {
            // stripe.paymentIntents
            //   .create({
            //     payment_method_types: ["card"],
            //     amount: findBooking.totalamount,
            //     currency: "USD",
            //     transfer_data: {
            //       destination: findConnectedId.connected_account_id
            //     }
            //   })
            //   .then(async function(paymentIntent) {
            //     // asynchronously called
            //     console.log("PAYMENT INTENT", paymentIntent);
            //     if (paymentIntent) {
            //     }
            //   });
            stripe.transfers.create(
              {
                amount: findBooking.totalamount,
                currency: "USD",
                destination: findConnectedId.connected_account_id
              },
              function(err, transfer) {
                // asynchronously called
                if (err) {
                  //  console.log("error", err);
                } else {
                  // console.log("TRANSFER", transfer);
                }
              }
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
  appointmentCompleted().then(function() {});
}

function getUpcomingbookings(req, res) {
  let pageSize =
    +req.body.pageSize || +req.body.pageSize ? req.body.pageSize : +10;
  let page = +req.body.page || +req.body.page ? req.body.page : +1;
  //  console.log("II", req.body);
  var ascend = req.body.ascend;
  let bookingCount;
  let upcond;
  let compcond;
  async function getUpcomingbookings() {
    try {
      let from = "users";
      let localfield = "user_id";
      let foreignfield = "_id";

      let condition = {};

      if (req.body && req.body.salon_id) {
        if (req.body.type === "upcoming") {
          condition = {
            salon_id: mongoose.Types.ObjectId(req.body.salon_id),
            isCompleted: false,
            isActive: true
          };
          upcond = {
            salon_id: mongoose.Types.ObjectId(req.body.salon_id),
            isCompleted: false,
            isActive: true
          };
        } else if (req.body.type === "completed") {
          condition = {
            salon_id: mongoose.Types.ObjectId(req.body.salon_id),
            isCompleted: true,
            isActive: false
          };
          compcond = {
            salon_id: mongoose.Types.ObjectId(req.body.salon_id),
            isCompleted: true,
            isActive: false
          };
        } else {
          condition = {
            salon_id: mongoose.Types.ObjectId(req.body.salon_id),
            isCompleted: false,
            isActive: true
          };
          upcond = {
            salon_id: mongoose.Types.ObjectId(req.body.salon_id),
            isCompleted: false,
            isActive: true
          };
        }

        let bookingList = await commonQuery.getUpcomingBookings(
          appointments,
          condition,
          from,
          localfield,
          foreignfield,
          pageSize,
          page,
          ascend
        );
        if (!bookingList) {
        } else {
          // console.log(bookingList);
          let cond;
          if (req.body.type === "upcoming") {
            cond = upcond;
          } else {
            cond = compcond;
          }
          bookingCount = await commonQuery.findCount(appointments, cond);

          let dataToPass = {
            data: bookingList,
            count: bookingCount
          };
          //console.log("dataToPass", dataToPass);
          res.json(
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
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  getUpcomingbookings().then(function() {});
}

function getChangeInBookingsData(req, res) {
  async function getChangeInBookingsData() {
    try {
      if (req.body && req.body.type === "upcoming") {
        let condition = {
          salon_id: mongoose.Types.ObjectId(req.body.salon_id),
          isCompleted: false,
          isActive: true
        };
        let pipeline = [
          {
            $match: condition
          }
        ];

        let changeInData = appointments.watch(pipeline);
        console.log("changeInData", changeInData);
      }
    } catch (error) {}
  }
  getChangeInBookingsData().then(function() {});
}

function getSalonWeeklyDetails(req, res) {
  async function getSalonWeeklyDetails() {
    try {
      if (req.body && req.body.salon_id) {
        let condition = {
          salon_id: mongoose.Types.ObjectId(req.body.salon_id)
        };

        let salonWeekDays = await commonQuery.fetchSalonDays(
          salonweeklyslots,
          condition
        );

        if (!salonWeekDays) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              salonWeekDays
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
  getSalonWeeklyDetails().then(function() {});
}

function validatePromocode(req, res) {
  console.log(req.body);
  async function validatePromocode() {
    try {
      if (req.body && req.body.user_id) {
        let user_id = mongoose.Types.ObjectId(req.body.user_id);
        let salon_id = mongoose.Types.ObjectId(req.body.salon_id);
        let promocode_id = mongoose.Types.ObjectId(req.body.promocode_id);

        let checkIfPromocode = await commonQuery.filterPromocode(
          promocodes,
          user_id,
          salon_id,
          promocode_id
        );
        if (!checkIfPromocode.length) {
          let dataToPass = {
            status: false
          };
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.PROMOCODE_APPLIED,
              dataToPass
            )
          );
        } else {
          let dataToPass = {
            status: true
          };
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.PROMOCODE_USED_ALREADY,
              dataToPass
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
  validatePromocode().then(function() {});
}
