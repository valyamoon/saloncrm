"use strict";

const mongoose = require("mongoose");
const utility = require("../../../../lib/utility.js");
const messageTemplates = require("../../../../lib/messagetemplates");

const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const mailer = require("../../../../lib/mailer");

const constant = require("../../../../config/constant.js");
const users = mongoose.model("users");
const roles = require("../../user/model/rolesSchema");
const salons = require("../../salon/model/salonSchema");
const categories = require("../../admin/model/categoriesSchema");
const reviewratings = require("../../salon/model/salonreviewsratingSchema");
const salonservice = require("../../salon/model/salonservicesSchema");
const services = require("../model/servicesSchema");
const Response = require("../../../../lib/response_handler.js");
const validator = require("../../../../config/validator.js");
const Config = require("../../../../config/config").get(
  process.env.NODE_ENV || "local"
);
const commonQuery = require("../../../../lib/commonQuery.js");
const util = require("../../../../lib/util");

module.exports = {
  addCategories: addCategories,
  getSalonsRequestList: getSalonsRequestList,
  acceptSalonRequest: acceptSalonRequest,
  suspendSalon: suspendSalon,
  getCategories: getCategories,
  addServices: addServices,
  removeServices: removeServices,
  addRoles: addRoles,
  getRoles: getRoles,
  getActiveSalonsList: getActiveSalonsList,
  getServiceList: getServiceList,
  fetchActiveUsersCount: fetchActiveUsersCount,
  fetchActiveSalonsCount: fetchActiveSalonsCount,
  fetchActiveUsersList: fetchActiveUsersList,
  getArchivedCategories: getArchivedCategories,
  removeCategories: removeCategories,
  getAdminCategoriesList: getAdminCategoriesList,
  removeRole: removeRole,
  updateRole: updateRole,
  awakeCategory: awakeCategory,
  getActiveServices: getActiveServices,
  getActiveAdminList: getActiveAdminList,
  // checkAuthorisation: checkAuthorisation,
  fetchActiveUsersAll: fetchActiveUsersAll,
  forgotPassword: forgotPassword,
  getServices: getServices,
  activeUsers: activeUsers,
  deactiveUsers: deactiveUsers
};

