"use strict";

const mongoose = require("mongoose");
const utility = require("../../../../lib/utility.js");
// const fcm = require("fcm-notification");
// const privateKey = require("./privatekey");
// const FCM = new fcm(privateKey);
const async = require("async");
const cron = require("node-cron");
const Moment = require("moment");
const MomentRange = require("moment-range");

const completedbookings = require("../model/completedbookingsSchema");

const Mmoment = MomentRange.extendMoment(Moment);

var FCM = require("fcm-node");
var serverKey =
  "AAAAP9-1hEk:APA91bGeTlqXHIGH3ttGdruGj0icePvUSqWQ2H64s_zoP9bt8EhsOcqMKKszpGY8bMAGPxs_nq4ySmYUuBCacmLeplDsq5pNodO4GFXGsTNgXaAGTdu6hreogdM4rRbU8OP3s-QZ2rK7";
var fcm = new FCM(serverKey);
var ts = require("time-slots-generator");
const moment = require("moment-timezone");

const jwt = require("jsonwebtoken");
const stripe = require("stripe")("sk_live_7AMm4SiOjGahMNq9AyLNirqw00cw4K9Rmg");
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
const commonQuery = require("../../../../lib/commonQuery.js");
const util = require("../../../../lib/util");
const s3Service = require("../../s3Service/s3Service").getInstance();

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
  getChangeInBookingsData: getChangeInBookingsData,
  autoCompleteBookings: autoCompleteBookings,
  getCompletedBookingTransaction: getCompletedBookingTransaction,
  getMontlyUsers: getMontlyUsers,
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
          isDeleted: false,
        };
        // cins
        let checkUser = await commonQuery.findoneData(users, conditon);

        if (!checkUser) {
        } else {
          var image_path;
          let coordinates = [req.body.long, req.body.lat];

          let locations = {
            type: "Point",
            coordinates: coordinates,
          };
          if (req.files) {
            let timeStamp = Date.now();

            let extension;
            let db_path = "";
            let path = "";
            let imgName;

            if (req.files) {
              extension = req.files.image["name"].split(".");
              let imgOriginalName = req.files.image["name"];
              path = timeStamp + "_" + imgOriginalName;
              imgName = path;

              db_path = `${Config.s3.bucketBaseUrl}/${path}`;
            }
            if (db_path) {
              image_path = db_path;
            }
            if (path != "") {
              let extensionArray = ["jpg", "jpeg", "png", "jfif"];
              let format = extension[extension.length - 1];
              if (extensionArray.includes(format)) {
                let result = await s3Service
                  .fileUpload(imgName, req.files.image["data"])
                  .then(async () => {
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
                          country: "US",
                        },
                      },
                      async function (err, customer) {
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
                            customer_id: customer_id_value,
                          });

                          let saveSalon = await commonQuery.InsertIntoCollection(
                            salons,
                            salonData
                          );

                          if (!saveSalon) {
                          } else {
                            var url = saveSalon.image;
                            saveSalon.image = url;
                            let updateCondition = {
                              isSubmitted: true,
                            };
                            let condition = {
                              _id: mongoose.Types.ObjectId(req.body.user_id),
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
                  })
                  .catch();
              } else {
                return res.json(
                  Response(constant.ERROR_CODE, constant.FILE_UNSUPPORTED)
                );
              }
            }
          } else {
            return res.json(Response(constant.ERROR_CODE, "Missing image"));
          }
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  saveSalonDetails().then(function () {});
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
      var salonscount;
      var intervals;
      var timeArray = [];
      var bookedSlotsArray = [];
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
            "servicesSelected.price": 1,
          };
        } else if (req.body.sort === "price" && req.body.sortOrder === "dsc") {
          sortParam = {
            "servicesSelected.price": -1,
          };
        } else if (
          req.body.sort === "distance" &&
          req.body.sortOrder === "asc"
        ) {
          sortParam = {
            "dist.calculated": 1,
          };
        } else if (req.body.sort === "price" && req.body.sortOrder === "dsc") {
          sortParam = {
            "dist.calculated": -1,
          };
        } else {
          sortParam = {
            "servicesSelected.price": 1,
          };
        }

        let salonCount = await commonQuery.findSalonsCount(
          salons,
          long,
          lat,
          service_id,
          name,
          sortParam
        );
        if (salonCount) {
          salonscount = salonCount;
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

        if (!salonList.length) {
          res.json(
            Response(constant.SUCCESS_CODE, constant.DATA_NOT_FOUND, salonList)
          );
        } else {
          let slots = [];
          salonList.forEach(async function (c) {
            let ootime = new Date(c.opentime).toLocaleString({
              timeZone: c.timezonestring,
            });
            let cctime = new Date(c.closetime).toLocaleString({
              timeZone: c.timezonestring,
            });

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
              code: c.code,
              date: req.body.date,
              location: c.location,
              address: c.address,
              servicename: c.service["servicename"],
              services: c.service,
              duration: c.service["duration"],
            });
          });

          slots.forEach(async function (v) {
            // let condition = { salon_id: mongoose.Types.ObjectId(v._id) };
            // let findBookedSlots = await commonQuery.fetch_all(
            //   appointments,
            //   condition
            // );

            let todaysDate = new Date();

            let comingDate = req.body.date;
            todaysDate = moment(todaysDate)
              .tz(v.timezonestring)
              .format("DD:MM:YYYY");
            comingDate = moment(comingDate)
              .tz(v.timezonestring)
              .format("DD:MM:YYYY");

            if (todaysDate === comingDate) {
              let currentTime = new Date().toLocaleString("en-US", {
                timeZone: v.timezonestring,
              });

              if (currentTime === v.cltime) {
                times_ara = [];
              }

              starttime = moment(new Date(currentTime.toString())).format(
                "YYYY-MM-DDTHH:mm:00.000[Z]"
              );
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

            endTiming = moment(endtime).tz(v.timezonestring).format("HH:mm");

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

            times_ara.forEach(function (jj) {
              timeArray.push({ time: jj, status: false });
            });

            var url = v.image;
            v.image = url;

            console.log("VVVV", v);

            salonListingNew.push({
              starttime: v.optime,
              date: v.date,
              _id: v._id,
              code: v.code,
              closetime: v.cltime,
              name: v.salon,
              timezonestring: v.timezonestring,
              slots: timeArray,
              image: v.image,
              contact: v.contact,
              avgRatings: v.avgRatings,
              distance: v.distance,
              location: v.location,
              address: v.address,
              servicename: v.servicename,
              service: v.services,
            });
          });
          fetchbookedSlots(salonListingNew)
            .then((data) => {})
            .catch((data) => {
              for (var k = 0; k < data.length; k++) {
                bookedSlotsArray.push(data[k]["start"].format("HH:mm"));
                bookedSlotsArray.push(data[k]["end"].format("HH:mm"));
              }
              console.log("salonListinfNEW", salonListingNew);
              var findEmp = commonQuery
                .filterEmployee(
                  employees,
                  mongoose.Types.ObjectId(salonListingNew._id),
                  mongoose.Types.ObjectId(salonListingNew.service)
                )
                .then((sucess) => {
                  console.log("success", sucess);
                })
                .catch((error) => {
                  console.log("error", error);
                });

              console.log("employes", findEmp);

              for (var i = 0; i < timeArray.length; i++) {
                for (var j = 0; j < bookedSlotsArray.length; j++) {
                  if (timeArray[i].time === bookedSlotsArray[j]) {
                    timeArray[i].status = true;
                  }
                }
              }

              salonListingNew.slots = timeArray;
              let dataToPass = {};

              if (salonscount === 0) {
                dataToPass = {
                  salon: [],
                  count: 0,
                };
              } else {
                dataToPass = {
                  salon: salonListingNew,
                  count: salonscount,
                };
              }

              return res.json(
                Response(
                  constant.SUCCESS_CODE,
                  constant.FETCHED_ALL_DATA,
                  //salonList
                  dataToPass
                )
              );
            });
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  getSalons().then(function () {});
}

