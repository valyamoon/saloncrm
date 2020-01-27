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
    removeEmployee: removeEmployee
};

/**
 * Function is use to Save salon Data
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function saveSalonDetails(req, res) {
    console.log("IN SSALON", req.body);

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

                    let ensureIndex = await commonQuery.ensureIndex(salons);
                    if (ensureIndex) {
                        console.log("dbindexed");
                    }

                    let saveSalon = await commonQuery.InsertIntoCollection(
                        salons,
                        salonData
                    );

                    if (!saveSalon) {
                    } else {
                        let updateCondition = { isSubmitted: true };
                        let condition = { _id: mongoose.Types.ObjectId(req.body.user_id) };
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
        } catch (error) {

        }

        saveSalonDetails().then(function (data) { });
    }
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
        // console.log("req.body", req.body); return;
        try {
            if (req.body) {
                console.log("req.body.services_id", req.body.services_id)
                let lat = +req.body.lat;
                let long = +req.body.long;
                let name = req.body.name;
                let pageSize = +req.body.pageSize || +req.body.pageSize ? req.body.pageSize : +10;
                let page = +req.body.page || +req.body.page ? req.body.page : +1;
                let distanceToCover = req.body.distance;
                let dynamicQuery = req.body.services_id;
                console.log("dynamicQuery", dynamicQuery);
                let salonList = await commonQuery.fetch_near_salons(
                    salons,
                    pageSize,
                    page,
                    dynamicQuery,
                    distanceToCover,
                    lat,
                    long
                );
                if (!salonList) { } else {
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


        }
        catch (error) {

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
            if (req.body.salon_id) {
                let pageSize = +req.body.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
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

    getReviewsAndRatingsList().then(function () { });
}
/**
 * Function is use to Add services with respect to salon
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
// function addSalonServices(req, res) {
//     // console.log(req.body);
//     // return;;
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
//                     if (!updateSalonData) { } else { }

//                     res.json(
//                         Response(
//                             constant.SUCCESS_CODE,
//                             constant.ADDED_SUCCESS,
//                             saveServiceToSalon
//                         )
//                     );
//                 }
//             }
//         } catch (error) { }
//     }

//     addSalonServices().then(function () { });
// }

async function addSalonServices(req, res) {
    if (req.body.category_id && req.body.salon_id && req.body.services) {
        var salonService = [];
        var categoryId = req.body.category_id;
        var salonId = req.body.salon_id;
        async.each(req.body.services, async function (serviceData, firstCB) {
            let serviceName = await util.getServcieName(services, serviceData.service_id);
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
                    if (!updateSalonData) { } else {
                        console.log("saveServiceToSalon===========>", saveServiceToSalon);
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
                }
                let updateServiceToSalon = await commonQuery.updateOne(salonservices, countCond, updateData);
                salonService.push(updateServiceToSalon);
            }

            // firstCB();
        }, function (err, data) {
            if (err) {
                console.log("Error @427", err)
            } else {
                res.json(
                    Response(
                        constant.SUCCESS_CODE,
                        constant.ADDED_SUCCESS,
                        salonService
                    )
                );
            }
        });


    } else {
        return res.json(
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
        );
    }

}

async function getRemovesalonservice(req, res) {
    //  console.log("req.body", req.body); return;
    if (req.body.salonService && req.body.type) {
        var updateData = {};
        let condition = {
            "_id": req.body.salonService._id,
            "service_id": req.body.salonService.service_id,
            "category_id": req.body.salonService.category_id
        };
        if (req.body.type == 'restore') {
            updateData = {
                is_active: true

            }
        } else {
            updateData = {
                is_active: false

            }
        }

        let updateService = await commonQuery.updateOne(salonservices, condition, updateData);

        // console.log("req.body.salonService", req.body.salonService);
        // let removeService = await commonQuery.hard_delete(salonservices, condition)
        if (updateService) {
            res.json(
                Response(
                    constant.SUCCESS_CODE,
                    constant.DELETED_SUCCESS,
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
                let conditon = { salon_id: mongoose.Types.ObjectId(req.body.salon_id) };

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
        } catch (error) { }
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
                    } else { }

                    res.json(
                        Response(
                            constant.SUCCESS_CODE,
                            constant.ADDED_SUCCESS,
                            saveEmployee
                        )
                    );
                }
            }
        } catch (error) { }
    }
    addEmployeeToSalon().then(function () { });
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

    addServicesToEmployee().then(function () { });
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