/**
 * Function is use to Add categories
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function addCategories(req, res) {
  async function addCategories() {
    try {
      if (req.body.catname) {
        let newCategory = new categories({
          catname: req.body.catname
        });

        let addCategory = await commonQuery.InsertIntoCollection(
          categories,
          newCategory
        );

        if (!addCategory) {
          return res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_ADD, error)
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
  addCategories().then(function () { });
}
/**
 * Function is use to get salon list which need to be approved by Admin
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function getSalonsRequestList(req, res) {
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  async function getSalonsRequestList() {
    try {
      if (req.body) {
        let condition = {
          isActive: false,
          isDeleted: false,
          isDeclined: false
        };

        let count = await commonQuery.findCount(salons, condition);

        let listOfSalons = await commonQuery.fetch_all_paginated(
          salons,
          condition,
          pageSize,
          currentPage
        );

        if (!listOfSalons) {
          return res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, error)
          );
        } else {
          listOfSalons.forEach(function (c) {
            c.isservicesadded = undefined;
            c.isreviewadded = undefined;
          });
          let dataToPass = {
            data: listOfSalons,
            countNumber: count
          };

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

  getSalonsRequestList().then(function () { });
}

/**
 * Function is use to Accept salon request
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function acceptSalonRequest(req, res) {
  async function acceptSalonRequest() {
    try {
      if (req.body.salon_id) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body.salon_id)
        };
        let activeCondition = {
          isActive: true,
          isApproved: true
        };

        let acceptSalonRequest = await commonQuery.updateOneDocument(
          salons,
          condition,
          activeCondition
        );

        if (!acceptSalonRequest || acceptSalonRequest === null) {
          res.json(
            Response(constant.ERROR_CODE, constant.USER_NOT_FOUND, null)
          );
        } else {
          let user_id = acceptSalonRequest.user_id;

          let activeCondition = {
            isActive: true,
            isApproved: true
          };
          let condition = {
            _id: mongoose.Types.ObjectId(user_id)
          };
          let activeSalonLogin = await commonQuery.updateOneDocument(
            users,
            condition,
            activeCondition
          );
          if (!activeSalonLogin) {
            res.json(
              Response(constant.ERROR_CODE, constant.USER_NOT_FOUND, null)
            );
          } else {
            let messagetTemplate = {
              subject: messageTemplates.acceptSalonRequest["subject"],
              message: messageTemplates.acceptSalonRequest["message"]
            };

            let sendEmailConfirmation = await mailer.sendMail(
              activeSalonLogin.email,
              messagetTemplate
            );

            if (!sendEmailConfirmation) {
            } else {
            }
            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.SALON_REQUEST_ACCEPTED,
                acceptSalonRequest
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

  acceptSalonRequest().then(function () { });
}
/**
 * Function is use to suspend Salon on subsription expiry
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function suspendSalon(req, res) {
  async function suspendSalon() {
    try {
      if (req.body.salon_id) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body.salon_id)
        };
        let activeCondition = {
          isActive: false,
          isDeclined: true,
          isApproved: false
        };

        let suspendedSalon = await commonQuery.updateOneDocument(
          salons,
          condition,
          activeCondition
        );

        if (!suspendedSalon) {
          res.json(
            Response(constant.ERROR_CODE, constant.USER_NOT_FOUND, null)
          );
        } else {
          let user_id = suspendedSalon.user_id;

          let activeCondition = {
            isActive: false,
            isSubmitted: false
          };
          let condition = {
            _id: mongoose.Types.ObjectId(user_id)
          };
          let deactivateLogin = await commonQuery.updateOneDocument(
            users,
            condition,
            activeCondition
          );

          if (!deactivateLogin) {
            res.json(
              Response(constant.ERROR_CODE, constant.USER_NOT_FOUND, null)
            );
          } else {
            let messagetTemplate = {
              subject: messageTemplates.accountSuspended["subject"],
              message: messageTemplates.accountSuspended["message"]
            };

            let sendEmailConfirmation = await mailer.sendMail(
              deactivateLogin.email,
              messagetTemplate
            );

            if (!sendEmailConfirmation) {
            } else {
            }

            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.SALON_SUSPENDED,
                suspendedSalon
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

  suspendSalon().then(function () { });
}

/**
 * Function is use to Fetch list of categories
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function getCategories(req, res) {
  async function getCategories() {
    try {
      if (req.body.type === "categories") {
        let categoriesList = await commonQuery.fetch_categories(
          categories,
          "services",
          "services",
          "_id"
        );
        if (!categoriesList) {
          res.json(
            Response(constant.ERROR_CODE, constant.DATA_NOT_FOUND, null)
          );
        } else {
          categoriesList.forEach(function (v) {
            v.services.forEach(function (v) {
              delete v.isActive;
              delete v.isDeleted;
            });
          });

          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.FETCHED_ALL_DATA,
              categoriesList
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
  getCategories().then(function () { });
}

/**
 * Function is use to Add services in categories
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function addServices(req, res) {
  async function addServices() {
    try {
      if (req.body && req.body.category_id) {
        let newService = new services({
          name: req.body.name,
          category_id: req.body.category_id,
          logo: req.body.logo,
          description: req.body.description
        });

        let saveService = await commonQuery.InsertIntoCollection(
          services,
          newService
        );
        if (!saveService) {
        } else {
          let categoryUpdate = await commonQuery.addServicesInCategories(
            categories,
            req.body.category_id,
            saveService._id
          );

          if (!categoryUpdate) {
            Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error);
          } else {
          }

          res.json(
            Response(constant.SUCCESS_CODE, constant.ADDED_SUCCESS, saveService)
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }

  addServices().then(function () { });
}

/**
 * Function is use to Remove services in categories and soft delete
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function removeServices(req, res) {
  async function removeServices() {
    try {
      if (req.body && req.body.service_id) {
        let condition = {
          _id: req.body.service_id
        };

        let removeCondition = {
          isActive: false,
          isDeleted: true
        };

        let removeService = await commonQuery.updateOneDocument(
          services,
          condition,
          removeCondition
        );

        if (!removeService) {
          Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error);
        } else {
          let categoryUpdate = await commonQuery.removeServicesInCategories(
            categories,
            removeService.category_id,
            req.body.service_id
          );

          if (!categoryUpdate) {
          } else {
          }

          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.DELETED_SUCCESS,
              removeService
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

  removeServices().then(function () { });
}

/**
 * Function is use to add roles(Currently we have only three roles Admin, Salon, User)
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function addRoles(req, res) {
  async function addRoles() {
    try {
      if (req.body && req.body.role) {
        let newRole = new roles({
          name: req.body.role
        });
        let saveRole = await commonQuery.InsertIntoCollection(roles, newRole);
        if (!saveRole) {
          res.json(Response(constant.ERROR_CODE, constant.FAILED_TO_ADD, null));
        } else {
          res.json(
            Response(constant.SUCCESS_CODE, constant.ADDED_SUCCESS, saveRole)
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  addRoles().then(function () { });
}
/**
 * Function is use to get list of Roles
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */
function getRoles(req, res) {
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  async function getRoles() {
    try {
      let countNumber;
      if (req.body && req.body.type === "roles") {
        let condition = {
          status: true,
          isDeleted: false
        };

        let rolesCount = await commonQuery.findCount(roles, condition);

        if (rolesCount) {
          countNumber = rolesCount;
        } else {
          countNumber = rolesCount;
        }

        let rolesList = await commonQuery.fetch_all_paginated(
          roles,
          condition,
          pageSize,
          currentPage
        );

        if (!rolesList) {
          res.json(Response(constant.ERROR_CODE, constant.FAILED_TO_ADD, null));
        } else {
          rolesList.forEach(function (v) {
            v.isDeleted = undefined;
            v.status = undefined;
          });
          let dataToPass = {
            data: rolesList,
            count: countNumber
          };

          res.json(
            Response(constant.SUCCESS_CODE, constant.ADDED_SUCCESS, dataToPass)
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  getRoles().then(function () { });
}

/**
 * Function is use to get list of Approved or active salons
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function getActiveSalonsList(req, res) {
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  async function getActiveSalonsList() {
    try {
      if (req.body && req.body.type === "activesalons") {
        let condition = {
          isActive: true,
          isDeleted: false,
          isApproved: true,
          isDeclined: false
        };
        let activeSalonsList = await commonQuery.fetch_all_paginated(
          salons,
          condition,
          pageSize,
          currentPage
        );
        if (!activeSalonsList) {
          res.json(Response(constant.ERROR_CODE, constant.FAILED_TO_ADD, null));
        } else {
          activeSalonsList.forEach(function (v) {
            v.isDeleted = undefined;
            v.isreviewadded = undefined;
            v.isservicesadded = undefined;
            v.employees = undefined;
            v.location = undefined;
          });

          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.ADDED_SUCCESS,
              activeSalonsList
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
  getActiveSalonsList().then(function () { });
}

/**
 * Function is use to Fetch Active Users Count
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function fetchActiveUsersCount(req, res) {
  async function fetchActiveUsersCount() {
    try {
      if (req.body && req.body.type) {
        if (req.body.type === "user") {
          let roleCondition = {
            name: "user"
          };
          let fetchRoleId = await commonQuery.findoneData(roles, roleCondition);

          let roleId = mongoose.Types.ObjectId(fetchRoleId._id);

          let condition = {
            isActive: true,
            isDeleted: false,
            role_id: roleId
          };
          let usersCount = await commonQuery.findCount(users, condition);
          if (!usersCount) {
            res.json(
              Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
            );
          } else {
            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.FETCHED_ALL_DATA,
                usersCount
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

  fetchActiveUsersCount().then(function () { });
}
/**
 * Function is use to Fetch Active Salon List
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function fetchActiveSalonsCount(req, res) {
  async function fetchActiveSalonsCount() {
    try {
      if (req.body && req.body.type) {
        if (req.body.type === "salon") {
          let condition = {
            isActive: true,
            isDeleted: false,
            isApproved: true,
            isDeclined: false
          };
          let salonsCount = await commonQuery.findCount(salons, condition);

          if (!salonsCount) {
            res.json(
              Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
            );
          } else {
            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.FETCHED_ALL_DATA,
                salonsCount
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

  fetchActiveSalonsCount().then(function () { });
}

function fetchActiveUsersList(req, res) {
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  async function fetchActiveUsersList() {
    try {
      if (req.body && req.body.type) {
        if (req.body.type === "user") {
          let roleCondition = {
            name: "user"
          };
          let fetchRoleId = await commonQuery.findoneData(roles, roleCondition);

          let roleId = mongoose.Types.ObjectId(fetchRoleId._id);

          let condition = {
            isActive: true,
            isDeleted: false,
            role_id: roleId
          };
          let usersList = await commonQuery.fetch_all_paginated(
            users,
            condition,
            pageSize,
            currentPage
          );
          if (!usersList) {
            res.json(
              Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
            );
          } else {
            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.FETCHED_ALL_DATA,
                usersList
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
  fetchActiveUsersList().then(function () { });
}
/**
 * Function is use to remove categories
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function removeCategories(req, res) {
  async function removeCategories() {
    try {
      if (req.body && req.body.category_id) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body.category_id)
        };
        let updateCondition = {
          isActive: false,
          isDeleted: true
        };
        let deleteCategory = await commonQuery.updateOneDocument(
          categories,
          condition,
          updateCondition
        );
        if (!deleteCategory) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.DELETED_SUCCESS,
              deleteCategory
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
  removeCategories().then(function () { });
}
/**
 * Function is use to get list of archived categories
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function getArchivedCategories(req, res) {
  async function getArchivedCategories() {
    try {
      if (req.body && req.body.type === "archive-categories") {
        let condition = {
          isActive: false,
          isDeleted: true
        };
        let archivedCategories = await commonQuery.fetch_all(
          categories,
          condition
        );
        if (!archivedCategories) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.DELETED_SUCCESS,
              archivedCategories
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
  getArchivedCategories().then(function () { });
}

/**
 * Function is use to get list of Admin categories
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function getAdminCategoriesList(req, res) {
  let adminCount;
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  async function getAdminCategoriesList() {
    try {
      if (req.body && req.body.type === "admin-categories") {
        let condition = {
          isActive: true,
          isDeleted: false
        };

        let adminCategoriesCount = await commonQuery.findCount(
          categories,
          condition
        );
        if (!adminCategoriesCount) {
          adminCount = 0;
        } else {
          adminCount = adminCategoriesCount;
        }

        let adminCategories = await commonQuery.fetch_all_paginated(
          categories,
          condition,
          pageSize,
          currentPage
        );
        if (!adminCategories) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          adminCategories.forEach(function (c) {
            c.services = undefined;
          });
          let dataToPass = {
            count: adminCount,
            data: adminCategories
          };

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
  getAdminCategoriesList().then(function () { });
}

/**
 * Function is use to remove role
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function removeRole(req, res) {
  async function removeRole() {
    try {
      if (req.body && req.body.role_id) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body.role_id)
        };
        let updateCondition = {
          status: false,
          isDeleted: true
        };
        let removeRole = await commonQuery.updateOneDocument(
          roles,
          condition,
          updateCondition
        );
        if (!removeRole) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.DELETED_SUCCESS,
              removeRole
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
  removeRole().then(function () { });
}

/**
 * Function is use to update role
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function updateRole(req, res) {
  async function updateRole() {
    try {
      if (req.body && req.body._id) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body._id)
        };
        let updateCondition = {
          name: req.body.name
        };
        let updatedRole = await commonQuery.updateOneDocument(
          roles,
          condition,
          updateCondition
        );
        if (!updatedRole) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(constant.SUCCESS_CODE, constant.USER_UPDATED, updatedRole)
          );
        }
      }
    } catch (error) {
      return res.json(
        Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, error)
      );
    }
  }
  updateRole().then(function () { });
}

/**
 * Function is use to awake category
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function awakeCategory(req, res) {
  async function awakeCategory() {
    try {
      if (req.body && req.body._id) {
        let condition = {
          _id: mongoose.Types.ObjectId(req.body._id)
        };
        let updateCondition = {
          isActive: true,
          isDeleted: false
        };
        let awakeCategories = await commonQuery.updateOneDocument(
          categories,
          condition,
          updateCondition
        );
        if (!awakeCategories) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.USER_UPDATED,
              awakeCategories
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
  awakeCategory().then(function () { });
}

/**
 * Function is use to fetch Services
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function getActiveServices(req, res) {
  let servicesCount;
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;

  async function getActiveServices() {
    try {
      if (req.body.type == "services") {
        let condition = {
          isActive: true,
          isDeleted: false
        };
        servicesCount = await commonQuery.findCount(services, condition);
        if (servicesCount) {
          servicesCount = servicesCount;
        } else {
          servicesCount = 0;
        }
        let servicesList = await commonQuery.fetch_all_paginated(
          services,
          condition,
          pageSize,
          currentPage
        );

        if (!servicesList) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          let dataToPass = {
            data: servicesList,
            count: servicesCount
          };
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

  getActiveServices().then(function () { });
}

/**
 * Function is use to fetch All Admins
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function getActiveAdminList(req, res) {
  let AdminCount;
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;

  async function getActiveAdminList() {
    try {
      if (req.body.type == "admin") {
        let condition = {
          isActive: true,
          isDeleted: false
        };
        AdminCount = await commonQuery.findCount(services, condition);
        if (AdminCount) {
          AdminCount = AdminCount;
        } else {
          AdminCount = 0;
        }
        let servicesList = await commonQuery.fetch_all_paginated(
          services,
          condition,
          pageSize,
          currentPage
        );

        if (!servicesList) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          let dataToPass = {
            data: servicesList,
            count: servicesCount
          };
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

  getActiveAdminList().then(function () { });
}

/**
 * Function is use to fetch All Active Users List
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function fetchActiveUsersAll(req, res) {
  let model;
  let count;
  let countCondition;
  let pageSize =
    +req.query.pageSize || +req.body.pageSize ? req.body.pageSize : 10;
  let currentPage = +req.query.page || req.body.page ? req.body.page : 1;
  async function fetchActiveUsersAll() {
    try {
      if (req.body && req.body.type) {
        if (req.body.type) {
          let roleCondition = {
            name: req.body.type
          };

          if (req.body.type == "user") {
            countCondition = {
              isActive: true,
              isDeleted: false
            };
            model = users;
          } else if (req.body.type == "salon") {
            countCondition = {
              isActive: true,
              isDeleted: false,
              isApproved: true
            };
            model = salons;
          } else if (req.body.type == "admin") {
            countCondition = {
              isActive: true,
              isDeleted: false
            };
            model = users;
          }

          let fetchRoleId = await commonQuery.findoneData(roles, roleCondition);

          let roleId = mongoose.Types.ObjectId(fetchRoleId._id);

          let condition = {
            isActive: true,
            isDeleted: false,
            role_id: roleId
          };

          let fetchCount = await commonQuery.findCount(model, condition);
          if (fetchCount) {
            count = fetchCount;
          }
          let usersList = await commonQuery.fetch_all_paginated(
            model,
            condition,
            pageSize,
            currentPage
          );
          if (!usersList) {
            res.json(
              Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
            );
          } else {
            usersList.forEach(function (c) {
              c.password = undefined;
              c.lat = undefined;
              c.long = undefined;
            });

            let dataToPass = {
              data: usersList,
              count: count
            };
            res.json(
              Response(
                constant.SUCCESS_CODE,
                constant.FETCHED_ALL_DATA,
                dataToPass
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
  fetchActiveUsersAll().then(function () { });
}

/**
 * Function is use to restore password if forgotten
 * @access private
 * @return json
 * Created by SmartData
 * @smartData Enterprises (I) Ltd
 */

function forgotPassword(req, res) {
  async function forgot_password() {
    try {
      if (!req.body.email) {
        res.json(
          Error(
            constant.statusCode.error,
            constant.validateMsg.requiredFieldsMissing,
            constant.validateMsg.requiredFieldsMissing
          )
        );
      } else if (req.body.email && !validator.isEmail(req.body.email)) {
        res.json(
          Error(
            constant.statusCode.error,
            constant.validateMsg.invalidEmail,
            constant.validateMsg.invalidEmail
          )
        );
      } else {
        var model = users;
        var condition = {
          email: req.body.email,
          isDeleted: false,
          isActive: true
        };
        var userObj = await query.findoneData(model, condition, fields);

        if (userObj.data) {
          var condition = {
            _id: userObj.data._id
          };
          var updateData = {
            resetkey: ""
          };
          updateData.resetkey = utility.uuid.v1();

          let updateKey = await query.updateOneDocument(
            model,
            condition,
            updateData
          );
          if (updateKey.data._id) {
            var baseUrl = config.baseUrl;
            var userMailData = {
              userId: userObj.data._id,
              email: userObj.data.email ? userObj.data.email : "",
              firstName: userObj.data.firstName ? userObj.data.firstName : "",
              lastName: userObj.data.lastName ? userObj.data.lastName : "",
              userName: userObj.data.userName ? userObj.data.userName : "",
              link: baseUrl + "#/create-password/" + updateKey.data.resetkey
            };
            let obj = {
              data: userMailData,
              mailType: constant.varibleType.FORGET_PASSWORD //"Forget Password"
            };

            let sendMail = await sendEmailFunction(obj);
            if (sendMail) {
              res.json(
                Response(
                  constant.statusCode.ok,
                  constant.messages.forgotPasswordSuccess
                )
              );
            } else {
              res.json(
                Response(
                  constant.statusCode.internalservererror,
                  constant.validateMsg.internalError
                )
              );
            }
          }
        } else {
          res.json(
            Response(
              constant.statusCode.notFound,
              constant.validateMsg.emailNotExist
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
  forgot_password().then(data => { });
}
/**
 * Function is use to get list service provided by admin
 * @access private
 * @return json
 * Created by Rashmi Ranjan
 * @smartData Enterprises (I) Ltd
 * Created On 09/01/2020
 */
async function getServiceList(req, res) {
  console.log("req.body", req.body);
  if (req.body.user_id) {
    var salonId = await util.getSalonId(req.body.user_id);
    let finalServiceArr = [];

    let salonCond = {
      "isActive": true,
      "isDeleted": false
    };
    let pageSize = 100;
    let page = 1;
    let serviceList = await commonQuery.fetch_all(services, salonCond);
    //  console.log("serviceList", serviceList); return;
    async.each(serviceList, async function (serviceData, firstCB) {
      let serviceCond = {
        "salon_id": salonId,
        "service_id": serviceData._id,
        "category_id": serviceData.category_id
      }
      let salonService = await commonQuery.findAll(salonservice, serviceCond);
      let salonServiceData = {
        "service": serviceData,
        "salonserviceinfo": salonService
      }
      finalServiceArr.push(salonServiceData);
    }, async function (err, data) {
      if (err) {
        console.log("Error @427", err)
      } else {
        res.json(
          Response(
            constant.SUCCESS_CODE,
            finalServiceArr
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
async function getServices(req, res) {
  console.log("res.body", res.body)
  if (req.body.category_id) {
    let cond = {
      "category_id": req.body.category_id
    }

    let servicesList = await commonQuery.fetch_all(services, cond);
    // console.log("servicesList", servicesList); return;
    if (!servicesList) {
      res.json(
        Response(constant.ERROR_CODE, constant.DATA_NOT_FOUND, null)
      );
    } else {
      res.json(
        Response(
          constant.SUCCESS_CODE,
          constant.FETCHED_ALL_DATA,
          servicesList
        )
      );
    }
  } else {
    return res.json(
      Response(constant.ERROR_CODE, constant.REQURIED_FIELDS_NOT, null)
    );
  }
}
function activeUsers(req, res) {
  async function activeUsers() {
    try {
      if (req.body && req.body.type) {
        let model;
        if (req.body.type === "admin" || req.body.type === "user") {
          model = users;
        } else if (req.body.type === "salon") {
          model = salons;
        }

        let condition = { _id: mongoose.Types.ObjectId(req.body._id) };
        let updateCondition = { isActive: true };
        let changeStatus = await commonQuery.updateOneDocument(
          model,
          condition,
          updateCondition
        );
        if (!changeStatus) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.USER_UPDATED,
              finalServiceArr
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
  activeUsers().then(function () { });
}
function deactiveUsers() {
  async function deactiveUsers() {
    try {
      if (req.body && req.body.type) {
        let model;
        if (req.body.type === "admin" || req.body.type === "user") {
          model = users;
        } else if (req.body.type === "salon") {
          model = salons;
        }

        let condition = { _id: mongoose.Types.ObjectId(req.body._id) };
        let updateCondition = { isActive: false };
        let changeStatus = await commonQuery.updateOneDocument(
          model,
          condition,
          updateCondition
        );
        if (!changeStatus) {
          res.json(
            Response(constant.ERROR_CODE, constant.FAILED_TO_PROCESS, null)
          );
        } else {
          res.json(
            Response(
              constant.SUCCESS_CODE,
              constant.USER_UPDATED,
              finalServiceArr
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
  deactiveUsers().then(function () { });
}

function viewDetails(req, res) {
  async function viewDetails() {
    try {
    } catch (error) { }
  }

  viewDetails().then(function () { });
}