async function fetchbookedSlots(data) {
  return new Promise(async function (reject, resolve) {
    var bookedSlotsData = [];
    var tempSlots = [];
    var range1 = {};
    var range2 = {};
    var range2Array = [];
    var bookedSlotsArrayToSend = [];
    var tempRange2Array = [];
    var tempRange1Array = [];
    var range1Array = [];
    var collectedAppointments = [];
    var alreadyBookedSlots = [];
    if (data) {
      data.forEach(async function (s) {
        var newDate;
        newDate =
          new Date(s.date).getFullYear() +
          "-" +
          (new Date(s.date).getMonth() + 1) +
          "-" +
          new Date(s.date).getDate();

        var Cudate = moment(s.date).tz(s.timezonestring).format("DD:MM:YYYY");

        try {
          s.slots.forEach(function (i, index) {
            tempSlots.push(i.time);
          });

          for (var i = 0; i < tempSlots.length; i++) {
            range2Array.push({ start: tempSlots[i], end: tempSlots[++i] });

            --i;
          }

          let condition = {
            salon_id: mongoose.Types.ObjectId(s._id),
          };

          let bookedSlots = await commonQuery.fetch_all(
            appointments,
            condition
          );

          if (bookedSlots) {
            bookedSlots.forEach(async (u) => {
              try {
                if (
                  Cudate ===
                  moment(u.date).tz(s.timezonestring).format("DD:MM:YYYY")
                ) {
                  collectedAppointments.push(u);

                  range1 = Mmoment.range(
                    moment(
                      newDate.toString() + "T" + u.starttime.toString(),
                      "YYYY-MM-DD HH:mm "
                    ),
                    moment(
                      newDate.toString() + "T" + u.endtime.toString(),
                      "YYYY-MM-DD HH:mm "
                    )
                  );

                  range1Array.push(range1);
                }
              } catch (error) {}
            });
          } else {
            console.log("error");
          }
          resolve(bookedSlotsArrayToSend);
        } catch (error) {}

        for (var j = 0; j < range2Array.length; j++) {
          range2 = Mmoment.range(
            moment(
              newDate.toString() + "T" + range2Array[j].start,
              "YYYY-MM-DD HH:mm "
            ),
            moment(
              newDate.toString() + "T" + range2Array[j].end,
              "YYYY-MM-DD HH:mm "
            )
          );

          tempRange2Array.push(range2);
        }

        for (var i = 0; i < tempRange2Array.length; i++) {
          for (var j = 0; j < range1Array.length; j++) {
            if (tempRange2Array[i].overlaps(range1Array[j])) {
              bookedSlotsArrayToSend.push(tempRange2Array[i]);
            } else {
              console.log(bookedSlotsArrayToSend);
            }
          }
        }
      });
    }
  });
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
          isDeleted: false,
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
          var url = salonDetails[0].image;
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

  getSalonDetails().then(function () {});
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
          salon_id: mongoose.Types.ObjectId(req.body.salon_id),
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

  getReviewsAndRatingsList().then(function () {});
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
      async function (serviceData, firstCB) {
        let serviceName = await util.getServcieName(
          services,
          serviceData.service_id
        );
        var categoryName = await util.getCategoryName(categories, categoryId);

        var countCond = {
          salon_id: salonId,
          service_id: serviceData.service_id,
          category_id: categoryId,
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
            categoryname: categoryName,
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
            categoryname: categoryName,
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
      function (err, data) {
        if (err) {
          console.log("Error @898", err);
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
      category_id: req.body.salonService.category_id,
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
          salon_id: req.body.salon_id,
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

  addPromocodes().then(function () {});
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
          salon_id: mongoose.Types.ObjectId(req.body.salon_id),
          isActive: true,
          isDeleted: false,
        };

        let fetchPromoCodes = await commonQuery.findAll(promocodes, conditon);
        //{ usedbyusers: { $nin: [ ObjectId("5e43e6ceafc9ca277790242f") ] } }

        if (!fetchPromoCodes) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
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

  getPromoCodes().then(function () {});
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
          _id: mongoose.Types.ObjectId(req.body.salon_id),
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

  getSalonServices().then(function () {});
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
          salon_id: req.body.salon_id,
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

  addEmployeeToSalon().then(function () {});
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
      _id: req.body.id,
    };

    let updateEmp = await commonQuery.updateOneDocument(employees, updateCond, {
      name: req.body.name,
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
    try {
      if (req.body.employee_id && req.body) {
        let tempSev = [];
        req.body.salonservices_id.forEach(function (v) {
          tempSev.push(mongoose.Types.ObjectId(v));
        });

        let empId = req.body.employee_id;
        var empCond = {
          _id: empId,
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
            salonservices_id: req.body.salonservices_id,
          };
          let updateService = await commonQuery.updateOne(
            employees,
            empCond,
            updateData
          );

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

  addServicesToEmployee().then(function () {});
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

  removeServiceToEmployee().then(function () {});
}

function getCategoriesAndServicesOfSalon(req, res) {
  async function getCategoriesAndServicesOfSalon() {
    try {
      if (req.body && req.body.salon_id) {
        let condition = {
          "inventory_docs.salon_id": mongoose.Types.ObjectId(req.body.salon_id),
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

  getCategoriesAndServicesOfSalon().then(function () {});
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
        async function (record) {
          let slotData = {
            user_id: req.body.user_id,
            salon_id: req.body.salon_id,
            days: record.days,
            starttime: record.opentime,
            endtime: record.closetime,
            status: record.status,
            order_sort: record.order_sort,
          };

          let countCond = {
            user_id: req.body.user_id,
            salon_id: req.body.salon_id,
            days: record.days,
          };

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
              days: record.days,
            };
            let fetchData = {
              user_id: req.body.user_id,
              salon_id: req.body.salon_id,
              days: record.days,
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
              days: fetchOne.days,
            };
            let updateSlotData = {
              starttime: record.opentime,
              endtime: record.closetime,
              status: record.status,
              order_sort: record.order_sort,
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
        function (err) {
          if (err) {
            console.log("Error @ 1390", err);
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
          _id: mongoose.Types.ObjectId(req.body.salon_id),
        };
        let viewSalon = await commonQuery.fetch_one(salons, condition);
        if (!viewSalon) {
          return res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          let findCondition = {
            _id: mongoose.Types.ObjectId(viewSalon.user_id),
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
            email: userData,
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

  viewSalonDetails().then(function () {});
}

function updateSalonDetails(req, res) {
  async function updateSalonDetails() {
    try {
      if (req.body && req.body.salon_id) {
        let coordinates = [req.body.long, req.body.lat];

        let locations = {
          type: "Point",
          coordinates: coordinates,
        };

        if (req.files) {
          let image_path;
          let timeStamp = Date.now();

          let extension;
          let path = "";
          let imgName;

          extension = req.files.image["name"].split(".");
          let imgOriginalName = req.files.image["name"];
          path = timeStamp + "_" + imgOriginalName;
          imgName = path;

          image_path = `${Config.s3.bucketBaseUrl}/${path}`;

          let extensionArray = ["jpg", "jpeg", "png", "jfif"];
          let format = extension[extension.length - 1];
          if (extensionArray.includes(format)) {
            await s3Service.fileUpload(imgName, req.files.image.data);
            let condition = {
              _id: mongoose.Types.ObjectId(req.body.salon_id),
            };
            let updateCondition = {
              name: req.body.name,
              salonaddress: req.body.salonaddress,
              contact: req.body.contact,
              code: req.body.code,
              opentime: req.body.opentime,
              closetime: req.body.closetime,
              image: image_path,
              location: locations,
            };

            let updateSalon = await commonQuery.updateOneDocument(
              salons,
              condition,
              updateCondition
            );

            if (updateSalon) {
              res.json(
                Response(
                  constant.SUCCESS_CODE,
                  constant.NEW_DATA_ADDED,
                  updateSalon
                )
              );
            }
          } else {
            return res.json(
              Response(constant.ERROR_CODE, constant.FILE_UNSUPPORTED)
            );
          }
        } else if (!req.files) {
          let condition = {
            _id: mongoose.Types.ObjectId(req.body.salon_id),
          };
          let updateCondition = {
            name: req.body.name,
            salonaddress: req.body.salonaddress,
            contact: req.body.contact,
            code: req.body.code,
            opentime: req.body.opentime,
            closetime: req.body.closetime,
            location: locations,
          };

          let updateSalon = await commonQuery.updateOneDocument(
            salons,
            condition,
            updateCondition
          );

          if (updateSalon) {
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

  updateSalonDetails().then(function () {});
}

function fetchSalonData(req, res) {
  async function fetchSalonData() {
    try {
      if (req.body && req.body.user_id) {
        let condition = {
          user_id: mongoose.Types.ObjectId(req.body.user_id),
        };

        let getSalonData = await commonQuery.findoneData(salons, condition);

        if (!getSalonData) {
          return res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          var url = getSalonData.image;
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

  fetchSalonData().then(function () {});
}

async function bookSlot(data) {
  let bookedAppointmentData;
  var empId;
  var orderId = Math.random(1234567910)
    .toString(25)
    .replace(/[^a-z-^0-1000-z-aA-Z]+/g, "")
    .substr(0, 100);
  if (data.paymentType === "cash") {
    var starttime = data.time;

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

    let findEmp = await commonQuery.filterEmployee(
      employees,
      mongoose.Types.ObjectId(data.salon_id),
      mongoose.Types.ObjectId(data.service_id)
    );

    if (!findEmp) {
    } else {
      let checkCondition = { _id: mongoose.Types.ObjectId(data.salon_id) };
      let salonData = await commonQuery.findoneData(salons, checkCondition);

      var m = moment(
        data.date.toString(),
        "YYYY-MM-DD HH:mm:ss [Z]",
        salonData.timezonestring.toString()
      );
      var startT = m.clone().startOf("day");

      var endT = m.clone().endOf("day");

      let condition = {
        service: data.service_id,
        date: { $gte: startT, $lt: endT },
        salon_id: data.salon_id,
      };

      let checkAppointments = await commonQuery.fetch_all(
        appointments,
        condition
      );

      if (checkAppointments.length) {
        for (var i = 0; i < findEmp.length; i++) {
          console.log(findEmp[i]);
          for (var j = 0; j < checkAppointments.length; j++) {
            if (
              findEmp[i]["_id"].toString() ===
              checkAppointments[j]["employee_id"].toString()
            ) {
            } else {
              empId = findEmp[i]["_id"];
            }
          }
        }
      } else {
        empId = findEmp[0]._id;
      }

      let saveAppointment = new appointments({
        salon_id: data.salon_id,
        totalamount: data.totalamount,
        service: data.service_id,
        duration: data.duration,
        starttime: starttime,
        user_id: data.user_id,
        endtime: endTimeCalculated + "0",
        date: data.date,
        employee_id: empId,
        paymentType: data.paymentType,
        orderId: orderId,
        endtimedate: endtimedate.toISOString(),
        starttimedate: starttimedate.toISOString(),
      });

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
        }

        var message = {
          to: data.deviceToken ? data.deviceToken : "",
          collapse_key: "your_collapse_key",

          notification: {
            title: "BookApp",
            body:
              "Your Appointment is booked. Please login to see upcoming bookings.",
          },

          data: {
            my_key: "AMRUT",
            my_another_key: "NADIM",
          },
        };

        fcm.send(message, async function (err, response) {
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
    //
    // }

    if (!findEmp) {
    } else {
      var empId = findEmp[0]._id;
      // let checkCondition = { _id: mongoose.Types.ObjectId(data.salon_id) };
      // let salonData = await commonQuery.findoneData(salons, checkCondition);

      // var m = moment(
      //   data.date.toString(),
      //   "YYYY-MM-DD HH:mm:ss [Z]",
      //   salonData.timezonestring.toString()
      // );
      // var startT = m.clone().startOf("day");

      // var endT = m.clone().endOf("day");

      // console.log(startT, endT);

      // let condition = {
      //   service: data.service_id,
      //   date: { $gte: startT, $lt: endT },
      //   salon_id: data.salon_id
      // };

      // let checkAppointments = await commonQuery.fetch_all(
      //   appointments,
      //   condition
      // );

      // if (checkAppointments.length) {
      //   for (var i = 0; i < findEmp.length; i++) {
      //     console.log(findEmp[i]);
      //     for (var j = 0; j < checkAppointments.length; j++) {
      //       if (
      //         findEmp[i]["_id"].toString() ===
      //         checkAppointments[j]["employee_id"].toString()
      //       ) {
      //         console.log(findEmp[i]);
      //       } else {
      //         empId = findEmp[i]["_id"];
      //       }
      //     }
      //   }
      // } else {
      //   empId = findEmp[0]._id;
      // }

      let salon_connected_id;
      let condition = { _id: mongoose.Types.ObjectId(data.salon_id) };
      let connectedAccountId = await commonQuery.findoneData(salons, condition);

      if (connectedAccountId) {
        salon_connected_id = connectedAccountId.connected_account_id;
      }

      let saveAppointment = new appointments({
        salon_id: data.salon_id,
        totalamount: data.totalamount,
        service: data.service_id,
        duration: data.duration,
        starttime: starttime,
        user_id: data.user_id,
        endtime: endTimeCalculated + "0",
        date: data.date,
        connected_account_id: salon_connected_id,
        employee_id: empId,
        paymentType: data.paymentType,
        orderId: orderId,
        starttimedate: starttimedate,
        endtimedate: endtimedate,
      });

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
        }

        if (data.deviceToken) {
          var message = {
            to: data.deviceToken,
            collapse_key: "your_collapse_key",

            notification: {
              title: "BookApp",
              body:
                "Your Appointment is booked. Please login to see upcoming bookings.",
            },

            data: {
              my_key: "AMRUT",
              my_another_key: "NADIM",
            },
          };

          fcm.send(message, async function (err, response) {
            if (err) {
              console.log("Something has gone wrong!", err);
            } else {
              console.log("Successfully sent with response: ", response);
            }
          });
        }

        bookedAppointmentData = bookAppointment;
      }
    }
  }

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
  if (req.body.user_id) {
    let userId = req.body.user_id;
    let cond = {
      user_id: userId,
    };
    let salonDetails = await commonQuery.fetch_one(salons, cond);
    if (salonDetails) {
      var url = salonDetails.image;
      salonDetails.image = url;
      res.json(
        Response(constant.SUCCESS_CODE, constant.FETCHED_ALL_DATA, salonDetails)
      );
    }
    res.json(Response(constant.SUCCESS_CODE, constant.DATA_NOT_FOUND));
  } else {
    res.json(Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null));
  }
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
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  if (req.body.user_id) {
    var salonId = await util.getSalonId(req.body.user_id);
    let serviceCond = {
      salon_id: salonId,
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
      serviceCount: serviceCount,
    };

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
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  if (req.body.user_id) {
    // var employeeList = [];
    var salonId = await util.getSalonId(req.body.user_id);
    let empCond = {
      salon_id: salonId,
    };

    let employeeData = await commonQuery.find_all_employee_paginate(
      employees,
      empCond,
      pageSize,
      currentPage
    );
    let employeeCount = await commonQuery.findCount(employees, empCond);
    let employeeDetails = {
      employeeData: employeeData,
      employeeCount: employeeCount,
    };

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
  if (req.body) {
    let updateCond = {
      _id: req.body.id,
    };
    let updateData = {
      price: req.body.price,
      duration: req.body.duration,
    };
    let updateService = await commonQuery.updateOne(
      salonservices,
      updateCond,
      updateData
    );

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
  if (req.body._id) {
    let updateCond = {
      _id: req.body._id,
    };

    let removeEmp = await commonQuery.hard_delete(employees, updateCond);

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
  if (req.body.user_id && req.body.salon_id) {
    let cond = {
      user_id: req.body.user_id,
      salon_id: req.body.salon_id,
    };
    let salonSotList = await commonQuery.fetch_all_sort_by_order(
      salonweeklyslots,
      cond
    );

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
              cvc: req.body.cvc,
            },
          },
          async function (err, token) {
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
                async function (err, card) {
                  if (err) {
                    console.log(err);
                  } else {
                    //  console.log(card);
                    stripe.subscriptions.create(
                      {
                        customer: req.body.customer_id,
                        items: [{ plan: req.body.plan_id }],
                      },
                      async function (err, subscription) {
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
                            _id: mongoose.Types.ObjectId(req.body.salon_id),
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
                              ),
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
                                  isActive: subscription["status"],
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

  createCardToken().then(function () {});
}

function subscribedSalonDetails(req, res) {
  // console.log("hello", req.body);
  async function subscribedSalonDetails() {
    try {
      if (req.body && req.body.salon_id) {
        let condition = {
          salon_id: mongoose.Types.ObjectId(req.body.salon_id),
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

  subscribedSalonDetails().then(function () {});
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

  deletePromocode().then(function () {});
}

function connectStripeAccount(req, res) {
  async function connectStripeAccount() {
    try {
      if (req.body && req.body.salon_id) {
        stripe.oauth
          .token({
            grant_type: "authorization_code",
            code: req.body.code,
          })
          .then(async function (response) {
            // asynchronously called
            var connected_account_ID = response.stripe_user_id;
            // console.log(connected_account_ID);
            let condition = { _id: mongoose.Types.ObjectId(req.body.salon_id) };
            let updateCondition = {
              connected_account_id: connected_account_ID,
              isStripeCreated: true,
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

  connectStripeAccount().then(function () {});
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
          let condition = {
            _id: mongoose.Types.ObjectId(findBooking["salon_id"]),
          };
          let findConnectedId = await commonQuery.findoneData(
            salons,
            condition
          );

          if (findConnectedId) {
            let cDate = findBooking["date"];

            let afterDate = new Date();

            afterDate.setUTCDate(cDate.getDate() + 8);

            let completedBookingSave = new completedbookings({
              salon_id: findBooking["salon_id"],
              user_id: findBooking["user_id"],
              total_amount: findBooking["totalamount"],
              connected_account_id: findConnectedId.connected_account_id,
              onDate: findBooking["date"],
              booking_id: findBooking["_id"],
              transferDate: afterDate,
            });

            let schedulePaymentTransfer = await commonQuery.InsertIntoCollection(
              completedbookings,
              completedBookingSave
            );
            if (schedulePaymentTransfer) {
              res.json(
                Response(
                  constant.SUCCESS_CODE,
                  constant.PAYMENT_INITIATED,
                  schedulePaymentTransfer
                )
              );
            } else {
              res.json(
                Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
              );
            }
          }
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  appointmentCompleted().then(function () {});
}

function getUpcomingbookings(req, res) {
  let pageSize =
    +req.body.pageSize || +req.body.pageSize ? req.body.pageSize : +10;
  let page = +req.body.page || +req.body.page ? req.body.page : +1;
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
            isActive: true,
          };
          upcond = {
            salon_id: mongoose.Types.ObjectId(req.body.salon_id),
            isCompleted: false,
            isActive: true,
          };
        } else if (req.body.type === "completed") {
          condition = {
            salon_id: mongoose.Types.ObjectId(req.body.salon_id),
            isCompleted: true,
            isActive: false,
          };
          compcond = {
            salon_id: mongoose.Types.ObjectId(req.body.salon_id),
            isCompleted: true,
            isActive: false,
          };
        } else {
          condition = {
            salon_id: mongoose.Types.ObjectId(req.body.salon_id),
            isCompleted: false,
            isActive: true,
          };
          upcond = {
            salon_id: mongoose.Types.ObjectId(req.body.salon_id),
            isCompleted: false,
            isActive: true,
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
            count: bookingCount,
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

  getUpcomingbookings().then(function () {});
}

function getChangeInBookingsData(req, res) {
  async function getChangeInBookingsData() {
    try {
      if (req.body && req.body.type === "upcoming") {
        let condition = {
          salon_id: mongoose.Types.ObjectId(req.body.salon_id),
          isCompleted: false,
          isActive: true,
        };
        let pipeline = [
          {
            $match: condition,
          },
        ];

        let changeInData = appointments.watch(pipeline);
      }
    } catch (error) {}
  }

  getChangeInBookingsData().then(function () {});
}

function getSalonWeeklyDetails(req, res) {
  async function getSalonWeeklyDetails() {
    try {
      if (req.body && req.body.salon_id) {
        let condition = {
          salon_id: mongoose.Types.ObjectId(req.body.salon_id),
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

  getSalonWeeklyDetails().then(function () {});
}

function validatePromocode(req, res) {
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
            status: false,
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
            status: true,
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

  validatePromocode().then(function () {});
}

function getCompletedBookingTransaction(req, res) {
  async function getCompletedBookingTransaction() {
    try {
      let condition = {
        salon_id: req.body.salon_id,
      };

      let findTotalCount = await commonQuery.findCount(
        completedbookings,
        condition
      );

      let findBookingsPayment = await commonQuery.fetch_all(
        completedbookings,
        condition
      );

      if (!findBookingsPayment) {
        res.json(
          Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
        );
      } else {
        let dataToPass = {
          data: findBookingsPayment,
          count: findTotalCount,
        };
        res.json(
          Response(constant.SUCCESS_CODE, constant.FETCHED_ALL_DATA, dataToPass)
        );
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  getCompletedBookingTransaction().then(function () {});
}

function autoCompleteBookings() {
  async function autoCompleteBookings() {
    try {
      var todaysDate = moment().utc().format("YYYY-MM-DDTHH:mm:00.000[Z]");

      let condition = {
        isCompleted: false,
        isActive: true,
        date: { $lt: todaysDate },
      };

      let findToCompleteBookings = await commonQuery.findoneData(
        appointments,
        condition
      );

      if (findToCompleteBookings) {
        let condition = {
          _id: mongoose.Types.ObjectId(findToCompleteBookings["salon_id"]),
        };
        let findConnectedId = await commonQuery.findoneData(salons, condition);

        if (findConnectedId) {
          let cDate = findToCompleteBookings["date"];

          let afterDate = new Date();

          afterDate.setUTCDate(cDate.getDate() + 8);

          let completedBookingSave = new completedbookings({
            salon_id: findToCompleteBookings["salon_id"],
            user_id: findToCompleteBookings["user_id"],
            total_amount: findToCompleteBookings["totalamount"],
            connected_account_id: findConnectedId.connected_account_id,
            onDate: findToCompleteBookings["date"],
            booking_id: findToCompleteBookings["_id"],
            transferDate: afterDate,
          });

          let schedulePaymentTransfer = await commonQuery.InsertIntoCollection(
            completedbookings,
            completedBookingSave
          );
          if (schedulePaymentTransfer) {
            let condition = {
              _id: mongoose.Types.ObjectId(findToCompleteBookings["_id"]),
            };

            let dataToUpdate = {
              isCompleted: true,
              isActive: false,
            };

            let updatedData = await commonQuery.updateOneDocument(
              appointments,
              condition,
              dataToUpdate
            );

            if (updatedData) {
              console.log("updated");
            } else {
              console.log("error @2735");
            }
          } else {
            console.log("error @2716");
          }
        }
      }

      console.log(updatedData);
    } catch (error) {}
  }

  autoCompleteBookings().then(function () {});
}

cron.schedule("* * * * *", function () {
  autoCompleteBookings();
});

cron.schedule("* * * * * *", async function () {
  let todaysDate = new Date().toISOString();

  let findAllCompletedBookings = await commonQuery.fetch_all(completedbookings);

  for (var i = 0; i < findAllCompletedBookings.length; i++) {
    if (findAllCompletedBookings[i]["transferDate"] === todaysDate) {
      stripe.transfers.create(
        {
          amount: findAllCompletedBookings[i].totalamount,
          currency: "USD",
          destination: findAllCompletedBookings[i].connected_account_id,
        },
        async function (err, transfer) {
          // asynchronously called
          if (err) {
            console.log("error @ 2717", err);
          } else {
            let conditionToUpdate = {
              isTransferred: true,
            };
            let condition = { _id: findAllCompletedBookings[i]["_id"] };

            let updateStatusOfTransfer = await commonQuery.updateOneDocument(
              completedbookings,
              condition,
              conditionToUpdate
            );

            if (updateStatusOfTransfer) {
              res.json(
                Response(
                  constant.SUCCESS_CODE,
                  constant.PAYMENT_TRANSFER_SUCCESS,
                  updateStatusOfTransfer
                )
              );
            }
          }
        }
      );
    }
  }
});

function getMontlyUsers(req, res) {
  async function getMontlyUsers() {
    try {
      if (req.body && req.body.salon_id) {
        var date = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        var start = moment.utc(firstDay).startOf("day");
        var end = moment.utc(lastDay).endOf("day");

        let condition = {
          salon_id: mongoose.Types.ObjectId(req.body.salon_id),
          date: { $gte: start, $lt: end },
        };

        let CountOfUsers = await commonQuery.findCount(appointments, condition);

        if (CountOfUsers) {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              CountOfUsers
            )
          );
        } else {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  getMontlyUsers().then(function () {});
}
